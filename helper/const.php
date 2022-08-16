<?php

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_VERSION' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_VERSION', '0.1.0' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_PREFIX' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_PREFIX', 'wpwax_cs' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_DB_TABLE_PREFIX' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_DB_TABLE_PREFIX', WPWAX_CUSTOMER_SUPPORT_APP_PREFIX );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_REST_BASE_PREFIX' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_REST_BASE_PREFIX', WPWAX_CUSTOMER_SUPPORT_APP_PREFIX );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_IN_DEVELOPMENT' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_IN_DEVELOPMENT', SCRIPT_DEBUG );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_SCRIPT_VERSION' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_SCRIPT_VERSION', WPWAX_CUSTOMER_SUPPORT_APP_VERSION );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_FILE' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_FILE', dirname( dirname( __FILE__ ) ) . '/wpwax-customer-support-app.php' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_BASE' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_BASE', dirname( dirname( __FILE__ ) ) . '/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_LANGUAGES' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_LANGUAGES', WPWAX_CUSTOMER_SUPPORT_APP_BASE . 'languages' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_POST_TYPE' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_POST_TYPE', 'wpwax-customer-support-app' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_TEMPLATE_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_TEMPLATE_PATH', WPWAX_CUSTOMER_SUPPORT_APP_BASE . 'template/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_VIEW_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_VIEW_PATH', WPWAX_CUSTOMER_SUPPORT_APP_BASE . 'view/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_URL' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_URL', plugin_dir_url( WPWAX_CUSTOMER_SUPPORT_APP_FILE ) );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_ASSET_URL' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_ASSET_URL', WPWAX_CUSTOMER_SUPPORT_APP_URL . 'assets/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_ASSET_SRC_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_ASSET_SRC_PATH', 'src/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_JS_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_JS_PATH', WPWAX_CUSTOMER_SUPPORT_APP_ASSET_URL . 'js/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_VENDOR_JS_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_VENDOR_JS_PATH',  WPWAX_CUSTOMER_SUPPORT_APP_ASSET_URL . 'js/vendor-js' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_VENDOR_JS_SRC_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_VENDOR_JS_SRC_PATH', 'assets/vendor-js/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_CSS_PATH' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_CSS_PATH', WPWAX_CUSTOMER_SUPPORT_APP_ASSET_URL . 'css/' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_LOAD_MIN_FILES' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_LOAD_MIN_FILES', ! WPWAX_CUSTOMER_SUPPORT_APP_IN_DEVELOPMENT );
}

// Meta Keys
if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_META_PREFIX' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_META_PREFIX',  WPWAX_CUSTOMER_SUPPORT_APP_PREFIX . '_' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_USER_META_AVATER' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_USER_META_AVATER', WPWAX_CUSTOMER_SUPPORT_APP_META_PREFIX . 'user_avater' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_USER_META_IS_GUEST' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_USER_META_IS_GUEST', WPWAX_CUSTOMER_SUPPORT_APP_META_PREFIX . 'is_guest' );
}

if ( ! defined( 'WPWAX_CUSTOMER_SUPPORT_APP_OPTIONS' ) ) {
    define( 'WPWAX_CUSTOMER_SUPPORT_APP_OPTIONS', WPWAX_CUSTOMER_SUPPORT_APP_META_PREFIX . 'options' );
}