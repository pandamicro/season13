<?php

class Model_Admin_Promocode extends \Orm\Model
{
	protected static $_properties = array(
		'id',
		'code',
		'used',
		'used_by',
		'offer',
		'ref'
	);

	protected static $_observers = array(
		'Orm\Observer_CreatedAt' => array(
			'events' => array('before_insert'),
			'mysql_timestamp' => false,
		),
		'Orm\Observer_UpdatedAt' => array(
			'events' => array('before_save'),
			'mysql_timestamp' => false,
		),
	);
}
