<?php 

    $expo_image = $base_url.$episode->image;
    $likeUrl = $base_url."Voodoo_Connection/season1/episode1";
    $isiPad = Config::get('custom.isiPad');
 ?>

<!DOCTYPE html> 
<html lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# encrenomade: http://ogp.me/ns/fb/encrenomade#">

<meta property="fb:app_id" content="141570392646490" /> 
<meta property="og:type"   content="encrenomade:episode" /> 
<meta property="og:url"    content="<?php echo $likeUrl; ?>" /> 
<meta property="og:title"  content="<?php echo stripcslashes( $episode->story." Episode ".$episode->episode.": ".$episode->title ); ?>" /> 
<meta property="og:description" content="SEASON 13 Feuilltons Interactifs" />
<meta property="og:site_name" content="SEASON13" />
<meta property="og:image"  content="<?php echo $expo_image; ?>" />

<meta charset="UTF-8" />
<meta name="robots" content="noindex"/>
<meta name="viewport" content="minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=no"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

<title><?php echo $title; ?></title>
<meta name="Description" content="Author: Chris Debien, Titre: Voodoo Connection<?php echo ", Season: ".$episode->season.", ".$episode->title; ?>" />

<!-- Script for integrate the font: Helvetica Ultra Compressed
    <script type="text/javascript" src="http://fast.fonts.com/jsapi/11bfc142-9579-4cac-b6a6-2a561db23028.js"></script>
-->

<!--<link rel="stylesheet" href="/assets/font/gudea/stylesheet.css" type="text/css">-->

<link href='http://fonts.googleapis.com/css?family=Gudea:400,700,400italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

<?php
    // Css
    echo Asset::css('BebasNeue.css');
    echo Asset::css('DroidSans.css');
    if (Agent::is_mobiledevice() && !$isiPad) {
        echo Asset::css('cart.mobi.css');
        echo Asset::css('dialog_auth_msg.mobi.css');
        echo Asset::css('storymobi.css');
    }
    else {
        echo Asset::css('cart.css');
        echo Asset::css('dialog_auth_msg.css');
        echo Asset::css('story.css');
    }
    
    // JQuery
    echo Asset::js('lib/jquery-1.9.1.min.js');

    // Other JS lib public
    echo Asset::js('lib/BrowserDetect.min.js');
    echo Asset::js('lib/jquery.form.min.js');
    
    // Config files
    echo Asset::js('config.js');
    
    // Lib
    if(Fuel::$env == Fuel::DEVELOPMENT || Fuel::$env == Fuel::TEST) {
        echo Asset::js('lib/Tools.js');
        echo Asset::js('lib/Interaction.js');
        echo Asset::js('lib/fbapi.js');
        echo Asset::js('cart.js');
        echo Asset::js('auth.js');
        echo Asset::js('story/msg_center.js');
        echo Asset::js('story/gui.js');
        echo Asset::js('story/tuto.js');

        echo Asset::js('story/gameinfo.js');
        echo Asset::js('story/scriber.js');
        echo Asset::js('story/events.js');
        echo Asset::js('story/mse.js');
        echo Asset::js('story/effet_mini.js');
        echo Asset::js('story/mdj.js');
    }
    else {
        echo Asset::js('story/lib.min.js');
        echo Asset::js('story/core.min.js');
    }
    
    // print games
    $games = $episode->games;
    foreach ($games as $g) {
        $likeUrl = $base_url . 'games/' . $g->class_name;
        $url = $base_url . $g->path.'/games/'.$g->file_name;
        echo "<script src=\"$url\"> </script>";
    }

