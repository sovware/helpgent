<?php

namespace HelpGent\Module\Core\Admin;

use HelpGent\Helper;

class Init
{

	/**
	 * Constuctor
	 *
	 * @return void
	 */
	public function __construct()
	{

		// Register Controllers
		$controllers = $this->get_controllers();
		Helper\Serve::register_services($controllers);
	}

	/**
	 * Controllers
	 *
	 * @return array
	 */
	protected function get_controllers()
	{
		return [
			Admin_Menu\Init::class,
			Admin_Notices::class,
		];
	}
}
