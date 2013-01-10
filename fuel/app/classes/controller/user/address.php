<?php
class Controller_User_Address extends Controller_Template 
{

	public function action_index()
	{
		$data['user_addresses'] = Model_User_Address::find('all');
		$this->template->title = "User_addresses";
		$this->template->content = View::forge('user/address/index', $data);

	}

	public function action_view($id = null)
	{
		$data['user_address'] = Model_User_Address::find($id);

		is_null($id) and Response::redirect('User_Address');

		$this->template->title = "User_address";
		$this->template->content = View::forge('user/address/view', $data);

	}

	public function action_create()
	{
		if (Input::method() == 'POST')
		{
			$val = Model_User_Address::validate('create');
			
			if ($val->run())
			{
				$user_address = Model_User_Address::forge(array(
					'firstname' => Input::post('firstname'),
					'lastname' => Input::post('lastname'),
					'address' => Input::post('address'),
					'postcode' => Input::post('postcode'),
					'city' => Input::post('city'),
					'country_code' => Input::post('country_code'),
					'tel' => Input::post('tel'),
					'title' => Input::post('title'),
					'supp' => Input::post('supp'),
				));

				if ($user_address and $user_address->save())
				{
					Session::set_flash('success', 'Added user_address #'.$user_address->id.'.');

					Response::redirect('user/address');
				}

				else
				{
					Session::set_flash('error', 'Could not save user_address.');
				}
			}
			else
			{
				Session::set_flash('error', $val->error());
			}
		}

		$this->template->title = "User_Addresses";
		$this->template->content = View::forge('user/address/create');

	}

	public function action_edit($id = null)
	{
		is_null($id) and Response::redirect('User_Address');

		$user_address = Model_User_Address::find($id);

		$val = Model_User_Address::validate('edit');

		if ($val->run())
		{
			$user_address->firstname = Input::post('firstname');
			$user_address->lastname = Input::post('lastname');
			$user_address->address = Input::post('address');
			$user_address->postcode = Input::post('postcode');
			$user_address->city = Input::post('city');
			$user_address->country_code = Input::post('country_code');
			$user_address->tel = Input::post('tel');
			$user_address->title = Input::post('title');
			$user_address->supp = Input::post('supp');

			if ($user_address->save())
			{
				Session::set_flash('success', 'Updated user_address #' . $id);

				Response::redirect('user/address');
			}

			else
			{
				Session::set_flash('error', 'Could not update user_address #' . $id);
			}
		}

		else
		{
			if (Input::method() == 'POST')
			{
				$user_address->firstname = $val->validated('firstname');
				$user_address->lastname = $val->validated('lastname');
				$user_address->address = $val->validated('address');
				$user_address->postcode = $val->validated('postcode');
				$user_address->city = $val->validated('city');
				$user_address->country_code = $val->validated('country_code');
				$user_address->tel = $val->validated('tel');
				$user_address->title = $val->validated('title');
				$user_address->supp = $val->validated('supp');

				Session::set_flash('error', $val->error());
			}

			$this->template->set_global('user_address', $user_address, false);
		}

		$this->template->title = "User_addresses";
		$this->template->content = View::forge('user/address/edit');

	}

	public function action_delete($id = null)
	{
		if ($user_address = Model_User_Address::find($id))
		{
			$user_address->delete();

			Session::set_flash('success', 'Deleted user_address #'.$id);
		}

		else
		{
			Session::set_flash('error', 'Could not delete user_address #'.$id);
		}

		Response::redirect('user/address');

	}


}