<?php

class Controller_Webservice_Wsbase extends Controller_Rest
{
    public static $access_token_ptn = "/(?P<time>\d+)\+\^\_\^\+(?P<email>\S+)\+\^\_\^\+(?P<appid>\w+)\+\^\_\^\+(?P<target>\w+)/";
    
    public static function checkAccessToken($access_token, $mail, $target) {
        $tokenstr = Crypt::decode($access_token);
        preg_match(self::$access_token_ptn, $tokenstr, $result);
        
        if( array_key_exists('time', $result) && 
            array_key_exists('email', $result) && 
            array_key_exists('appid', $result) && 
            array_key_exists('target', $result) ) {
            // Pattern match success
            if( $result['email'] == $mail && (is_null($target) || $result['target'] == $target) ) {
                // Token user associated
                return true;
            }
        }
        
        return false;
    }
    public static function decryptAccessToken($access_token) {
        $tokenstr = Crypt::decode($access_token);
        preg_match(self::$access_token_ptn, $tokenstr, $result);
        
        if( array_key_exists('time', $result) && 
            array_key_exists('email', $result) && 
            array_key_exists('appid', $result) && 
            array_key_exists('target', $result) ) {
            return $result;
        }
        
        return false;
    }
    public static function cryptAccessToken($mail, $appid, $target) {
        $accesstoken = Crypt::encode(time()."+^_^+".$mail."+^_^+".$appid."+^_^+".$target);
        return $accesstoken;
    }

    public static function checkAppAccess($action, $method, $msgs = null) {
        if(is_null($msgs)) {
            Config::load('errormsgs', true);
            $msgs = (array) Config::get('errormsgs.webservice', array ());
        }
        
        // Check app access
        // Get time stamp
        $microtime = Input::param('microtime');
        if(is_null($microtime)) {
            return array('success' => false, 'errorCode' => 3003, 'errorMessage' => $msgs[3003]);
        }
        // Get App
        $appid = Input::param('appid');
        if(is_null($appid)) {
            return array('success' => false, 'errorCode' => 3001, 'errorMessage' => $msgs[3001]);
        }
        $app = Model_Webservice_Plateformapp::find_by_appid($appid);
        if(is_null($app)) {
            return array('success' => false, 'errorCode' => 3001, 'errorMessage' => $msgs[3001]);
        }
        // Get Token
        $token = Input::param('token');
        if(is_null($token)) {
            return array('success' => false, 'errorCode' => 3002, 'errorMessage' => $msgs[3002]);
        }
        
        // Check access token
        $tokenvalue = md5($app->appid.$app->appsecret.$microtime);
        if($token != $tokenvalue) {
            return array('success' => false, 'errorCode' => 3002, 'errorMessage' => $msgs[3002]);
        }
        
        // Check action accessibility
        $permission = Model_Webservice_Appermission::query()->where(
            array(
                'appid' => $app->appid,
                'action' => $action
            )
        )->get_one();
        
        if(is_null($permission)) {
            return array('success' => false, 'errorCode' => 3004, 'errorMessage' => $msgs[3004]);
        }
        
        $accessible = false;
        switch (strtolower($method)) {
        case "post":
            if($permission->can_post) $accessible = true;
            break;
        case "get":
            if($permission->can_get) $accessible = true;
            break;
        }
        
        if(!$accessible) {
            return array('success' => false, 'errorCode' => 3004, 'errorMessage' => $msgs[3004]);
        }
        else {
            return array('success' => true, 'app' => $app);
        }
    }

    public function before()
    {
    	parent::before();
    	
    	$this->base_uri = Fuel::$env == Fuel::DEVELOPMENT ? 'localhost:8888/season13/public/' : "http://".$_SERVER['HTTP_HOST']."/";
    	$this->remote_path = Fuel::$env == Fuel::DEVELOPMENT ? '/season13/public/' : '/';
    	
    	Config::load('errormsgs', true);
    	$this->msgs = (array) Config::get('errormsgs.webservice', array ());
    	
	    // App authentification
	    $this->access = self::checkAppAccess("order", "post", $this->msgs);
	    if(!is_array($this->access))
	        $this->access = array('success' => false, 'errorCode' => 3999, 'errorMessage' => $this->msgs[3999]);
	    else if($this->access['success'] == true) {
	        $this->app = $this->access['app'];
	    
    	    // The request record
    	    $this->record = Model_Webservice_Requestrecord::forge(array(
    	    	'appid' => $this->app->appid,
    	    	'service_requested' => "order",
    	    	'params' => json_encode(Input::all()),
    	    	'token' => Input::param('token'),
    	    	'extra' => "",
    	    ));
    	    $this->record and $this->record->save();
	    }
    }
    
