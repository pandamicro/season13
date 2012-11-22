<html>
<head>
    <?php echo Asset::css('newsletter.css'); ?>
</head>

<body>
    <div id="mail_body">
    
    	<div class="main_container">
    	    
    	    <div id="head_banner">
    	        <?php echo Asset::img('season13/mail/newsletter_banner.jpg'); ?>
    	        <h1>Invitation</h1>
    	    </div>
    	    
    	    <div id="content_container">
    	        <?php if(isset($img)) echo Asset::img($img); ?>
    	    
    	        <div class="text_container">
    	        
    	        <h5>
    	            <?php echo $from; ?> t’invite à venir découvrir Voodoo Connection, une série interactive dans laquelle tu peux jouer, participer à des jeux concours sur Facebook et découvrir les aventures pleines de rebondissement de Simon, poursuivi par une bande dans Paris.<br/>
    	            <a href="http://season13.com/story?ep=1&source=invitation_mail">Découvre le 1er épisode de Voodoo Connection</a>
    	        </h5>
    	        
    	        </div>
    	    </div>
    	    
    	    <h5 class="outer_msg">
    	        <a href="http://season13.com">Season13</a><!-- vous assure que votre mail n'est pas enregistré--><br/>
    	        03 20 24 79 56<br/>
    	        <a href="mailto:contact@encrenomade.com">contact@encrenomade.com</a><br/>
    	        99A bld Descat 59200 Tourcoing<br/>
    	    </h5>
    	</div>
    	
</div>
</body>