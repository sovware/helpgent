<?php
/**
 * @author  wpWax
 * @since   1.0
 * @version 1.0
 */

namespace wpWax\vm;

class Rest_API {

	public static $namespace = 'wpwax-vm/v1';

	public static function init() {
		add_action( 'rest_api_init', array( __CLASS__, 'register_routes' ) );
	}

	public static function register_routes() {

		/**
		 * Get all forms: http://example.com/wp-json/wpwax-vm/v1/get_forms
		 *
		 * Returns: [
		 * 		{
		 * 			"form_id" : 1,
		 * 			"name"    : "Form 1"
		 * 		},
		 * 		{ ... repeat ...}
		 * ]
		 */
		register_rest_route(
			self::$namespace,
			'get_forms',
			array(
				'methods'             => 'GET',
				'callback'            => array( __CLASS__, 'get_all_forms' ),
				// 'permission_callback' => array( __CLASS__, 'check_admin_permission' ),
			)
		);

		/**
		 * Create a new form: http://example.com/wp-json/wpwax-vm/v1/create_form
		 *
		 * args: {
		 * 			"name"   : "Form 1",
		 * 			"options" : {},
		 * 		}
		 */
		register_rest_route(
			self::$namespace,
			'create_form',
			array(
				'methods'             => 'POST',
				'callback'            => array( __CLASS__, 'create_new_form' ),
				// 'permission_callback' => array( __CLASS__, 'check_admin_permission' ),
			)
		);


	}

	public static function check_admin_permission() {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return new \WP_Error(
				'admin_check_failed',
				__( 'You are not allowed to perform this operation.' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		return true;
	}

	public static function get_all_forms() {
		global $wpdb;
		return [9,10];
	}

	public static function create_new_form( $request ) {
		global $wpdb;
		$args = $request->get_params();
		$args = array_map( function( $value ){
			return sanitize_text_field( $value );
		}, $args );

		$table = $wpdb->prefix . 'vm_forms';
		$data = array(
			'name' => $args['name'],
			'options' => $args['options'],
		);

		try {
			$result = $wpdb->insert ($table, $data );
		} catch (\Throwable $th) {
			//throw $th;
		}


		return $result ? $wpdb->insert_id : false;
	}
}