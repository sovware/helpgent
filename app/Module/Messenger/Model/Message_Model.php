<?php

namespace WPWaxCustomerSupportApp\Module\Messenger\Model;

use \WP_Error;
use WPWaxCustomerSupportApp\Model\DB_Model;
use WPWaxCustomerSupportApp\Base\Helper;

class Message_Model extends DB_Model {

    /**
     * Table Name
     *
     * @var string
     */
    public static $table = 'messages';

    /**
     * Get Items
     *
     * @param array $args
     * @return array
     */
    public static function get_items( $args = [], $debug = false ) {
        global $wpdb;

		$messages_table = self::get_table_name( self::$table );
		$seen_by_table  = self::get_table_name( 'messages_seen_by' );
		$term_table     = self::get_table_name( 'session_term_relationships' );
		$table_name     = 'message';

		$current_user_id = ( ! empty( $args['current_user_id'] ) ) ? $args['current_user_id'] : 0;

        $default = [];

        $default['limit']    = 20;
        $default['page']     = 1;
        $default['order_by'] = 'latest';
        $default['group_by'] = '';
        $default['seen']     = '';

        $args = ( is_array( $args ) ) ? array_merge( $default, $args ) : $default;
		$limit  = $args['limit'];

		if ( $limit < 0 ) {
			$limit = null;
		}

		$offset = ( ! is_null( $limit ) ) ? ( $limit * $args['page'] ) - $limit : null;

		$computed_fields = [
			'total_message'    => "COUNT( message.id ) AS total_message",
			'users'            => "GROUP_CONCAT( DISTINCT message.user_id ) as users",
			'total_unread'     => "COUNT( CASE WHEN message.is_seen = 0 THEN 1 ELSE NULL END ) AS total_unread",
			'terms'            => "GROUP_CONCAT( DISTINCT $term_table.term_taxonomy_id ) as terms",
			'unread_messages'  => "GROUP_CONCAT( DISTINCT CASE WHEN message.is_seen = 0 THEN message.id ELSE NULL END ) as unread_messages",
			'my_message_count' => "COUNT( CASE WHEN message.user_id = $current_user_id THEN 1 ELSE NULL END ) as my_message_count",
		];

        // Prepare Order
        switch ( $args['order_by'] ) {
            case 'latest':
                $order_by_field = "updated_on";
                $order          = " ORDER BY message.$order_by_field DESC";
                break;

            case 'oldest':
                $order_by_field = "created_on";
                $order          = " ORDER BY message.$order_by_field ASC";
                break;

            case 'read':
                $order_by_field = "total_unread";
                $order          = " ORDER BY $order_by_field ASC";
                break;

            case 'unread':
                $order_by_field = "total_unread";
                $order          = " ORDER BY $order_by_field DESC";
                break;

            default:
				$order_by_field = "updated_on";
                $order          = " ORDER BY message.$order_by_field DESC";
                break;
        }

		$where = ' WHERE 1=1';

        // Construct where clause
        if ( ! empty( $args['where'] ) && is_array( $args[ 'where' ] ) ) {

			// Seen By
			if ( isset( $args['where']['seen'] ) ) {
				self::prepare_seen_by_where_query( $args );
			}

			$supported_conditions = [ 'AND', 'OR' ];

            foreach ( $args['where'] as $key => $value ) {

				$where_table_name = "{$table_name}.";

				// ---> C1
				if ( ! is_array( $value ) ) {
					$where .= " AND {$where_table_name}{$key}='{$value}'";
					continue;
				}

				// ---> C2
                if ( ! empty( $value['condition'] && ! empty( $value['rules'] ) ) ) {

					$_where     = '';
					$_condition = ( ! empty( $value['condition'] ) && in_array( $value['condition'], $supported_conditions ) ) ? $value['condition'] : 'AND';

                    foreach ( $value['rules'] as $index => $rule ) {
						$_key       = $where_table_name . $rule['field'];
						$_compare   = $rule['compare'];
						$_value     = $rule['value'];

						if ( $index === 0 ) {
							$_where .= " {$_key} {$_compare} {$_value}";
						} else {
							$_where .= " {$_condition} {$_key} {$_compare} {$_value}";
						}
					}

					$_where = trim( $_where );
					$where .= " AND ( $_where )";

                    continue;
                }

				// ---> C3
				$_key     = $where_table_name . $value['field'];
				$_compare = $value['compare'];
				$_value   = $value['value'];

				$where .= " AND {$_key} {$_compare} {$_value}";
            }

        }

		$group_by = ( ! empty( $args['group_by'] ) ) ? ' GROUP BY message.' . $args['group_by'] : '';
		$having   = '';

		if ( is_array( $args['having'] ) ) {
			$having_field     = isset( $args['having']['field'] ) ? $args['having']['field'] : '';
			$having_field     = in_array( $having_field, array_keys( $computed_fields ) ) ? $having_field : 'message.' . $having_field;
			$having_condition = isset( $args['having']['condition'] ) ? $args['having']['condition'] : '=';
			$having_value     = isset( $args['having']['value'] ) ? $args['having']['value'] : '';

			$having           = " HAVING {$having_field} {$having_condition} {$having_value}";
		}

		$fields = [ '*' ];

		if ( ! empty( $args['fields'] ) && is_string( $args['fields'] ) ) {
			$_fields = preg_replace( "/\s/", '', $args['fields'] );
			$_fields = trim( $_fields, ',' );
			$_fields = explode( ',', $_fields );
			$fields  = ( is_array( $_fields ) ) ? $_fields : $fields;

			if ( is_array( $_fields ) ) {
				$fields  = $_fields;

				if ( ! in_array( $order_by_field, $fields ) ) {
					$fields[] = $order_by_field;
				}
			}
		}

		if ( ! empty( $args['fields'] ) && is_array( $args['fields'] ) ) {
			$fields = $args['fields'];

			if ( ! in_array( $order_by_field, $fields ) ) {
				$fields[] = $order_by_field;
			}
		}

		$message_table_fields = [
			"$messages_table.*",
			"$seen_by_table.message_id",
			"GROUP_CONCAT( DISTINCT $seen_by_table.user_id ) as seen_by",
			"COUNT( CASE WHEN $seen_by_table.user_id = $current_user_id THEN 1 ELSE NULL END ) AS is_seen",
		];

		// Prefix Fields
		$fields = array_map( function( $item ) use( $computed_fields ) {

			if ( in_array( $item, array_keys( $computed_fields ) ) ) {
				return $computed_fields[ $item ];
			}

			return "message.{$item}";

		}, $fields );

		$fields = join( ', ', $fields );
		$fields = trim( $fields, ', ' );

		$message_table_fields = trim( join( ', ', $message_table_fields ) );

		$select_messages = "SELECT $message_table_fields FROM $messages_table LEFT JOIN $seen_by_table ON $messages_table.id = $seen_by_table.message_id";
		$select          = "SELECT $fields FROM ( {$select_messages} GROUP BY $messages_table.id ) AS message LEFT JOIN $term_table ON message.session_id = $term_table.session_id";
		$pagination      = ( ! is_null( $limit ) ) ? " LIMIT $limit OFFSET $offset" : '';
		$query           = $select . $where . $group_by . $having . $order . $pagination;

		return $wpdb->get_results( $query, ARRAY_A );

    }