    public function post_order() {
        $msgs = $this->msgs;
        
        if(!isset($this->app) || !isset($this->record)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        $val = Model_Achat_13extorder::validate('create');
		
		if ($val->run())
		{	
		    $ownermail = Input::post('owner');
		    $user = Model_13user::find_by_email($ownermail);
		    if(is_null($user)) {
		        if ( Auth::instance()->create_user(
		                Input::post('username') ? Input::post('username') : substr($ownermail, 0, strpos($ownermail, '@')), 
                        Str::random('alnum', 16),
                        $ownermail,
                        "",
                        null,
                        "",
                        "m",
                        "",
                        "",
                        "",
                        "mail",
                        0,
                        array('external_add' => 'web_service', 'inactive' => true)
                ) ) {
                    $user = Model_13user::find_by_email($ownermail);
                }
                
                if(is_null($user)) {
		            return $this->response(array('success' => false, 'errorCode' => 3101, 'errorMessage' => $msgs[3101]), 200);
		        }
		    }
		    
		    $product = Model_Achat_13product::find_by_reference(Input::post('reference'));
		    if(is_null($product)) {
		        return $this->response(array('success' => false, 'errorCode' => 3102, 'errorMessage' => $msgs[3102]), 200);
		    }
		    if(!Str::is_json($product->content)) {
		        return $this->response(array('success' => false, 'errorCode' => 3105, 'errorMessage' => $msgs[3105]), 200);
		    }
		    
		    $achat_13extorder = Model_Achat_13extorder::forge(array(
				'reference' => Input::post('reference'),
				'owner' => Input::post('owner'),
				'order_source' => Input::post('order_source') ? Input::post('order_source') : "",
				'appid' => $this->app->appid,
				'price' => Input::post('price'),
				'app_name' => $this->app->appname,
				'state' => "FINALIZE",
			));

			if ($achat_13extorder and $achat_13extorder->save())
			{
				// Update user possesion
                $eps = Format::forge($product->content, 'json')->to_array();
                
                $fails = array();
                foreach ($eps as $episode) {
                    $existed = Model_Admin_13userpossesion::query()->where(
                        array(
                            'user_id' => $user->id,
                            'episode_id' => $episode
                        )
                    )->get_one();
				
				    if(is_null($existed)) {
		                $userpossesion = Model_Admin_13userpossesion::forge(array(
							'user_id' => $user->id,
							'episode_id' => $episode,
							'source' => 7, // 7 means external order
						));
		
						if ($userpossesion and $userpossesion->save())
						{
							;
						}
						else {
						    array_push($fails, $episode);
						}
				    }
				}
				
				// Successfully set the user possesion
				if(count($fails) == 0) {
				    $this->record->extra = Format::forge(array('success' => true))->to_json();
				    $this->record->save();
				    return $this->response(array('success' => true, 'order_id' => $achat_13extorder->id), 200);
				}
				else {
				    $this->record->extra = Format::forge( array( 'success' => false, 'episode_fails' => Format::forge($fails)->to_json() ) )->to_json();
				    $this->record->save();
				    return $this->response(array('success' => false, 'errorCode' => 3106, 'errorMessage' => $msgs[3106], 'fails_count' => count($fails)), 200);
				}
			}

			else
			{
				return $this->response(array('success' => false, 'errorCode' => 3103, 'errorMessage' => $msgs[3103]), 200);
			}
		}
		else
		{
			return $this->response(array('success' => false, 'errorCode' => 3104, 'errorMessage' => $msgs[3104]), 200);
		}
    }
    
    public function get_order() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        $order_id = Input::get('order_id');
        if(is_null($order_id)) {
            return $this->response(array('success' => false, 'errorCode' => 3107, 'errorMessage' => $msgs[3107]), 200);
        }
        
        $order = Model_Achat_13extorder::find($order_id);
        if(is_null($order)) {
            return $this->response(array('success' => false, 'errorCode' => 3108, 'errorMessage' => $msgs[3108]), 200);
        }
        if($order->appid != $this->app->appid) {
            return $this->response(array('success' => false, 'errorCode' => 3109, 'errorMessage' => $msgs[3109]), 200);
        }
        
        return $this->response(array(
            'success' => true, 
            'order' => array(
                'id' => $order->id,
                'reference' => $order->reference,
                'owner' => $order->owner,
                'order_source' => $order->order_source,
                'appid' => $order->appid,
                'price' => $order->price,
                'state' => $order->state,
                'datetime' => $order->created_at
            )
        ), 200);
    }
    
