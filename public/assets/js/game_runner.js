
$(function(){
	var gameShower = $('#single_game_shower');
	var iframe = gameShower.children('iframe');
	var iframeLoaded = false;

	$(".game_link").click(function() {
		var gameClass = $(this).attr('data-gameClass');
		var newUrl = config.base_url+'book/gameview/play/'+gameClass;

		if(!iframeLoaded) { 							// check if the game have ever been loaded
		    $('.loading').addClass('show');
			iframe.prop('src', newUrl);					// if not : load the game
			iframe.load(function(){
				iframeLoaded = true;
				var game = this.contentWindow.game;		// retrieve game object from iframe
				if(game) gameNotifier.start(game);		// iframe is load : run & show the game
				
			});
		}
		else {											// the iframe have ever been loaded
			var game = iframe.get(0).contentWindow.game;
			if(game) gameNotifier.start(game);			// just run the game
		}
	});




	window.gameNotifier = {
		quit: function() {
			var iFrameWindow = iframe.get(0).contentWindow;
			var game = iFrameWindow.game;					// retrieve game obj
			if(game) {
				game.end();									// stop it
			}
			
			if(iFrameWindow.MseConfig.mobile) {
			    $('.card').removeClass('gamemode');
			}
			gameShower.hide();
		},
		failGameLoad: function(message) {
		    $('.loading').removeClass('show');
			gameNotifier.quit();							// on error just quit && show the message
			if(message) alert(message);
		},
		start: function(game) {
			gameShower.show(0, function(){
				iFrameWindow = iframe.get(0).contentWindow;
				if(iFrameWindow.MseConfig)
					iFrameWindow.MseConfig.update();
					
				if(iFrameWindow.MseConfig.mobile) {
				    $('.card').addClass('gamemode');
				    $('.loading').removeClass('show');
				}
				game.start();
			});
		}
	};
});