?>
    <script type="text/javascript">
        addEventListener("load", function(){
            setTimeout(function(){window.scrollTo(0, 1);}, 0);
            $('body').css({'margin':'0px','padding':'0px'});
        }, false);

        config.base_url = "http://"+window.location.hostname + (config.readerMode=="debug"?":8888":"") + config.publicRoot;
    
        if(window.mse) {
            mse.configs.epid = <?php echo $episode->id; ?>;
            mse.configs.user = <?php if($current_user) echo "'".$current_user->pseudo."'"; else echo "false"; ?>;
            mse.configs.isTutoDone = <?php 
                if($extrait) echo "true";
                else {
                    if($current_user)
                        echo $current_user->hasTutoDone() ? "true" : "false";
                    else echo Cookie::get('tuto_has_done') == "true" ? "true" : "false";
                }
            ?>;
            mse.configs.srcPath = '<?php echo $remote_path.$episode->path; ?>';
        }
    
        config.episode = {
            'epid' : <?php echo $episode->id; ?>,
            'title' : "<?php echo $title; ?>",
            'story' : "<?php echo $episode->story; ?>",
            'image' : "<?php echo $expo_image; ?>"
        };

        config.episode.gameExpos = {};
        <?php foreach ($episode->games as $g): ?>
            config.episode.gameExpos["<?php echo $g->class_name; ?>"] = "<?php echo Asset::get_file($g->expo, 'img'); ?>";
        <?php endforeach; ?>
        
        config.accessResp = {
            'valid': <?php echo $access['valid'] ? 'true' : 'false'; ?>, 
            <?php 
            if($access['valid'] == false) 
                echo "'errorCode':  ".$access['errorCode'].",\n";
            if(array_key_exists('errorMessage', $access)) 
                echo "'errorMessage': '".$access['errorMessage']."',\n";
            ?>
        };
    
    </script>



