<?php

class Model_User_GameInfo extends \Orm\Model
{
	protected static $_properties = array(
		'id',
		'user_id',
		'game_id',
		'bestScore',
		'retry_number',
		'supp'
	);

	protected static $_belongs_to = array(
	    'user' => array(
	        'key_from' => 'user_id',
	        'model_to' => 'Model_Achat_13user',
	        'key_to' => 'id',
	        'cascade_save' => true,
	        'cascade_delete' => false,
	    )
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