	protected static function prepare_seen_by_where_query( &$args = [] ) {
		$is_seen = Helper\is_truthy( $args['where']['seen'] );

		if ( $is_seen ) {
			$args['where']['seen_by'] = [
				'field'     => 'is_seen',
				'compare'   => '=',
				'value'     => 1,
			];
		} else {
			$args['where']['seen_by'] = [
				'field'   => 'is_seen',
				'compare' =>'=',
				'value'   => 0,
			];
		}

		unset( $args['where']['seen'] );
	}

    /**
     * Get Item
     *
     * @param int $id
     * @return array|WP_Error
     */
    public static function get_item( $id ) {
        global $wpdb;

        if ( empty( $id ) ) {
            $message = __( 'Resource ID is required.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

		$table = self::get_table_name( self::$table );

		$query = $wpdb->prepare( "SELECT * FROM $table WHERE id = %d", array( $id ) );

		$result = $wpdb->get_row( $query, ARRAY_A );

        if ( empty( $result ) ) {
            $message = __( 'Could not find the resource.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

		return $result;
    }

    /**
     * Create Item
     *
     * @param array $args
     * @return int|WP_Error
     */
    public static function create_item( $args = [] ) {
        global $wpdb;

		$table = self::get_table_name( self::$table );

        $default = [];

        $default['user_id']       = 0;
        $default['session_id']    = self::generate_session();
        $default['note']          = '';
        $default['message']       = '';
        $default['attachment_id'] = '';
        $default['message_type']  = '';

        $args = Helper\merge_params( $default, $args );
        $time = current_time( 'mysql', true );

        $args['created_on'] = $time;
        $args['updated_on'] = $time;

        if ( isset( $args['id'] ) ) {
            unset( $args['id'] );
        }

		$result = $wpdb->insert( $table, $args );

        if ( empty( $result ) ) {
            $message = __( 'Could not create the resource.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

		$message = self::get_item( $wpdb->insert_id );

		// Mark as seen by author
		Messages_Seen_By_Model::create_item([
			'user_id'    => $message['user_id'],
			'message_id' => $message['id'],
			'session_id' => $message['session_id'],
		]);

		return $message;
    }

    /**
     * Update Item
     *
     * @param array $args
     * @return array|WP_Error
     */
    public static function update_item( $args = [] ) {
        global $wpdb;

        if ( empty( $args['id'] ) ) {
            $message = __( 'Resource ID is required.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

		$table    = self::get_table_name( self::$table );
		$old_data = self::get_item( $args['id'] );

        if ( empty( $old_data ) ) {
            $message = __( 'Could not find the resource.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

        $args = Helper\filter_params( $old_data, $args );

        $time = current_time( 'mysql', true );
        $args['updated_on'] = $time;

        if ( ! empty( $args['seen_by'] ) ) {
            $args['seen_by'] = maybe_serialize( $args['seen_by'] );
        }

        $where = ['id' => $args['id'] ];

		$result = $wpdb->update( $table, $args, $where, null, '%d' );

        if ( empty( $result ) ) {
            $message = __( 'Could not update the resource.', 'wpwax-customer-support-app' );
            return new WP_Error( 403, $message );
        }

        return self::get_item( $args['id'] );
    }

    /**
     * Delete Item
     *
     * @param array $args
     * @return bool|WP_Error
     */
    public static function delete_item( $id ) {
        global $wpdb;

        if ( empty( $id ) ) {
            return false;
        }

		$message = self::get_item( $id );

		if ( is_wp_error( $message ) ) {
			return $message;
		}

		$table = self::get_table_name( self::$table );
		$where = ['id' => $id ];

		$status = $wpdb->delete( $table, $where, '%d' );

		if ( empty( $status ) ) {
			return new WP_Error( 403, __( 'Could not delete the resource.', 'wpwax-customer-support-app' ) );
		}

		// Mark as seen by author
		Messages_Seen_By_Model::delete_item_where([
			'user_id'    => $message['user_id'],
			'message_id' => $message['id'],
			'session_id' => $message['session_id'],
		]);

        return true;
    }

    /**
     * Delete Item Where
     *
     * @param array $args
     * @return bool
     */
    public static function delete_item_where( $where = [] ) {
        global $wpdb;

		$table = self::get_table_name( self::$table );
		$status = $wpdb->delete( $table, $where, '%d' );

        return ( ! empty( $status ) ) ? true : false;
    }


    /**
     * Generate Session
     *
     * @return string
     */
    protected static function generate_session() {
		$time   = microtime();
		$time   = str_replace( array( ' ', '.' ), '', $time );
		$chars  = substr( str_shuffle( 'abcdefghijklmnopqrstuvwxyz' ), 1, 10 );
		$random = $chars . $time;
		$random = str_shuffle( $random );

		return $random;
	}

}

