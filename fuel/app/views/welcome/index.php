<div class="main_container">

    <div id="back" class="layer">
        <?php echo Asset::img('season13/illus/petite_ceinture.jpg', array('alt' => 'Fond SEASON 13')); ?>
    </div>
    <div id="booktitle" class="layer">
        <?php echo Asset::img('season13/illus/titre_2.png', array('alt' => 'Voodoo Connection SEASON 13')); ?>
    </div>
    <div id="bookresume" class="layer">
        <p>Simon est poursuivi par une bande, la nuit, dans Paris. 
           Après une folle course poursuite, il réussit à semer ses 
           poursuivants et  trouve refuge dans les catacombes. Un 
           sorcier vaudou et un étrange commissaire  vont l’entraîner 
           dans une aventure fantastique.
       </p>
    </div>
    <div id="btns" class="layer">
        <ul>
            <!--<li id="open_login2"><a>SE CONNECTER</a></li>-->
            <li id="ep1"><a href="<?php echo $remote_path; ?>story?ep=1&source=discoverbtn" target="_blank">DÉCOUVRIR GRATUITEMENT</a></li>
        </ul>
    </div>
    
    <div id="episodes_section" class="layer">
        <div id="episodes">
            <div id="expos">
            <?php foreach ($admin_13episodes as $admin_13episode): ?>
                <?php if(!isset($current_ep)) $current_ep = $admin_13episode; ?>
                <div class="expo" 
                     data-id="<?php echo stripslashes($admin_13episode->id); ?>"
                     data-title="<?php echo stripslashes($admin_13episode->title); ?>"
                     data-episode="<?php echo $admin_13episode->episode; ?>"
                     data-bref="<?php echo stripslashes($admin_13episode->bref); ?>"
                     data-path="<?php echo $admin_13episode->path; ?>"
                     data-dday="<?php echo $admin_13episode->dday; ?>">
                     
                    <?php echo Html::img($admin_13episode->image); ?>
                    
                </div>
            <?php endforeach; ?>
            </div>
            <div class="ep_title">
                <h2><?php echo '#'.$current_ep->episode.'  '.stripslashes($current_ep->title); ?></h2>
                <a class="ep_play" target="_blank"></a>
            </div>
            <div class="ep_list">
            <!--
                <div id="ep_prev_btn">
                    <?php echo Asset::img("season13/ui/btn_left.jpg"); ?>
                </div>
            -->
                <ul>
                <?php foreach ($admin_13episodes as $admin_13episode): ?>
                    <?php if($current_ep == $admin_13episode): ?>
                    <li class="active"><?php echo '#'.$admin_13episode->episode; ?></li>
                    <?php else: ?>
                    <li><?php echo '#'.$admin_13episode->episode; ?></li>
                    <?php endif; ?>
                <?php endforeach; ?>
                </ul>
            <!--
                <div id="ep_next_btn">
                    <?php echo Asset::img("season13/ui/btn_right.jpg"); ?>
                </div>
            -->
            </div>
        </div>
    </div>
    
</div>


<div id="simon" class="layer" title="Simon SEASON 13"></div>
<div id="bande4" class="layer">
    <?php echo Asset::img('season13/illus/bande4.png', array('alt' => 'Les 4 SEASON 13')); ?>
</div>