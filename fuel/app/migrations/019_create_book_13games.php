<?php

namespace Fuel\Migrations;

class Create_book_13games
{
	public function up()
	{
		\DBUtil::create_table('book_13games', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true),
			'name' => array('constraint' => 64, 'type' => 'varchar'),
			'epid' => array('constraint' => 11, 'type' => 'int'),
			'expo' => array('constraint' => 255, 'type' => 'varchar'),
			'instruction' => array('type' => 'text'),
			'presentation' => array('type' => 'text'),
			'independant' => array('constraint' => '1', 'type' => 'int'),
			'categories' => array('constraint' => 255, 'type' => 'varchar'),
			'metas' => array('type' => 'text'),		
			'class_name' => array('constraint' => 255, 'type' => 'varchar'),
			'path' => array('constraint' => 255, 'type' => 'varchar'),
			'file_name' => array('constraint' => 255, 'type' => 'varchar'),
			'created_at' => array('constraint' => 11, 'type' => 'int'),
			'updated_at' => array('constraint' => 11, 'type' => 'int'),
			
		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('book_13games');
	}
}