    public function post_cancel_order() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        // Get order
        $order_id = Input::post('order_id');
        if(is_null($order_id)) {
            return $this->response(array('success' => false, 'errorCode' => 3107, 'errorMessage' => $msgs[3107]), 200);
        }
        
        $order = Model_Achat_13extorder::find($order_id);
        if(is_null($order)) {
            return $this->response(array('success' => false, 'errorCode' => 3108, 'errorMessage' => $msgs[3108]), 200);
        }
        if($order->appid != $this->app->appid) {
            return $this->response(array('success' => false, 'errorCode' => 3109, 'errorMessage' => $msgs[3109]), 200);
        }
        
        // Get user
        $user = Model_13user::find_by_email($order->owner);
        if(is_null($user)) {
            return $this->response(array('success' => false, 'errorCode' => 3110, 'errorMessage' => $msgs[3110]), 200);
        }
        
        // Get content episodes
        $product = Model_Achat_13product::find_by_reference($order->reference);
        if(is_null($product)) {
            return $this->response(array('success' => false, 'errorCode' => 3102, 'errorMessage' => $msgs[3102]), 200);
        }
        if(!Str::is_json($product->content)) {
            return $this->response(array('success' => false, 'errorCode' => 3105, 'errorMessage' => $msgs[3105]), 200);
        }
        $eps = Format::forge($product->content, 'json')->to_array();
        
        // Update user possesion
        foreach ($eps as $episode) {
            $record = Model_Admin_13userpossesion::query()->where(
                array(
                    'user_id' => $user->id,
                    'episode_id' => $episode,
                    'source' => 7, // 7 means external order
                )
            )->get_one();
		
		    if(!is_null($record)) {
		        $record->delete();
		    }
		}
		
