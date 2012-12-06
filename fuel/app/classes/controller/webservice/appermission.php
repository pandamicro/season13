<?php
class Controller_Webservice_Appermission extends Controller_Template 
{
    public $template = 'admin/template';
    
    public function before()
    {
    	parent::before();
    	
        // Assign current_user to the instance so controllers can use it
		$this->current_user = Auth::check() ? Model_13user::find_by_pseudo(Auth::get_screen_name()) : null;
		// Set a global variable so views can use it
		View::set_global('current_user', $this->current_user);
    }

	public function action_index()
	{
		$data['webservice_appermissions'] = Model_Webservice_Appermission::find('all');
		$this->template->title = "Webservice_appermissions";
		$this->template->content = View::forge('webservice/appermission/index', $data);

	}

	public function action_view($id = null)
	{
		$data['webservice_appermission'] = Model_Webservice_Appermission::find($id);

		is_null($id) and Response::redirect('Webservice_Appermission');

		$this->template->title = "Webservice_appermission";
		$this->template->content = View::forge('webservice/appermission/view', $data);

	}

	public function action_create()
	{
		if (Input::method() == 'POST')
		{
			$val = Model_Webservice_Appermission::validate('create');
			
			if ($val->run())
			{
				$webservice_appermission = Model_Webservice_Appermission::forge(array(
					'appid' => Input::post('appid'),
					'action' => Input::post('action'),
					'can_get' => Input::post('can_get'),
					'can_post' => Input::post('can_post'),
					'can_put' => Input::post('can_put'),
					'can_delete' => Input::post('can_delete'),
				));

				if ($webservice_appermission and $webservice_appermission->save())
				{
					Session::set_flash('success', 'Added webservice_appermission #'.$webservice_appermission->id.'.');

					Response::redirect('webservice/appermission');
				}

				else
				{
					Session::set_flash('error', 'Could not save webservice_appermission.');
				}
			}
			else
			{
				Session::set_flash('error', $val->error());
			}
		}

		$this->template->title = "Webservice_Appermissions";
		$this->template->content = View::forge('webservice/appermission/create');

	}

	public function action_edit($id = null)
	{
		is_null($id) and Response::redirect('Webservice_Appermission');

		$webservice_appermission = Model_Webservice_Appermission::find($id);

		$val = Model_Webservice_Appermission::validate('edit');

		if ($val->run())
		{
			$webservice_appermission->appid = Input::post('appid');
			$webservice_appermission->action = Input::post('action');
			$webservice_appermission->can_get = Input::post('can_get');
			$webservice_appermission->can_post = Input::post('can_post');
			$webservice_appermission->can_put = Input::post('can_put');
			$webservice_appermission->can_delete = Input::post('can_delete');

			if ($webservice_appermission->save())
			{
				Session::set_flash('success', 'Updated webservice_appermission #' . $id);

				Response::redirect('webservice/appermission');
			}

			else
			{
				Session::set_flash('error', 'Could not update webservice_appermission #' . $id);
			}
		}

		else
		{
			if (Input::method() == 'POST')
			{
				$webservice_appermission->appid = $val->validated('appid');
				$webservice_appermission->action = $val->validated('action');
				$webservice_appermission->can_get = $val->validated('can_get');
				$webservice_appermission->can_post = $val->validated('can_post');
				$webservice_appermission->can_put = $val->validated('can_put');
				$webservice_appermission->can_delete = $val->validated('can_delete');

				Session::set_flash('error', $val->error());
			}

			$this->template->set_global('webservice_appermission', $webservice_appermission, false);
		}

		$this->template->title = "Webservice_appermissions";
		$this->template->content = View::forge('webservice/appermission/edit');

	}

	public function action_delete($id = null)
	{
		if ($webservice_appermission = Model_Webservice_Appermission::find($id))
		{
			$webservice_appermission->delete();

			Session::set_flash('success', 'Deleted webservice_appermission #'.$id);
		}

		else
		{
			Session::set_flash('error', 'Could not delete webservice_appermission #'.$id);
		}

		Response::redirect('webservice/appermission');

	}


}