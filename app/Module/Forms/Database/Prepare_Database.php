<?php

namespace HelpGent\Module\Forms\Database;

class Prepare_Database {

    /**
     * Constructor
     *
     * @return void
     */
    public function __construct() {

        $this->create_tables();

    }

	/**
     * Create Tables
     *
     * @return void
     */
    private function create_tables() {

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $this->get_schema() );

	}

    /**
     * Get Schema
	 *
	 * @return string
     */
	private function get_schema() {
		global $wpdb;

        $table_prefix = $wpdb->prefix . HELPGENT_DB_TABLE_PREFIX;
        $collate      = $wpdb->has_cap( 'collation' ) ? $wpdb->get_charset_collate() : '';

		$tables = "
		CREATE TABLE {$table_prefix}_forms (
			id bigint(20) unsigned NOT NULL auto_increment,
			name varchar(255) NOT NULL DEFAULT '',
			status varchar(255) NOT NULL DEFAULT 'publish',
			options longtext NOT NULL,
			PRIMARY KEY (id)
		  ) $collate;

		CREATE TABLE {$table_prefix}_form_page_relationships (
			form_id bigint(20) unsigned NOT NULL,
			page_id bigint(20) unsigned NOT NULL,
			PRIMARY KEY (form_id, page_id),
			KEY page_id (page_id)
		  ) $collate;
		";

		return $tables;
	}

}