		// Save order state
		$order->state = "CANCEL";
		$order->save();
		return $this->response(array('success' => true, 'order_id' => $order->id), 200);
    }
    
    
    
    public function get_product() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        $reference = Input::get('reference');
        if(is_null($reference)) {
            return $this->response(array('success' => false, 'errorCode' => 3201, 'errorMessage' => $msgs[3201]), 200);
        }
        
        $product = Model_Achat_13product::find_by_reference($reference);
        if(is_null($product)) {
            return $this->response(array('success' => false, 'errorCode' => 3202, 'errorMessage' => $msgs[3202]), 200);
        }
        
        $author = Model_Book_13author::find($product->author);
        if(is_null($author)) {
            $authorname = "";
            $authorbio = "";
            $authorphoto = "";
        }
        else {
            $authorname = $author->firstname." ".$author->lastname;
            $authorbio = $author->biographie;
            $authorphoto = $this->base_uri.$author->photo;
        }
        
        $metas = Format::forge($product->metas, 'json')->to_array();
        $images = array();
        $extrait = "";
        foreach($metas as $meta) {
            switch($meta['type']) {
            case "image" : 
                array_push($images, $meta['value']);
                break;
            case "extrait" : 
                $extrait = $meta['value'];
                break;
            }
        }
        
        return $this->response(array(
            'success' => true, 
            'product' => array(
                'reference' => $product->reference,
                'type' => $product->type,
                'pack' => $product->pack == 0 ? false : true,
                'content' => $product->content,
                'presentation' => $product->presentation,
                'title' => $product->title,
                'author_fullname' => $authorname,
                'author_bio' => $authorbio,
                'author_photo' => $authorphoto,
                'images' => Format::forge($images)->to_json(),
                'extrait' => $extrait,
                'tags' => $product->tags,
                'category' => $product->category,
                'price' => $product->price,
            )
        ), 200);
    }
    
    
    public function get_access_product() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        // Check user
        $mail = Input::get('user');
        if(is_null($mail)) {
            return $this->response(array('success' => false, 'errorCode' => 3203, 'errorMessage' => $msgs[3203]), 200);
        }
        $user = Model_13user::find_by_email($mail);
        if(is_null($user)) {
            return $this->response(array('success' => false, 'errorCode' => 3204, 'errorMessage' => $msgs[3204]), 200);
        }
        
        // Check reference
        $reference = Input::get('reference');
        if(is_null($reference)) {
            return $this->response(array('success' => false, 'errorCode' => 3201, 'errorMessage' => $msgs[3201]), 200);
        }
        
        // Get order record
        $record = Model_Achat_13extorder::query()->where(
            array(
                'owner' => $mail,
                'reference' => $reference,
                'appid' => $this->app->appid,
            )
        )->get_one();
        if(is_null($record)) {
            return $this->response(array('success' => false, 'errorCode' => 3205, 'errorMessage' => $msgs[3205]), 200);
        }
        // Check record state
        if($record->state == "CANCEL") {
            return $this->response(array('success' => false, 'errorCode' => 3206, 'errorMessage' => $msgs[3206]), 200);
        }
        
        // All ok
        $accesstoken = self::cryptAccessToken($mail, $this->app->appid, $reference);
        return $this->response(array('success' => true, 'access_token' => $accesstoken), 200);
    }
    
    
    public function get_episode_for_user() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        $mail = Input::get('user');
        if(is_null($mail)) {
            return $this->response(array('success' => false, 'errorCode' => 3301, 'errorMessage' => $msgs[3301]), 200);
        }
        $user = Model_13user::find_by_email($mail);
        if(is_null($user)) {
            return $this->response(array('success' => false, 'errorCode' => 3303, 'errorMessage' => $msgs[3303]), 200);
        }
        
        $epid = Input::get('epid');
        if(is_null($epid)) {
            return $this->response(array('success' => false, 'errorCode' => 3302, 'errorMessage' => $msgs[3302]), 200);
        }
        $ep = Model_Admin_13episode::find($epid);
        if(is_null($ep)) {
            return $this->response(array('success' => false, 'errorCode' => 3304, 'errorMessage' => $msgs[3304]), 200);
        }
        
        $access = Controller_Story::requestAccess($epid, $user, true);
        $access['success'] = $access['valid'];
        unset($access['valid']);
        // Send access token
        if($access['success']) {
            $accesstoken = self::cryptAccessToken($mail, $this->app->appid, str_replace(' ', '_', $ep->story).$ep->season.$ep->episode);
            $access['access_token'] = $accesstoken;
        }
        return $this->response($access, 200);
    }
    
    public function get_episode_sav() {
        $msgs = $this->msgs;
        
        if(!isset($this->app)) {
            if(isset($this->access)) return $this->response($this->access, 200);
            else return $this->response(array('success' => false, 'errorCode' => 3999, 'errorMessage' => $msgs[3999]), 200);
        }
        
        $epid = Input::get('epid');
        if(is_null($epid)) {
            return $this->response(array('success' => false, 'errorCode' => 3302, 'errorMessage' => $msgs[3302]), 200);
        }
        $ep = Model_Admin_13episode::find($epid);
        if(is_null($ep)) {
            return $this->response(array('success' => false, 'errorCode' => 3304, 'errorMessage' => $msgs[3304]), 200);
        }
        
        $access['success'] = array('success' => true);
        // Send access token
        if($access['success']) {
            $accesstoken = self::cryptAccessToken('SAV', $this->app->appid, 'SAV');
            $access['access_token'] = $accesstoken;
        }
        return $this->response($access, 200);
    }
	
}