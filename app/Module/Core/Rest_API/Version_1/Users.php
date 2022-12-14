<?php

namespace HelpGent\Module\Core\Rest_API\Version_1;

use \WP_REST_Server;
use \WP_User_Query;
use \WP_Error;
use \WP_REST_Response;
use HelpGent\Module\Core\Rest_API\Rest_Helper;
use HelpGent\Base\Helper;
use HelpGent\Module\Core\Model\Auth_Token_Model;

class Users extends Rest_Base {

    /**
     * Rest Base
     *
     * @var string
     */
    public $rest_base = 'users';

    public function register_routes() {

        register_rest_route( $this->namespace, '/' . $this->rest_base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => array( $this, 'get_items_permissions_check' ),
				'args'                => $this->get_collection_params(),
			),
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_item' ),
				'permission_callback' => array( $this, 'create_item_permissions_check' ),
				'args'                => array_merge( $this->get_endpoint_args_for_item_schema( WP_REST_Server::CREATABLE ), array(
					'email' => array(
						'required' => true,
						'type'     => 'string',
						'description' => __( 'New user email address.', 'helpgent' ),
					),
					'username' => array(
						'required' => false,
						'description' => __( 'New user username.', 'helpgent' ),
						'type'     => 'string',
					),
					'password' => array(
						'required' => false,
						'description' => __( 'New user password.', 'helpgent' ),
						'type'     => 'string',
					),
				) ),
			),
			'schema' => array( $this, 'get_public_item_schema' ),
		) );

		register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', array(
			'args' => array(
				'id' => array(
					'description' => __( 'Unique identifier for the resource.', 'helpgent' ),
					'type'        => 'integer',
				),
			),
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_item' ),
				'permission_callback' => array( $this, 'get_item_permissions_check' ),
				'args'                => array(
					'context' => $this->get_context_param( array( 'default' => 'view' ) ),
				),
			),
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_item' ),
				'permission_callback' => array( $this, 'update_item_permissions_check' ),
				'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE ),
			),
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'delete_item' ),
				'permission_callback' => array( $this, 'delete_item_permissions_check' ),
				'args'                => array(
					'force' => array(
						'default'     => false,
						'type'        => 'boolean',
						'description' => __( 'Required to be true, as resource does not support trashing.', 'helpgent' ),
					),
					'reassign' => array(
						'default'     => 0,
						'type'        => 'integer',
						'description' => __( 'ID to reassign posts to.', 'helpgent' ),
					),
				),
			),
			'schema' => array( $this, 'get_public_item_schema' ),
		) );

		register_rest_route( $this->namespace, '/' . $this->rest_base . '/authenticate', array(
			'args' => array(
				'email' => array(
					'description' => __( 'User email address.', 'helpgent' ),
					'type'        => 'string',
				),
				'password' => array(
					'description' => __( 'User password.', 'helpgent' ),
					'type'        => 'string',
				),
			),
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'authenticate' ),
				'permission_callback' => '__return_true',
			),
		) );

		register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/current-user',
            [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_current_user' ],
                    'permission_callback' => [ $this, 'check_guest_permission' ],
                ],
            ]
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/user-exists',
            [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'user_exists' ],
                    'permission_callback' => [ $this, 'check_guest_permission' ],
                ],
            ]
        );

    }

	/**
	 * Get all users.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		$prepared_args = array();
		$prepared_args['exclude'] = $request['exclude'];
		$prepared_args['include'] = $request['include'];
		$prepared_args['order']   = $request['order'];
		$prepared_args['number']  = $request['per_page'];
		if ( ! empty( $request['offset'] ) ) {
			$prepared_args['offset'] = $request['offset'];
		} else {
			$prepared_args['offset'] = ( $request['page'] - 1 ) * $prepared_args['number'];
		}
		$orderby_possibles = $this->get_orderby_possibles();
		$prepared_args['orderby'] = $orderby_possibles[ $request['orderby'] ];
		$prepared_args['search']  = $request['search'];

		if ( '' !== $prepared_args['search'] ) {
			$prepared_args['search'] = '*' . $prepared_args['search'] . '*';
		}

		// Filter by email.
		if ( ! empty( $request['email'] ) ) {
			$prepared_args['search']         = $request['email'];
			$prepared_args['search_columns'] = array( 'user_email' );
		}

		// Filter by role.
		if ( 'all' !== $request['role'] ) {
			$prepared_args['role'] = $request['role'];
		}

		/**
		 * Filter arguments, before passing to WP_User_Query, when querying users via the REST API.
		 *
		 * @see https://developer.wordpress.org/reference/classes/wp_user_query/
		 *
		 * @param array           $prepared_args Array of arguments for WP_User_Query.
		 * @param WP_REST_Request $request       The current request.
		 */
		$prepared_args = apply_filters( 'helpgent_rest_user_query', $prepared_args, $request );

		$query = new WP_User_Query( $prepared_args );

		$users = array();
		foreach ( $query->results as $user ) {
			$data = $this->prepare_item_for_response( $user, $request );
			$users[] = $this->prepare_response_for_collection( $data );
		}

		$response = rest_ensure_response( $users );

		// Store pagination values for headers then unset for count query.
		$per_page = (int) $prepared_args['number'];
		$page = ceil( ( ( (int) $prepared_args['offset'] ) / $per_page ) + 1 );

		$prepared_args['fields'] = 'ID';

		$total_users = $query->get_total();
		if ( $total_users < 1 ) {
			// Out-of-bounds, run the query again without LIMIT for total count.
			unset( $prepared_args['number'], $prepared_args['offset'] );
			$count_query = new WP_User_Query( $prepared_args );
			$total_users = $count_query->get_total();
		}
		$response->header( 'X-WP-Total', (int) $total_users );
		$max_pages = ceil( $total_users / $per_page );
		$response->header( 'X-WP-TotalPages', (int) $max_pages );

		$base = add_query_arg( $request->get_query_params(), rest_url( sprintf( '/%s/%s', $this->namespace, $this->rest_base ) ) );
		if ( $page > 1 ) {
			$prev_page = $page - 1;
			if ( $prev_page > $max_pages ) {
				$prev_page = $max_pages;
			}
			$prev_link = add_query_arg( 'page', $prev_page, $base );
			$response->link_header( 'prev', $prev_link );
		}
		if ( $max_pages > $page ) {
			$next_page = $page + 1;
			$next_link = add_query_arg( 'page', $next_page, $base );
			$response->link_header( 'next', $next_link );
		}

		return $response;
	}

	/**
	 * Create a single user.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function create_item( $request ) {
		if ( ! empty( $request['id'] ) ) {
			return new WP_Error( 'helpgent_rest_user_id_required', __( 'User ID is required.', 'helpgent' ), 403 );
		}

		if ( email_exists( $request['email'] ) ) {

			$old_user_data = get_user_by( 'email', $request['email'] );

			$this->update_user_meta_fields( $old_user_data, $request );
			$this->update_additional_fields_for_object( $old_user_data, $request );

			$request->set_param( 'context', 'edit' );
			$request->set_param( 'user_exists', true );

			$response = $this->prepare_item_for_response( $old_user_data, $request, [ 'is_new_user' => false ] );
			$response = rest_ensure_response( $response );

			$response->set_status( 201 );
			$response->header( 'Location', rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $old_user_data->ID ) ) );
			$response->header( 'Location', rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $old_user_data->ID ) ) );


			/**
			 * Fires after a user is updated via the REST API.
			 *
			 * @param WP_User         $user_data Data used to create the user.
			 * @param WP_REST_Request $request   Request object.
			 */
			do_action( 'helpgent_rest_update_user', $old_user_data, $request );

			return $response;
		}

        if ( ! is_email( $request['email'] ) ) {
            return new WP_REST_Response( [ 'success' => false, 'message' => __( 'A valid email is required', 'helpgent' ) ], 403 );
        }

        if ( empty( $request['password'] ) ) {
            $request['password'] = wp_generate_password();
        }

		// Create user.
		$user_data = array(
			'user_email' => $request['email'],
			'user_pass'  => $request['password'],
			'role'       => 'subscriber',
		);

		if ( isset( $request['username'] ) ) {
			$user_data['user_login'] = $request['username'];
		} else {
			$username = sanitize_user( current( explode( '@', $request['email'] ) ), true );

			// Ensure username is unique.
			$append = 1;
			$o_username = $username;

			while ( username_exists( $username ) ) {
				$username = $o_username . $append;
				$append++;
			}

			$user_data['user_login'] = $username;
		}

		$user_id = wp_insert_user( $user_data );
		if ( is_wp_error( $user_id ) ) {
			return $user_id;
		}

		$user_data = get_userdata( $user_id );
		$this->update_user_meta_fields( $user_data, $request );
		$this->update_additional_fields_for_object( $user_data, $request );

		/**
		 * Fires after a user is updated via the REST API.
		 *
		 * @param WP_User         $user_data Data used to create the user.
		 * @param WP_REST_Request $request   Request object.
		 * @param boolean         $creating  True when creating user, false when updating user.
		 */
		do_action( 'helpgent_rest_insert_user', $user_data, $request, true );

		$request->set_param( 'context', 'edit' );
		$response = $this->prepare_item_for_response( $user_data, $request, [ 'is_new_user' => true ] );

		$response = rest_ensure_response( $response );
		$response->set_status( 201 );
		$response->header( 'Location', rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $user_data->ID ) ) );

		return $response;
	}

	/**
	 * Get a single user.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_item( $request ) {
		$id        = (int) $request['id'];
		$user_data = get_userdata( $id );

		if ( empty( $id ) || empty( $user_data->ID ) ) {
			return new WP_Error( 'helpgent_rest_invalid_id', __( 'Invalid resource ID.', 'helpgent' ), array( 'status' => 404 ) );
		}

		$user_data = $this->prepare_item_for_response( $user_data, $request );
		$response  = rest_ensure_response( $user_data );

		return $response;
	}

	/**
	 * Update a single user.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function update_item( $request ) {
		$id        = (int) $request['id'];
		$user_data = get_userdata( $id );

		if ( empty( $user_data ) ) {
			return new WP_Error( 'helpgent_rest_invalid_id', __( 'Invalid resource ID.', 'helpgent' ), 400 );
		}

		if ( ! empty( $request['email'] ) && email_exists( $request['email'] ) && $request['email'] !== $user_data->user_email ) {
			return new WP_Error( 'helpgent_rest_user_invalid_email', __( 'Email address is invalid.', 'helpgent' ), 400 );
		}

		if ( ! empty( $request['username'] ) && $request['username'] !== $user_data->user_login ) {
			return new WP_Error( 'helpgent_rest_user_invalid_argument', __( "Username isn't editable.", 'helpgent' ), 400 );
		}

		$updated_user_data = array(
			'ID' => $user_data->ID
		);

		// User email.
		if ( isset( $request['email'] ) ) {
			$updated_user_data['user_email'] = sanitize_email( $request['email'] );
		}

		// User password.
		if ( isset( $request['password'] ) ) {
			$updated_user_data['user_pass'] = $request['password'];
		}

		// User roles.
		global $wp_roles;
    	$allowed_roles = array_keys( $wp_roles->roles );

		if ( isset( $request['add_roles'] ) ) {
			$roles = Helper\convert_string_to_array( $request['add_roles'] );

			foreach( $roles as $role ) {

				if ( ! in_array( $role, $allowed_roles ) ) {
					continue;
				}

				$user_data->add_role( $role );
			}
		}

		if ( isset( $request['remove_roles'] ) ) {
			$roles = Helper\convert_string_to_array( $request['remove_roles'] );

			foreach( $roles as $role ) {

				if ( ! in_array( $role, $allowed_roles ) ) {
					continue;
				}

				$user_data->remove_role( $role );
			}
		}

		$this->update_user_meta_fields( $user_data, $request );
		wp_update_user( $updated_user_data );

		$user_data = get_userdata( $user_data->ID );
		$this->update_additional_fields_for_object( $user_data, $request );

		if ( ! is_user_member_of_blog( $user_data->ID ) ) {
			$user_data->add_role( 'subscriber' );
		}

		/**
		 * Fires after a user is updated via the REST API.
		 *
		 * @param WP_User         $user  Data used to create the user.
		 * @param WP_REST_Request $request   Request object.
		 * @param boolean         $creating  True when creating user, false when updating user.
		 */
		do_action( 'helpgent_rest_update_user', $user_data, $request, false );

		$request->set_param( 'context', 'edit' );
		$response = $this->prepare_item_for_response( $user_data, $request );
		$response = rest_ensure_response( $response );

		return $response;
	}

	/**
	 * Delete a single user.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function delete_item( $request ) {
		$id       = (int) $request['id'];
		$reassign = false === $request['reassign'] ? null : absint( $request['reassign'] );
		$force    = isset( $request['force'] ) ? (bool) $request['force'] : false;

		// We don't support trashing for this type, error out.
		if ( ! $force ) {
			return new WP_Error(
				'helpgent_rest_trash_not_supported',
				/* translators: %s: force=true */
				sprintf( __( "Users do not support trashing. Set '%s' to delete.", 'helpgent' ), 'force=true' ),
				array( 'status' => 501 )
			);
		}

		$user_data = get_userdata( $id );
		if ( ! $user_data ) {
			return new WP_Error( 'helpgent_rest_invalid_id', __( 'Invalid resource id.', 'helpgent' ), array( 'status' => 400 ) );
		}

		if ( ! empty( $reassign ) ) {
			if ( $reassign === $id || ! get_userdata( $reassign ) ) {
				return new WP_Error( 'helpgent_rest_user_invalid_reassign', __( 'Invalid resource id for reassignment.', 'helpgent' ), array( 'status' => 400 ) );
			}
		}

		$request->set_param( 'context', 'edit' );
		$response = $this->prepare_item_for_response( $user_data, $request );

		/** Include admin user functions to get access to wp_delete_user() */
		require_once ABSPATH . 'wp-admin/includes/user.php';

		$result = wp_delete_user( $id, $reassign );

		if ( ! $result ) {
			return new WP_Error(
				'helpgent_rest_cannot_delete',
				__( 'The resource cannot be deleted.', 'helpgent' ),
				array( 'status' => 500 )
			);
		}

		/**
		 * Fires after a user is deleted via the REST API.
		 *
		 * @param WP_User          $user_data User data.
		 * @param WP_REST_Response $response  The response returned from the API.
		 * @param WP_REST_Request  $request   The request sent to the API.
		 */
		do_action( 'helpgent_rest_delete_user', $user_data, $response, $request );

		return $response;
	}


	/**
	 * Authenticate User
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response Response object.
	 */
	public function authenticate( $request ) {
		$args = $request->get_params();

		$email    = ( isset( $args['email'] ) ) ? $args['email'] : '';
		$password = ( isset( $args['password'] ) ) ? $args['password'] : '';

		if ( empty( $email ) ) {
			return new WP_Error(  403, __( 'Email is required', 'helpgent' ) );
		}

		if ( ! is_email( $email ) ) {
			return new WP_Error(  403, __( 'A valid email is required', 'helpgent' ) );
		}

		if ( empty( $password ) ) {
			return new WP_Error(  403, __( 'Password is required', 'helpgent' ) );
		}

		$user = get_user_by( 'email', $email );

		if ( empty( $user ) ) {
			return new WP_Error(  403, __( 'User does not exists', 'helpgent' ) );
		}

		$auth = wp_authenticate( $user->user_login, $password );

		if ( is_wp_error( $auth ) ) {
			return new WP_Error( 403, __( 'The password is incorrect', 'helpgent' ) );
		}

		$auth = $this->prepare_item_for_response( $auth, $request );
		$response = rest_ensure_response( $auth );

		add_filter( 'helpgent_notify_token_created', '__return_false' );

		$token = Auth_Token_Model::create_token( $email );

		remove_filter( 'helpgent_notify_token_created', '__return_false' );

		if ( ! is_wp_error( $token ) ) {
			$response->header( 'Helpgent-Token', $token['token'] );
		}

		return $response;
	}

	/**
     * Get Current User
     *
	 * @param WP_REST_Request $request Request object.
     * @return array Response
     */
    public function get_current_user() {
		$user = Helper\get_current_user();

		return $this->response( true, $user );
	}

	/**
     * Check if User Exists
     *
	 * @param WP_REST_Request $request Request object.
     * @return array Response
     */
    public function user_exists( $request ) {
		$args = $request->get_params();

		$email = ( ! empty( $args['email'] ) ) ? $args['email'] : '';

		if ( ! is_email( $email ) ) {
			$message = __( 'A valid email is required.', 'helpgent' );
            return new WP_Error( 403, $message );
		}

		if ( empty( $email ) ) {
			$message = __( 'Email is required.', 'helpgent' );
            return new WP_Error( 403, $message );
		}

		$users = Helper\get_users_data_by( 'email', [ $email ] );
		$user  = ( ! empty( $users ) ) ? $users[0] : false;

		$message = ( $user ) ? __( 'The user is registered.', 'helpgent' ) : __( 'The user is not registered.', 'helpgent' );

		return $this->response( true, $user,  );

	}

	/**
	 * Prepares a single user output for response.
	 *
	 * @param WP_User         $user    User object.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response Response object.
	 */
	public function prepare_item_for_response( $user, $request, $with_data = [] ) {
		$id     = $user->ID;

		$timezome = ( ! empty( $request['timezone'] ) ) ? $request['timezone'] : '';

		$data = array(
			'id'                     => $id,
			'date_created'           => Helper\get_formatted_time( $user->user_registered, $timezome, 'Y-m-d H:i:s' ),
			'date_created_formatted' => Helper\get_formatted_time( $user->user_registered, $timezome ),
			'name'                   => $user->display_name,
			'username'               => $user->user_login,
			'nickname'               => $user->nickname,
			'first_name'             => $user->first_name,
			'last_name'              => $user->last_name,
			'description'            => $user->description,
			'email'                  => $user->user_email,
			'url'                    => $user->user_url,
			'avater'                 => null,
			'roles'                  => array_values( $user->roles ),
		);

		$data = array_merge( $data, $with_data );

		// User avater.
		$image_id = get_user_meta( $id, HELPGENT_USER_META_AVATER, true );

		if ( $image_id && ! empty( $attachment = get_post( $image_id ) ) ) {
			$data['avater'] = array(
				'id'                => (int) $image_id,
				'date_created'      => Rest_Helper::prepare_date_response( $attachment->post_date ),
				'date_created_gmt'  => Rest_Helper::prepare_date_response( $attachment->post_date_gmt ),
				'date_modified'     => Rest_Helper::prepare_date_response( $attachment->post_modified ),
				'date_modified_gmt' => Rest_Helper::prepare_date_response( $attachment->post_modified_gmt ),
				'src'               => wp_get_attachment_url( $image_id ),
			);
		}

        // Get Custom Metas
        $custom_metas = $this->user_custom_meta_schema();
        foreach( $custom_metas as $meta_key => $schema ) {
            $meta_value = get_user_meta( $id, HELPGENT_META_PREFIX . $meta_key, true );
            $data[ $meta_key ] = $meta_value;
        }

		$context  = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data     = $this->add_additional_fields_to_object( $data, $request );
		$data     = $this->filter_response_by_context( $data, $context );
		$response = rest_ensure_response( $data );

		$response->add_links( $this->prepare_links( $user ) );

		/**
		 * Filters user data returned from the REST API.
		 *
		 * @param WP_REST_Response $response The response object.
		 * @param WP_User          $user     User object used to create response.
		 * @param WP_REST_Request  $request  Request object.
		 */
		return apply_filters( 'helpgent_rest_prepare_user', $response, $user, $request );
	}

	/**
	 * Update user meta fields.
	 *
	 * @param WP_User $user
	 * @param WP_REST_Request $request
	 */
	protected function update_user_meta_fields( $user, $request ) {
		$id = $user->ID;

		// Save first name.
		if ( isset( $request['first_name'] ) ) {
			update_user_meta( $id, 'first_name', Helper\clean_var( $request['first_name'] ) );
		}

		// Save last name.
		if ( isset( $request['last_name'] ) ) {
			update_user_meta( $id, 'last_name', Helper\clean_var( $request['last_name'] ) );
		}

		// Save name.
		if ( isset( $request['name'] ) ) {
            update_user_meta( $id, 'first_name', Helper\clean_var( $request['name'] ) );
			update_user_meta( $id, 'last_name', '' );
		}

		// Save description.
		if ( isset( $request['description'] ) ) {
			update_user_meta( $id, 'description', Helper\clean_var( $request['description'] ) );
		}

		// Save description.
		if ( isset( $request['description'] ) ) {
			update_user_meta( $id, 'description', Helper\clean_var( $request['description'] ) );
		}

		// Save user avater.
		if ( isset( $request['avater'] ) ) {
			if ( empty( $request['avater']['id'] ) && ! empty( $request['avater']['src'] ) ) {
				$upload = Rest_Helper::upload_image_from_url( esc_url_raw( $request['avater']['src'] ) );

				if ( is_wp_error( $upload ) ) {
					return $upload;
				}

				$image_id = Rest_Helper::upload_image_from_url( $upload );
			} else {
				$image_id = isset( $request['avater']['id'] ) ? absint( $request['avater']['id'] ) : 0;
			}

			// Check if image_id is a valid image attachment before updating the term meta.
			if ( $image_id && wp_attachment_is_image( $image_id ) ) {
				update_user_meta( $id, HELPGENT_USER_META_AVATER, $image_id );
			} else {
				delete_term_meta( $id, HELPGENT_USER_META_AVATER );
			}
		}

        $custom_metas = $this->user_custom_meta_schema();

        foreach( $custom_metas as $meta_key => $schema ) {

            if ( ! isset( $request[ $meta_key ] ) ) {
                continue;
            }

            update_user_meta( $id, HELPGENT_META_PREFIX . $meta_key, $request[ $meta_key ] );

        }
	}

	/**
     * User Custom Metas
     *
     * @return array
     */
    protected function user_custom_meta_schema() {
        $metas = [];

        $metas['phone'] = [ 'type' =>  'string' ];

		$metas = apply_filters( 'helpgent_user_metas', $metas );

        return $metas;
    }

	/**
	 * Prepare links for the request.
	 *
	 * @param WP_User $user User object.
	 * @return array Links for the given user.
	 */
	protected function prepare_links( $user ) {
		$links = array(
			'self' => array(
				'href' => rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $user->ID ) ),
			),
			'collection' => array(
				'href' => rest_url( sprintf( '/%s/%s', $this->namespace, $this->rest_base ) ),
			),
		);

		return $links;
	}

    /**
	 * Check if a given request has access to read the users.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		$permissions = $this->check_permissions( $request, 'read' );
		if ( is_wp_error( $permissions ) ) {
			return $permissions;
		}

		if ( ! $permissions ) {
			return new WP_Error( 'helpgent_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'helpgent' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return $permissions;
	}

	/**
	 * Check if a given request has access to create a user.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function create_item_permissions_check( $request ) {
		$permissions = $this->check_permissions( $request, 'create' );
		if ( is_wp_error( $permissions ) ) {
			return $permissions;
		}

		if ( ! $permissions || ! get_option( 'users_can_register' ) ) {
			return new WP_Error( 'helpgent_rest_cannot_create', __( 'Sorry, you are not allowed to create resources.', 'helpgent' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return $permissions;
	}

	/**
	 * Check if a given request has access to read a user.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_item_permissions_check( $request ) {
		$permissions = $this->check_permissions( $request, 'read' );
		if ( is_wp_error( $permissions ) ) {
			return $permissions;
		}

		if ( ! $permissions ) {
			return new WP_Error( 'helpgent_rest_cannot_view', __( 'Sorry, you cannot view this resource.', 'helpgent' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return $permissions;
	}

	/**
	 * Check if a given request has access to update a user.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function update_item_permissions_check( $request ) {
		$permissions = $this->check_permissions( $request, 'edit' );
		if ( is_wp_error( $permissions ) ) {
			return $permissions;
		}

		if ( ! $permissions ) {
			return new WP_Error( 'helpgent_rest_cannot_edit', __( 'Sorry, you are not allowed to edit this resource.', 'helpgent' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return $permissions;
	}

	/**
	 * Check if a given request has access to delete a user.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function delete_item_permissions_check( $request ) {
		$permissions = $this->check_permissions( $request, 'delete' );
		if ( is_wp_error( $permissions ) ) {
			return $permissions;
		}

		if ( ! $permissions ) {
			return new WP_Error( 'helpgent_rest_cannot_delete', __( 'Sorry, you are not allowed to delete this resource.', 'helpgent' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return $permissions;
	}

	/**
	 * Check permissions.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @param string          $context Request context.
	 * @return bool|WP_Error
	 */
	protected function check_permissions( $request, $context = 'read' ) {

		// Check permissions for a single user.
		$id = intval( $request['id'] );

		if ( $id ) {
			$user = get_userdata( $id );

			if ( empty( $user ) ) {
				return new WP_Error( 'helpgent_rest_user_invalid', __( 'Resource does not exist.', 'helpgent' ), array( 'status' => 404 ) );
			}

			return Rest_Helper::check_user_permissions( $context, $user->ID );
		}

		return Rest_Helper::check_user_permissions( $context );
	}

	/**
	 * Get the User's schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'user',
			'type'       => 'object',
			'properties' => array(
				'id' => array(
					'description' => __( 'Unique identifier for the resource.', 'helpgent' ),
					'type'        => 'integer',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'date_created'    => array(
					'description' => __( 'The date the user was created, as GMT.', 'helpgent' ),
					'type'        => 'string',
					'format'      => 'date-time',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'name'           => array(
					'description' => __( 'The display name for the user.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view' ),
				),
				'username' => array(
					'description' => __( 'User login name.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'arg_options' => array(
						'sanitize_callback' => 'sanitize_user',
					),
				),
				'nickname'           => array(
					'description' => __( 'The nickname for the user.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view' ),
				),
				'first_name' => array(
					'description' => __( 'User first name.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'arg_options' => array(
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
				'last_name' => array(
					'description' => __( 'User last name.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'arg_options' => array(
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
				'description'        => array(
					'description' => __( 'Description of the user.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
				),
				'email' => array(
					'description' => __( 'The email address for the user.', 'helpgent' ),
					'type'        => 'string',
					'format'      => 'email',
					'context'     => array( 'view', 'edit' ),
				),
				'password' => array(
					'description' => __( 'User password.', 'helpgent' ),
					'type'        => 'string',
					'context'     => array( 'edit' ),
				),
				'avater'       => array(
					'description' => __( 'User avater image data.', 'helpgent' ),
					'type'        => 'object',
					'context'     => array( 'view', 'edit' ),
					'properties'  => array(
						'id'                => array(
							'description' => __( 'Image ID.', 'helpgent' ),
							'type'        => 'integer',
							'context'     => array( 'view', 'edit' ),
						),
						'date_created'      => array(
							'description' => __( "The date the image was created, in the site's timezone.", 'helpgent' ),
							'type'        => 'date-time',
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'date_created_gmt'  => array(
							'description' => __( 'The date the image was created, as GMT.', 'helpgent' ),
							'type'        => 'date-time',
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'date_modified'     => array(
							'description' => __( "The date the image was last modified, in the site's timezone.", 'helpgent' ),
							'type'        => 'date-time',
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'date_modified_gmt' => array(
							'description' => __( 'The date the image was last modified, as GMT.', 'helpgent' ),
							'type'        => 'date-time',
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'src'               => array(
							'description' => __( 'Image URL.', 'helpgent' ),
							'type'        => 'string',
							'format'      => 'uri',
							'context'     => array( 'view', 'edit' ),
						),
					),
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}

	/**
	 * Get role names.
	 *
	 * @return array
	 */
	protected function get_role_names() {
		global $wp_roles;

		return array_keys( $wp_roles->role_names );
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params = parent::get_collection_params();

		$params['context']['default'] = 'view';

		$params['exclude'] = array(
			'description'       => __( 'Ensure result set excludes specific IDs.', 'helpgent' ),
			'type'              => 'array',
			'items'             => array(
				'type'          => 'integer',
			),
			'default'           => array(),
			'sanitize_callback' => 'wp_parse_id_list',
		);
		$params['include'] = array(
			'description'       => __( 'Limit result set to specific IDs.', 'helpgent' ),
			'type'              => 'array',
			'items'             => array(
				'type'          => 'integer',
			),
			'default'           => array(),
			'sanitize_callback' => 'wp_parse_id_list',
		);
		$params['offset'] = array(
			'description'        => __( 'Offset the result set by a specific number of items.', 'helpgent' ),
			'type'               => 'integer',
			'sanitize_callback'  => 'absint',
			'validate_callback'  => 'rest_validate_request_arg',
		);
		$params['order'] = array(
			'default'            => 'asc',
			'description'        => __( 'Order sort attribute ascending or descending.', 'helpgent' ),
			'enum'               => array( 'asc', 'desc' ),
			'sanitize_callback'  => 'sanitize_key',
			'type'               => 'string',
			'validate_callback'  => 'rest_validate_request_arg',
		);
		$params['orderby'] = array(
			'default'            => 'name',
			'description'        => __( 'Sort collection by object attribute.', 'helpgent' ),
			'enum'               => array_keys( $this->get_orderby_possibles() ),
			'sanitize_callback'  => 'sanitize_key',
			'type'               => 'string',
			'validate_callback'  => 'rest_validate_request_arg',
		);
		$params['email'] = array(
			'description'        => __( 'Limit result set to resources with a specific email.', 'helpgent' ),
			'type'               => 'string',
			'format'             => 'email',
			'validate_callback'  => 'rest_validate_request_arg',
		);
		$params['role'] = array(
			'description'        => __( 'Limit result set to resources with a specific role.', 'helpgent' ),
			'type'               => 'string',
			'default'            => 'all',
			'enum'               => array_merge( array( 'all' ), $this->get_role_names() ),
			'validate_callback'  => 'rest_validate_request_arg',
		);
		return $params;
	}

	protected function get_orderby_possibles() {
		return array(
			'id'              => 'ID',
			'include'         => 'include',
			'name'            => 'display_name',
			'registered_date' => 'registered',
		);
	}

}
