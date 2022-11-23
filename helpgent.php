<?php
/**
 * HelpGent
 *
 * @package           HelpGent
 * @author            wpWax
 * @copyright         2022 wpWax
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       HelpGent
 * Plugin URI:        https://github.com/sovware/helpgent
 * Description:       A customer support app
 * Version:           0.1.2
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            wpWax
 * Author URI:        https://github.com/sovware
 * Text Domain:       helpgent
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Update URI:        https://github.com/sovware/helpgent
 */

require dirname( __FILE__ ) . '/vendor/autoload.php';
require dirname( __FILE__ ) . '/helper/const.php';
require dirname( __FILE__ ) . '/helper/global-functions.php';
require dirname( __FILE__ ) . '/helper/functions.php';
require dirname( __FILE__ ) . '/app.php';

if ( ! function_exists( 'HelpGent' ) ) {
    function HelpGent() {
        return HelpGent::get_instance();
    }
}

HelpGent();
