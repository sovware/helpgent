<?php

namespace HelpGent\Module\Settings_Panel\Model;
use HelpGent\Base\Helper;

class Settings {

	/**
	 * Get Default Options
	 *
	 * @return array $options
	 */
	public static function get_default_options() {
		$options = [
			'guestSubmission'              => true,
			'chatHeadPosition'             => 'bottom-right',
			'userDashboardPage'            => Helper\get_option( 'userDashboardPage', get_option('page_on_front') ),
			'maxVideoLength'               => '2',
			'maxVoiceLength'               => '2',
			'videoQuality'                 => '720',
			'attatchmentDeletionAfter'     => '',
			'maxUploadSize'                => '50',
			'enableEmailNotification'      => true,
			'adminEmailNotificationType'   => 'single',
			'userEmailNotificationType'    => 'single',
			'enableEmailHeader'            => true,
			'emailHeaderColor'             => '#000000',
			'emailTemplateFromName'        => '',
			'emailTemplateFromEmail'       => '',
			'emailTemplateGreetingSubject' => '',
			'emailTemplateGreetingBody'    => '',
			'emailTemplateMessageSubject'  => '',
			'emailTemplateMessageBody'     => '',
			'enableEmailFooter'            => true,
			'helpgent_license'             => '',
		];

		$options = apply_filters( 'helpgent_default_settings', $options );

		return $options;
	}

}