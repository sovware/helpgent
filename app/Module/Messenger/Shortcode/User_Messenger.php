<?php

namespace HelpGent\Module\Messenger\Shortcode;

use HelpGent\Base\Helper;

class User_Messenger {

    /**
     * Constuctor
     *
     * @return void
     */
    public function __construct() {

        add_shortcode( 'helpgent_messages', [ $this, 'render' ] );

    }

    public function render() {
		if ( Helper\has_expaired_token() ) {
			$email = Helper\get_auth_expaired_token_email();
			return '<div id="wpwax-vm-token-resend-app" data-token-email="' . $email . '" class="wpwax-vm-notice-container"></div>';
		}

		if ( ! Helper\is_user_authenticated() ) {

			$message = __( 'You need to be logged in to view this content.', 'helpgent' );

			return "<div class='wpwax-vm-notice-container'><p class='wpwax-vm-notice wpwax-vm-notice-warning wpwax-vm-text-center'>${message}</p></div>";
		}

        return '<div id="wpwax-vm-chatboard" class="wpwax-vm-app-container-full"></div>';
    }

}