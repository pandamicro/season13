<?php
class Controller_Admin_13comments extends Controller_Backend
{
    private static $ptn_comment = "/(?P<pseudo>\w+)\s*:\s*(?P<content>[\s\S]+)/";

	public function action_index()
	{
		$data['admin_13comments'] = Model_Admin_13comment::find('all');
		$this->template->title = "Admin_13comments";
		$this->template->content = View::forge('admin/13comments/index', $data);
	}

	public function action_view($id = null)
	{
		$data['admin_13comment'] = Model_Admin_13comment::find($id);

		is_null($id) and Response::redirect('Admin_13comments');

		$this->template->title = "Admin_13comment";
		$this->template->content = View::forge('admin/13comments/view', $data);

	}
	
	public function action_multicreate() {
	    if (Input::method() == 'POST')
	    {
	        $episode = Input::post('episode');
	        $comments = Input::post('comments');
	        
	        if(!$episode || !$comments) {
	            Session::set_flash('error', 'Information manquante.');
	        }
	        else {
	            $comments = explode(";", $comments);
	            if(is_array($comments)) {
	                $count = 0;
	            
	                foreach ($comments as $comment) {
	                    $comment = trim($comment);
	                    
	                    preg_match(self::$ptn_comment, $comment, $result);
	                    if( array_key_exists('pseudo', $result) && array_key_exists('content', $result) ) {
	                        $newcomment = Model_Admin_13comment::forge(array(
	                        	'user' => 0,
	                        	'content' => $result['content'],
	                        	'image' => "",
	                        	'fbpostid' => "",
	                        	'position' => $result['pseudo'],
	                        	'verified' => 1,
	                        	'epid' => $episode,
	                        ));
	                        
	                        if ($newcomment and $newcomment->save()) {
	                            $count++;
	                        }
	                    }
	                }
	                
	                Session::set_flash('success', $count.' commentaires ont été ajoutés pour l\'épisode '.$episode);
	                
	                Response::redirect('admin/13comments/multicreate');
	            }
	            else {
	                Session::set_flash('error', 'Erreur de commentaires.');
	            }
	        }
	    }
	    
	    $this->template->title = "Create user comments";
	    $this->template->content = View::forge('admin/13comments/multicreate');
	}

	public function action_create()
	{
		if (Input::method() == 'POST')
		{
			$val = Model_Admin_13comment::validate('create');
			
			if ($val->run())
			{
				$admin_13comment = Model_Admin_13comment::forge(array(
					'user' => Input::post('user'),
					'content' => Input::post('content'),
					'image' => Input::post('image'),
					'fbpostid' => Input::post('fbpostid'),
					'position' => Input::post('position'),
					'verified' => Input::post('verified'),
					'epid' => Input::post('epid'),
				));

				if ($admin_13comment and $admin_13comment->save())
				{
					Session::set_flash('success', 'Added admin_13comment #'.$admin_13comment->id.'.');

					Response::redirect('admin/13comments');
				}
				else
				{
					Session::set_flash('error', 'Could not save admin_13comment.');
				}
			}
			else
			{
				Session::set_flash('error', $val->error());
			}
		}

		$this->template->title = "Admin_13Comments";
		$this->template->content = View::forge('admin/13comments/create');

	}

	public function action_edit($id = null)
	{
		is_null($id) and Response::redirect('Admin_13comments');

		$admin_13comment = Model_Admin_13comment::find($id);

		$val = Model_Admin_13comment::validate('edit');

		if ($val->run())
		{
			$admin_13comment->user = Input::post('user');
			$admin_13comment->content = Input::post('content');
			$admin_13comment->image = Input::post('image');
			$admin_13comment->fbpostid = Input::post('fbpostid');
			$admin_13comment->position = Input::post('position');
			$admin_13comment->verified = Input::post('verified');
			$admin_13comment->epid = Input::post('epid');

			if ($admin_13comment->save())
			{
				Session::set_flash('success', 'Updated admin_13comment #' . $id);

				Response::redirect('admin/13comments');
			}

			else
			{
				Session::set_flash('error', 'Could not update admin_13comment #' . $id);
			}
		}

		else
		{
			if (Input::method() == 'POST')
			{
				$admin_13comment->user = $val->validated('user');
				$admin_13comment->content = $val->validated('content');
				$admin_13comment->image = $val->validated('image');
				$admin_13comment->fbpostid = $val->validated('fbpostid');
				$admin_13comment->position = $val->validated('position');
				$admin_13comment->verified = $val->validated('verified');
				$admin_13comment->epid = $val->validated('epid');

				Session::set_flash('error', $val->error());
			}

			$this->template->set_global('admin_13comment', $admin_13comment, false);
		}

		$this->template->title = "Admin_13comments";
		$this->template->content = View::forge('admin/13comments/edit');

	}

	public function action_delete($id = null)
	{
		if ($admin_13comment = Model_Admin_13comment::find($id))
		{
			$admin_13comment->delete();

			Session::set_flash('success', 'Deleted admin_13comment #'.$id);
		}

		else
		{
			Session::set_flash('error', 'Could not delete admin_13comment #'.$id);
		}

		Response::redirect('admin/13comments');

	}


    public function action_moderator()
    {
    	$data['comments'] = Model_Admin_13comment::query()->where('verified', '0')->get();
    	$this->template->title = "Moderator of comments";
    	$this->template->content = View::forge('admin/13comments/moderator', $data);
    }
    
    public function action_moderatorfail() {
        if(Input::get('id')) {
            $comment = Model_Admin_13comment::find(Input::get('id'));
            if( $comment ) {
                $comment->verified = -1;
                $comment->save();
            }
        }
        
        Response::redirect('admin/13comments/moderator');
    }
    
    public function action_moderatorapproveall() {
        $comments = Model_Admin_13comment::query()->where('verified', '0')->get();
        foreach ($comments as $comment) {
            $comment->verified = 1;
            $comment->save();
        }
        
        Response::redirect('admin/13comments/moderator');
    }

}