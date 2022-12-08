<?php

if ( ! defined( 'HELPGENT_VERSION' ) ) {
    define( 'HELPGENT_VERSION', '1.0.2' );
}

if ( ! defined( 'HELPGENT_PREFIX' ) ) {
    define( 'HELPGENT_PREFIX', 'helpgent' );
}

if ( ! defined( 'HELPGENT_AUTHOR_URL' ) ) {
    define( 'HELPGENT_AUTHOR_URL', 'https://wpwax.com/' );
}

if ( ! defined( 'HELPGENT_DOWNLOAD_ID' ) ) {
    define( 'HELPGENT_DOWNLOAD_ID', '34827' );
}

if ( ! defined( 'HELPGENT_AUTH_TOKEN_EXPIRES_AFTER_DAYS' ) ) {
    define( 'HELPGENT_AUTH_TOKEN_EXPIRES_AFTER_DAYS', apply_filters( 'helpgent_auth_token_expires_after_days', 30 ) );
}

if ( ! defined( 'HELPGENT_UPLOAD_DIR_PATH' ) ) {
	define( 'HELPGENT_UPLOAD_DIR_PATH',  WP_CONTENT_DIR . '/uploads/' . HELPGENT_PREFIX );
}

if ( ! defined( 'HELPGENT_UPLOAD_DIR_URL' ) ) {
	define( 'HELPGENT_UPLOAD_DIR_URL',  WP_CONTENT_URL . '/uploads/' . HELPGENT_PREFIX );
}

if ( ! defined( 'HELPGENT_DB_DATE_TIME_FORMAT' ) ) {
    define( 'HELPGENT_DB_DATE_TIME_FORMAT', 'Y-m-d H:i:s' );
}

if ( ! defined( 'HELPGENT_DB_TABLE_PREFIX' ) ) {
    define( 'HELPGENT_DB_TABLE_PREFIX', HELPGENT_PREFIX );
}

if ( ! defined( 'HELPGENT_REST_BASE_PREFIX' ) ) {
    define( 'HELPGENT_REST_BASE_PREFIX', HELPGENT_PREFIX );
}

if ( ! defined( 'HELPGENT_IN_DEVELOPMENT' ) ) {
    define( 'HELPGENT_IN_DEVELOPMENT', SCRIPT_DEBUG );
}

if ( ! defined( 'HELPGENT_SCRIPT_VERSION' ) ) {
    define( 'HELPGENT_SCRIPT_VERSION', HELPGENT_VERSION );
}

if ( ! defined( 'HELPGENT_FILE' ) ) {
    define( 'HELPGENT_FILE', dirname( dirname( __FILE__ ) ) . '/helpgent.php' );
}

if ( ! defined( 'HELPGENT_BASE' ) ) {
    define( 'HELPGENT_BASE', dirname( dirname( __FILE__ ) ) . '/' );
}

if ( ! defined( 'HELPGENT_LANGUAGES' ) ) {
    define( 'HELPGENT_LANGUAGES', HELPGENT_BASE . 'languages' );
}

if ( ! defined( 'HELPGENT_POST_TYPE' ) ) {
    define( 'HELPGENT_POST_TYPE', 'helpgent' );
}

if ( ! defined( 'HELPGENT_TEMPLATE_PATH' ) ) {
    define( 'HELPGENT_TEMPLATE_PATH', HELPGENT_BASE . 'template/' );
}

if ( ! defined( 'HELPGENT_VIEW_PATH' ) ) {
    define( 'HELPGENT_VIEW_PATH', HELPGENT_BASE . 'view/' );
}

if ( ! defined( 'HELPGENT_URL' ) ) {
    define( 'HELPGENT_URL', plugin_dir_url( HELPGENT_FILE ) );
}

if ( ! defined( 'HELPGENT_ASSET_URL' ) ) {
    define( 'HELPGENT_ASSET_URL', HELPGENT_URL . 'assets/' );
}

if ( ! defined( 'HELPGENT_ASSET_PATH' ) ) {
    define( 'HELPGENT_ASSET_PATH', HELPGENT_BASE . 'assets/' );
}

if ( ! defined( 'HELPGENT_ASSET_SRC_PATH' ) ) {
    define( 'HELPGENT_ASSET_SRC_PATH', 'src/' );
}

if ( ! defined( 'HELPGENT_JS_PATH' ) ) {
    define( 'HELPGENT_JS_PATH', HELPGENT_ASSET_URL . 'js/' );
}

if ( ! defined( 'HELPGENT_VENDOR_JS_PATH' ) ) {
    define( 'HELPGENT_VENDOR_JS_PATH',  HELPGENT_ASSET_URL . 'vendor-js/' );
}

if ( ! defined( 'HELPGENT_VENDOR_JS_SRC_PATH' ) ) {
    define( 'HELPGENT_VENDOR_JS_SRC_PATH', 'assets/vendor-js/' );
}

if ( ! defined( 'HELPGENT_CSS_PATH' ) ) {
    define( 'HELPGENT_CSS_PATH', HELPGENT_ASSET_URL . 'css/' );
}

if ( ! defined( 'HELPGENT_LOAD_MIN_FILES' ) ) {
    define( 'HELPGENT_LOAD_MIN_FILES', ! HELPGENT_IN_DEVELOPMENT );
}

// Meta Keys
if ( ! defined( 'HELPGENT_META_PREFIX' ) ) {
    define( 'HELPGENT_META_PREFIX', '_' . HELPGENT_PREFIX . '_' );
}

if ( ! defined( 'HELPGENT_USER_META_AVATER' ) ) {
    define( 'HELPGENT_USER_META_AVATER', HELPGENT_META_PREFIX . 'user_avater' );
}

if ( ! defined( 'HELPGENT_USER_META_IS_CLIENT' ) ) {
    define( 'HELPGENT_USER_META_IS_CLIENT', HELPGENT_META_PREFIX . 'is_client' );
}

if ( ! defined( 'HELPGENT_USER_META_PHONE' ) ) {
    define( 'HELPGENT_USER_META_PHONE', HELPGENT_META_PREFIX . 'phone' );
}

if ( ! defined( 'HELPGENT_OPTIONS' ) ) {
    define( 'HELPGENT_OPTIONS', HELPGENT_META_PREFIX . 'options' );
}