<?php if( !Auth::check() || Auth::member(3) || Auth::member(5) ): ?>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35640835-1']);
  _gaq.push(['_setDomainName', 'season13.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36203496-1']);
  _gaq.push(['_setDomainName', 'season13.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<?php endif; ?>

<?php 
    // output the javascript function
    echo Security::js_set_token(); 
?>

</head>

<body>

    <div id="fb-root"></div>
    <script>
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        
        // Init the SDK upon load
        window.fbAsyncInit = function() {
            FB.init({
                appId      : config.fbAppId, // App ID
                channelUrl : 'http://season13.com/channelfile', // Path to your Channel File
                status     : true, // check login status
                cookie     : true, // enable cookies to allow the server to access the session
                xfbml      : true  // parse XFBML
            });
            
            gui.fbInitedCallback();
        }
        
    </script>

    <header>
        <div class="left">
            <div id="tache">
                <?php echo Asset::img('season13/story/story_tache.png', array('alt' => 'SEASON 13')); ?>
                <a href="http://season13.com/" target="_blank"></a>
            </div>
            <div id="sep_left"></div>
            <h1>Voodoo Connection</h1>
        </div>
        
        <div class="right">
            <div id="icon_menu" class="animate_short">
                <?php echo Asset::img('season13/story/story_menu.png', array('alt' => 'Menu d\'episode SEASON 13')); ?>
            </div>
            <div id="sep_right"></div>
            <div id="switch_menu"></div>
            
            <ul id="conn">
        <?php if ( !$extrait && (!Agent::is_mobiledevice() || $isiPad) ): ?>
            <?php if($current_user == null): ?>
                <li id="open_signup">Créer un compte</li>
                <li class="text_sep_vertical"></li>
                <li id="open_login">Déjà client</li>
            <?php else: ?>
                <li id="user_id">BIENVENUE: <?php echo $current_user->pseudo ?></li>
                <li class="text_sep_vertical"></li>
                <li id="logout">LOGOUT</li>
            <?php endif; ?>
                <li class="text_sep_vertical"></li>
        <?php endif; ?>
                <li id="cart"><?php echo Asset::img("season13/ui/cart.png"); ?><span></span></li>
            </ul>
        
        <?php if ( !Agent::is_mobiledevice() || $isiPad ): ?>
            <?php if($current_user == null): ?>
            <div id="signup_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <?php echo View::forge('auth/signup_form')->render(); ?>
            </div>
            <div id="login_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <?php echo View::forge('auth/login_form')->render(); ?>
            </div>
            <div id="change_pass_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <?php echo View::forge('auth/chpass_form')->render(); ?>
            </div>
            <div id="link_fb_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <?php echo View::forge('auth/linkFb_form')->render(); ?>
            </div>
            
            <?php else: ?>
            <div id="update_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <?php echo View::forge('auth/update_form')->render(); ?>
            </div>
        
            <?php endif; ?>
        <?php endif; ?>
    
            <div id="cart_dialog" class="dialog">
                <div class="close"></div>
                <div class="sep_line"></div>
                <div class="cart_container">
                    <?php echo View::forge('achat/cart/cart_view')->render(); ?>
                </div>
            </div>
        </div>
    </header>
    
    <ul id="menu" class="animate_short">
        <li id="btn_aide">
            <?php echo Asset::img('season13/story/story_aide.png'); ?>
            <a class="white_anchor" href="javascript:tuto.reset();tuto.run();">Tutoriel</a>
        </li>
        <li id="btn_param">
            <?php echo Asset::img('season13/story/story_param.png', array('alt' => 'Paramètre d\'episode SEASON 13')); ?>
            <a>Paramètres</a>
        </li>
        <li id="btn_author">
            <?php echo Asset::img('season13/story/story_author.png', array('alt' => 'Autheur de Voodoo Connection')); ?>
            <a>Auteur</a>
        </li>
        <li id="btn_credits">
            <?php echo Asset::img('season13/story/story_credit.png', array('alt' => 'Crédits de SEASON 13')); ?>
            <a>Crédits</a>
        </li>
        <li id="btn_nextep">
            <?php echo Asset::img('season13/story/story_nextep.png', array('alt' => 'Continue l\'histoire - SEASON13')); ?>
            <a>Épisode suivant</a>
        </li>
        
        <div>
            <?php echo Asset::img('season13/logo_white.png', array("id" => "menu_logo", 'alt' => 'LOGO SEASON 13')); ?>
            <?php echo Html::anchor('http://www.season13.com', 'www.season13.com', array("id" => "menu_link", "target" => "_blank")); ?>
        </div>
    </ul>

    <div id="top_center">
    <!--Access dialog-->
        <div id="access_dialog" class="dialog hidden">
            <!--<div class="close right"></div>-->
            <h1></h1>
            <div class="sep_line"></div>
            
            <div class="container">
                <?php if(array_key_exists('form', $access)) echo html_entity_decode($access['form'], ENT_COMPAT, 'UTF-8'); ?>
            </div>
        </div>
    </div>

    <div id="center">
    
    <!-- Lance tuto dialog-->
        <div id="lance_tuto" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>Tutoriel</h1>
            <div class="sep_line"></div>
            
            <h5 style="text-align: center;">
                Veux-tu démarrer le tutoriel ? Sinon, tu peux le démarrer plus tard dans le menu en haut à droite.<br/>
            </h5>
            
            <div class="floatlink">
                <a>Non merci</a>
            </div>
            
            <div class="floatlink">
                <a>Démarrer le tutoriel</a>
            </div>
            
        </div>
        
    <!-- Tuto last pages dialog-->
        <div id="tuto_pages" class="dialog animate_short hidden">
            <h1>Tutoriel</h1>
            <div class="sep_line"></div>
            
            <h5 style="text-align: center;">
                Chaque épisode comporte des interactions: le défilement s'arrête, à toi de trouver comment interagir avec les objets à l'écran pour pouvoir continuer.<br/>
            </h5>
            
            <div class="link">
                <a>Fin de Tutoriel</a>
            </div>
        </div>
            
    
    <!-- Author bio dialog-->
        <div id="author_bio" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>BIO de Chris Debien</h1>
            <div class="sep_line"></div>
            
            <div class="content">
                <?php echo Asset::img('season13/story/chris.png', array('alt' => 'Chris Debien - Autheur de Voodoo Connection')); ?>
                <p style="font-style: italic; text-align: center; margin: 0; padding: 0;">Photo par Marc Dubord</p>
                <br/>
                <h5>Né par un beau jour d’automne, j’ai la chance de mener trois vies parallèles : celle de chef de tribu (trois ewoks à mon actif), celle de responsable des urgences psychiatriques du CHU de Fort de France et celle d’ « écriveur ».<br/>
                Initié par mon ami Patrick Bauwen aux délices du Jeu de Rôle, j’ai commencé par écrire des scénarios, des aides de jeux puis une rubrique régulière au sein de la revue <a href="http://fr.wikipedia.org/wiki/Casus_Belli" target="_blank">Casus Belli</a> pendant près de dix ans.<br/>
                Puis j’ai croisé la route d’une marraine-fée nommée Charlotte Ruffault (alors directrice éditoriale chez Hachette) qui m’a confié la novélisation de la série Lanfeust de Troy pour la Bibliothéque Verte toujours en collaboration avec Patrick (nous avons aussi commis un JdR Lanfeust et un roman plus « adulte »).<br/>
                J’ai poursuivi par la novélisation du dessin d'animation <a href="http://fr.wikipedia.org/wiki/Skyland" target="_blank">Skyland</a> (récompensé par le Prix du Salon du Fantastique et de la SF de Liévin, catégorie Jeunesse[1]) ainsi que par l’écriture de mon premier véritable roman, une histoire particulièrement sombre, L'Affaire du Boucher du Vieux-Lille, aux éditions <a href="http://fr.wikipedia.org/wiki/Ravet-Anceau" target="_blank">Ravet-Anceau</a>.<br/>
                En 2008, j’ai eu l’immense honneur de pouvoir développer un projet plus ambitieux : une trilogie de d’heroïc-fantasy, <a href="http://fr.wikipedia.org/wiki/Les_Chroniques_de_Khëradön" target="_blank">Les Chroniques de Khëradön</a> (l’occasion pour moi de rendre hommage à mes « maîtres, Tolkien, Moorcock, …).<br/>
                Enfin, aujourd’hui, je partage mon temps entre le développement de ma série de thrillers d’anticipation Black Rain, l’écriture de romans policiers et quelques petites incartades dans la bande-dessinée (avec LucyloO) ou au fond des catacombes parisiennes aux côtés d’un certain inspecteur Angéli…</h5>
            </div>
        </div>
        
    <!-- Credits dialog -->
        <div id="credits" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>Credits</h1>
            <div class="sep_line"></div>
            
            <div class="content">
                <h5>
                    <label>--- Auteur ---</label><br/>
                    Chris Debien<br/>
                    <br/>
                    <label>--- Illustrateurs ---</label><br/>
                    David Goujard<br/>
                    Mathieu Sablier<br/>
                    Bruno Wright<br/>
                    <br/>
                    <label>--- Graphistes et typographes ---</label><br/>
                    MAT. <a href="http://maintenantautravail.fr" target="_blank">maintenantautravail.fr</a><br/>
                    <br/>
                    <label>--- Conception informatique ---</label><br/>
                    Huabin Ling<br/>
                    <br/>
                    <label>--- Développeurs ---</label><br/>
                    Huabin Ling<br/>
                    Florent Baldino<br/>
                    Artur Brongniart<br/>
                </h5>
            </div>
        </div>
        
    <!-- Concept card -->
        <div id="concept" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>Tu vas vivre une nouvelle expérience</h1>
            <div class="sep_line"></div>
            
            <div id="concept_container">
                <?php echo Asset::img('season13/expos/concept1.jpg', array("class" => "logo", 'alt' => 'Concept de SEASON 13')); ?>
                <h5>
                    <p><strong>Immerge-toi dans une série qui défile devant tes yeux</strong>, enrichie de sons, d’images, d’animations qui apparaissent au fur et à mesure.</p>
                    <p>Parfois, tout s’arrête : A toi de trouver la solution et d’agir pour faire redémarrer l’histoire.</p>
                </h5>
            </div>
        </div>
        
    <!--Continue read dialog-->
        <div id="next_ep_dialog" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>L'épisode Suivant</h1>
            <div class="sep_line"></div>
            
            <?php if($episode->episode < 6): ?>
                <div class="link">
                    <a href="<?php echo $base_url.str_replace(' ', '_', $episode->story)."/season".$episode->season."/episode".($episode->episode+1); ?>" target="_blank">Continue l'histoire</a>
                </div>
            <?php else: ?>
                <h5 style="text-align: center;">
                    Retrouve prochainement la suite des aventures de Simon et Angéli dans Voodoo Connection Saison 2<br/>
                    sur <a href="http://season13.com">season13.com</a><br/>
                </h5>
            <?php endif; ?>
            
            <a href="<?php echo $base_url; ?>" target="_blank"><?php echo Asset::img('season13/logo_black.png', array("class" => "logo", 'alt' => 'LOGO SEASON 13')); ?></a>
        </div>
    
    <!-- Preferece dialog -->
        <div id="preference" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>Paramètres</h1>
            <div class="sep_line"></div>
            <p>Audio: </p>
            <p>Vitesse: </p>
            <p><label>Partager les commentaires sur facebook: <input id="share_comment_fb" type="checkbox" checked="true" /></label></p>
            <div class="link">
                <a href="javascript:gui.savePersonalData();">Sauvegarder</a>
                <div class="loading"></div>
            </div>
        </div>
        
        
    <!-- Comment dialog -->
        <div id="comment" class="dialog animate_short hidden">
            <div class="close right"></div>
            <h1>Commentaires</h1>
            <div class="sep_line"></div>
            
            <textarea id="comment_content" rows="5" cols="30" placeholder="Exprime-toi !"></textarea>
            <div class="arrow"></div>
            <ul id="comment_menu">
                <li id="btn_share" title="Partage ton commentaire">
                    <?php if(!is_null($current_user) && ($current_user->fbid != "" && $current_user->fbid != 0)) : ?>
                        <?php echo Asset::img('season13/story/comment_fb.png'); ?>
                    <?php endif; ?>
                    <h5>Partager</h5>
                </li>
                <li id="btn_upload_img" title="Télécharge ton propre dessin">
                    <?php echo Asset::img('season13/story/comment_image.png'); ?>
                </li>
                <li id="btn_capture_img" title="Capture une image dans l'épisode">
                    <?php echo Asset::img('season13/story/comment_camera.png'); ?>
                </li>
            </ul>
            
            <div id="upload_container" class="animate_short hidden">
                <div class="arrow"></div>
                <form id="imageuploadform" method="POST" enctype="multipart/form-data" action='<?php echo Fuel::$env == Fuel::DEVELOPMENT ? '/season13/public/' : '/'; ?>upload'>
                    <input type="file" name="upload_pic" id="upload_pic" />
                    <input type="button" value="Télécharge ton dessin" id="upload_btn" />
                </form>
            </div>
            
            <ul id="comment_list">
            
                <h5 id='renew_comments' style="cursor: pointer;">Clique pour voir les anciens commentaires</h5>
            </ul>
            
            <div class="loading"></div>
        </div>
        
        
    <!-- Scriber dialog -->
        <div id="scriber" class="dialog animate_medium hidden">
            <div class="close right" id="sb_cancel"></div>
            <h1>Customise ton dessin</h1>
            <div class="sep_line"></div>
            
            <div id="toolbox">
                <ul id="sb_tools" class="animate_medium">
                    <li id="sb_pencil">
                        <?php echo Asset::img('season13/ui/scriber_edit.png'); ?>
                        <h5>Dessiner</h5>
                        
                        <ul id="sb_colorset">
                            <span>Couleur</span>
                            <li class="active" id="sb_black" style="background: #201b21;"></li>
                            <li id="sb_red" style="background: #ef1c22;"></li>
                            <li id="sb_orange" style="background: #f77100;"></li>
                            <li id="sb_yellow" style="background: #ffdf1a;"></li>
                            <li id="sb_green" style="background: #21d708;"></li>
                            <li id="sb_blue" style="background: #0182e7;"></li>
                            <li id="sb_purple" style="background: #914ce4;"></li>
                        </ul>
                        <ul id="sb_sizeset">
                            <span>Epaisseur</span>
                        
                            <canvas id="sb_sizes_canvas" width="149" height="31"></canvas>
                            <div id="sb_sizebloc"></div>
                        </ul>
                    </li>
                    <li id="sb_eraser">
                        <?php echo Asset::img('season13/ui/scriber_erase.png'); ?>
                        <h5>Effacer</h5>
                    </li>
                    <!--<li id="sb_resize">
                        <?php echo Asset::img('season13/ui/scriber_resize.png'); ?>
                        <h5>Redimensionner</h5>
                    </li>-->
                </ul>
            </div>
            
            <div class="canvas_container">
                <div class="inner_container">
                    <canvas id="sb_imgcanvas"></canvas>
                    <canvas id="sb_drawcanvas"></canvas>
                </div>
                <div id="circle_center">
                    <div class="circle"></div>
                    <div class="moveicon editicon"></div>
                    <div class="dragicon editicon"></div>
                    <div class="deleteicon editicon"></div>
                </div>
            </div>
            
            <ul id="scriber_menu">
                <li id="sb_edit" class="animate_medium" title="Modifie l'image"><?php echo Asset::img('season13/ui/scriber_edit.png'); ?></li>
                <div class="sep_line"></div>
                <li id="sb_recap" title="Recommence"><?php echo Asset::img('season13/ui/scriber_recap2.png'); ?></li>
                <div class="sep_line"></div>
                <li id="sb_confirm" title="Valide ton dessin"><?php echo Asset::img('season13/ui/scriber_confirm.png'); ?></li>
            </ul>
        </div>
    </div>
    
    <div id="imgShower"><div>
            <img id="theImage" src=""/>
            <?php echo Asset::img('season13/story/button/close.png', array("id" => "closeBn")); ?>
    </div></div>
    
    <div id="game_container" class="dialog">
        <div class="close right"></div>
        <h1></h1>
        <div class="sep_line"></div>
        
        <canvas id="gameCanvas" class='game' width=50 height=50></canvas>
        
        <div id="game_center">
            <div id="game_result">
                <?php echo Asset::img('season13/fb_btn.jpg', array('alt' => 'Partager ton score sur Facebook')); ?>
                <h2>Bravo! <span>240</span> pts    </h2>
                <h5>Améliore ton score en rejouant <a href="" target="_blank">ici</a></h5>
                <ul>
                    <li id="game_restart">REJOUER</li>
                    <li id="game_quit">QUITTER</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div id="root">
        <div id="controler">
            <div class="back"></div>
            <div id="circle">
                <?php echo Asset::img('season13/ui/controler_config.png', array('alt' => 'Panneau de Contrôle SEASON 13')); ?>
                <span></span>
            </div>
            
            <ul>
                <li id="ctrl_like"><?php echo Asset::img('season13/ui/wheel_like3.png', array('alt' => 'Aime Voodoo Connection sur Facebook')); ?></li>
                <li id="ctrl_speedup"><?php echo Asset::img('season13/ui/wheel_rabbit.png', array('alt' => 'Plus vite')); ?></li>
                <li id="ctrl_playpause"><?php echo Asset::img('season13/ui/wheel_pause.png', array('alt' => 'Reprendre/Pause')); ?></li>
                <li id="ctrl_slowdown"><?php echo Asset::img('season13/ui/wheel_turtle.png', array('alt' => 'Moins vite')); ?></li>
                <li id="ctrl_comment"><?php echo Asset::img('season13/ui/wheel_comment.png', array('alt' => 'Commentaire sur Facebook et SEASON 13')); ?></li>
            </ul>
        </div>
    
        <canvas class="bookroot">Votre navigateur ne supporte pas HTML5</canvas>
        <div class="video animate_medium"></div>
    </div>
    
    
    <script type="text/javascript">
    <?php 
    
        if(Fuel::$env == Fuel::DEVELOPMENT || Fuel::$env == Fuel::TEST) {
            $content = file_get_contents($episode->path."pub.js");
        }
        else {
            $content = file_get_contents($episode->path."pub.min.js");
        }
        echo $content;
    
    ?>
    </script>

</body>
</html>
