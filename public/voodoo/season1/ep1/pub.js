
mse.coords = JSON.parse('{"cid0":800,"cid1":600,"cid2":0,"cid3":410,"cid4":200,"cid5":20,"cid6":370,"cid7":590,"cid8":220,"cid9":10,"cid10":22.5,"cid11":36.25,"cid12":462.5,"cid13":360,"cid14":315,"cid15":324,"cid16":441.72,"cid17":18,"cid18":441.75,"cid19":238.75,"cid20":492.5,"cid21":517.5,"cid22":250,"cid23":100,"cid24":300,"cid25":409,"cid26":-200,"cid27":1090,"cid28":33,"cid29":235,"cid30":109,"cid31":343,"cid32":41,"cid33":320,"cid34":248,"cid35":178,"cid36":61,"cid37":230,"cid38":-42,"cid39":135,"cid40":1000,"cid41":164,"cid42":106,"cid43":189,"cid44":114,"cid45":221,"cid46":238,"cid47":400,"cid48":23,"cid49":143,"cid50":36,"cid51":83,"cid52":396,"cid53":116,"cid54":340,"cid55":30,"cid56":90,"cid57":266,"cid58":140,"cid59":210,"cid60":208,"cid61":170,"cid62":260,"cid63":290,"cid64":350,"cid65":380,"cid66":440}');
initMseConfig();
window.pages={};
window.layers={};
window.objs={};
var animes={};
var games={};
var wikis={};
function createbook(){
	if(config.publishMode == 'debug') mse.configs.srcPath='./Voodoo_Ch1/';
	window.root = mse.root;
	var temp = {};
	mse.src.addSource('src0','images/src0.png','img',true);
	mse.src.addSource('src7','images/src7.png','img',true);
	mse.src.addSource('src8','images/src8.png','img',true);
	mse.src.addSource('src9','images/src9.jpeg','img',true);
	animes.fouine=new mse.Animation(22,1,true,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.fouine.block=true;
	games.RatGame = new RatGame();
	animes.titleshow=new mse.Animation(101,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.titleshow.block=true;
	animes.chashow=new mse.Animation(101,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.chashow.block=true;
	games.FindSimon = new FindSimon();
	mse.src.addSource('src22','images/src22.jpeg','img',true);
	mse.src.addSource('grillageimg','images/src16.png','img',true);
	animes.piege=new mse.Animation(51,1,true,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.piege.block=true;
	mse.src.addSource('src29','images/src29.jpeg','img',true);
	mse.src.addSource('src30','images/src30.jpeg','img',true);
	mse.src.addSource('src31','images/src31.jpeg','img',true);
	mse.src.addSource('src32','images/src32.jpeg','img',true);
	mse.src.addSource('src33','images/src33.jpeg','img',true);
	mse.src.addSource('src34','images/src34.png','img',true);
	mse.src.addSource('src35','images/src35.png','img',true);
	mse.src.addSource('src36','images/src36.png','img',true);
	mse.src.addSource('src37','images/src37.png','img',true);
	mse.src.addSource('src41','images/src41.jpeg','img',true);
	mse.src.addSource('src44','images/src44.jpeg','img',true);
	mse.src.addSource('src45','images/src45.jpeg','img',true);
	animes.maskAnime=new mse.Animation(89,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.maskAnime.block=true;
	mse.src.addSource('src46','images/src46.jpeg','img',true);
	mse.src.addSource('src47','images/src47.jpeg','img',true);
	mse.src.addSource('src48','images/src48.jpeg','img',true);
	mse.src.addSource('intro','audios/intro','aud',false);
	mse.src.addSource('villenuit','audios/villenuit','aud',false);
	animes.quarantAnime=new mse.Animation(27,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.quarantAnime.block=true;
	animes.trentAnime=new mse.Animation(27,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.trentAnime.block=true;
	mse.src.addSource('piegeson','audios/piegeson','aud',false);
	animes.addGrilleBack=new mse.Animation(2,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.addGrilleBack.block=true;
	mse.src.addSource('pasAppro','audios/pasAppro','aud',false);
	mse.src.addSource('kevinSpeak','audios/kevinSpeak','aud',false);
	mse.src.addSource('woosh','audios/woosh','aud',false);
	mse.src.addSource('runsound','audios/runsound','aud',false);
	mse.src.addSource('ilestla','audios/ilestla','aud',false);
	mse.src.addSource('accelera','audios/accelera','aud',false);
	mse.src.addSource('klaxon','audios/klaxon','aud',false);
	mse.src.addSource('vent','audios/vent','aud',false);
	mse.src.addSource('paslourd','audios/paslourd','aud',false);
	mse.src.addSource('rer','audios/rer','aud',false);
	mse.src.addSource('restartrun','audios/restartrun','aud',false);
	mse.src.addSource('onletien','audios/onletien','aud',false);
	mse.src.addSource('heart','audios/heart','aud',false);
	wikis.Noctambule=new mse.WikiLayer();
	wikis.Noctambule.addTextCard();
	wikis.Noctambule.textCard.addSection('Nyctalope', 'A ne pas confondre avec nyctalope : un adjectif qui désigne celui qui a la faculté de voir dans la pénombre, comme les chats');
	wikis.Noctambule.textCard.addSection('A moins d’inventer', ' - Nyctambule : qui recherche les fétards égarés la nuit\n - Noctalope : qui travaille la nuit sans avoir besoin de lumière');
	wikis.Noctambule.addTextCard();
	wikis.Noctambule.textCard.addSection('Noctambule', 'Nom masculin ou féminin : \n - personne ou animal qui a l’habitude de se promener la nuit.\n - personne qui aime faire la fête la nuit.\n - Par extension : personne qui est en activité la nuit');
	wikis.frondaison=new mse.WikiLayer();
	wikis.frondaison.addImage('src29', 'Photo réalisée par Panoramas');
	wikis.frondaison.addTextCard();
	wikis.frondaison.textCard.addSection('Frondaison', 'Nom, féminin : \n - Les feuilles et les branches d’un arbre\n - Epoque où les feuilles commencent à pousser');
	wikis.frondaison.textCard.addSection('Synonymes', 'Feuillage, \nRamure, \nBranchage');
	wikis.albinos=new mse.WikiLayer();
	wikis.albinos.addImage('src31', 'Salif Keïta par Jeff Attaway');
	wikis.albinos.addTextCard();
	wikis.albinos.textCard.addSection('Les albinos célèbres', 'Il existe des albinos célèbres parmi lesquels Salif Keïta, chanteur et musicien malien. Il a obtenu une Victoire de la musique en 2010 pour son album « La Différence »');
	wikis.albinos.textCard.addLink('Site officiel  Salif Keïta', 'http:\/\/salif-keita.artiste.universalmusic.fr\/');
	wikis.albinos.addImage('src30', 'Rat albinos. Photographie de Tambako');
	wikis.albinos.addTextCard();
	wikis.albinos.textCard.addSection('Albinos', 'Adjectif invariable :\nQui est affecté d\'albinisme.');
	wikis.albinos.textCard.addSection('Albinisme', 'nom masculin : \nmaladie génétique qui se caractérise par une absence du pigment destiné à colorer la peau, les poils, les cheveux ainsi que par des yeux rouges. Elle affecte les humains ou les animaux.');
	wikis.albinos.textCard.addLink('Wikipédia albinos', 'http:\/\/fr.wikipedia.org\/wiki\/Albinisme ');
	wikis.pCeinture=new mse.WikiLayer();
	wikis.pCeinture.addImage('src32', 'Vue depuis la place Wagram. Photographie de marsupilami92 ');
	wikis.pCeinture.addTextCard();
	wikis.pCeinture.textCard.addSection('Biodiversité', 'Elle est considérée comme une réserve de biodiversité. On peut y observer de nombreuses variétés d’arbres, de plantes et la plus grande colonie de chauve-souris de l’espèce pipistrelle d’Ile de France. \nLa ville de Paris y aménage des parcours pédagogiques, proposant ainsi un nouveau type de promenade nature à Paris.');
	wikis.pCeinture.textCard.addLink('Lien Mairie de Paris', 'http:\/\/www.paris.fr\/loisirs\/se-promener-a-paris\/balades-au-vert\/decouvrir-les-richesses-de-la-petite-ceinture\/rub_9660_stand_53584_port_23803');
	wikis.pCeinture.addImage('src33', 'La Petite Ceinture traverse le Parc Montsouris. Photo de Thomas Claveirole ');
	wikis.pCeinture.addTextCard();
	wikis.pCeinture.textCard.addSection('La Petite Ceinture', 'C’est une ancienne ligne de chemin de fer longue de 32 km qui faisait le tour de Paris.');
	wikis.pCeinture.textCard.addLink('Lien Wikipédia', 'http:\/\/fr.wikipedia.org\/wiki\/Ligne_de_Petite_Ceinture');
	wikis.Cyclope=new mse.WikiLayer();
	wikis.Cyclope.addImage('src9', 'Cyclope, super-héros des X-Men');
	wikis.Cyclope.addTextCard();
	wikis.Cyclope.textCard.addSection('Un Cyclope chez les X-Men :', 'Cyclope est aussi un super-héros créé par J. Kirby et S. Lee en 1963. C’est  un mutant qui génère des rayons extrêmement puissants avec ses yeux mais il évite au maximum d’utiliser la violence.');
	wikis.Cyclope.textCard.addLink('Wikipédia X-Men', 'http:\/\/fr.wikipedia.org\/wiki\/Cyclope_%28comics%29 ');
	wikis.Cyclope.addImage('src8', 'Polyphème, fils de Poséïdon');
	wikis.Cyclope.addTextCard();
	wikis.Cyclope.textCard.addSection('Les cyclopes', 'Nom, masculin :\nLes cyclopes sont des créatures fantastiques de la mythologie grecque. Ce sont des géants qui ne possèdent qu’un seul œil au milieu du front. Ils étaient soit forgerons, bâtisseurs ou pasteurs.');
	wikis.Cyclope.textCard.addLink('Wikipédia Cyclope', 'http:\/\/fr.wikipedia.org\/wiki\/Cyclope ');
	wikis.hallali=new mse.WikiLayer();
	wikis.hallali.addImage('src22', 'L\\\'hallali du cerf, peint par Courbet en 1867');
	wikis.hallali.addTextCard();
	wikis.hallali.textCard.addSection('Nom masculin', ' - Sonnerie de chasse à courre qui annonce la prise imminente de l’animal, d’où l’expression : Sonner l’hallali : annoncer la défaite de quelqu’un.\n - Moment où l’animal est pris\n - Par extension : débâcle, défaite');
	wikis.hallali.addTextCard();
	wikis.hallali.textCard.addSection('L’hallali', 'Interjection : \nCri du chasseur qui attrape du gibier lors d’une chasse à courre.');
	animes.textAnime=new mse.Animation(15,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.textAnime.block=true;
	animes.trenteAnime=new mse.Animation(15,1,false,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.trenteAnime.block=true;
	mse.src.addSource('src65','images/src65.png','img',true);
	animes.simcour2=new mse.Animation(45,1,true,null,{'size':[mse.coor('cid0'),mse.coor('cid1')]});
	animes.simcour2.block=true;
	mse.src.addSource('src66','images/src66.png','img',true);
	mse.src.addSource('src67','images/src67.gif','img',true);
	mse.src.addSource('src68','images/src68.png','img',true);
	mse.src.addSource('heartbeat','audios/heartbeat','aud',false);
	pages.Content=new mse.BaseContainer(root,'Content',{size:[mse.coor('cid0'),mse.coor('cid1')]});
	layers.Contentdefault=new mse.Layer(pages.Content,1,{"globalAlpha":1,"textBaseline":"top","size":[mse.coor('cid0'),mse.coor('cid1')]});
	objs.obj708=new mse.Image(layers.Contentdefault,{"size":[mse.coor('cid0'),mse.coor('cid1')],"pos":[mse.coor('cid2'),mse.coor('cid2')]},'src45'); layers.Contentdefault.addObject(objs.obj708);
	pages.Content.addLayer('Contentdefault',layers.Contentdefault);
	layers.grillage=new mse.Layer(pages.Content,2,{"globalAlpha":1,"textBaseline":"top","size":[mse.coor('cid0'),mse.coor('cid1')]});
	objs.obj957=new mse.Image(layers.grillage,{"size":[mse.coor('cid0'),mse.coor('cid1')],"pos":[mse.coor('cid2'),mse.coor('cid2')]},'grillageimg'); layers.grillage.addObject(objs.obj957);
	pages.Content.addLayer('grillage',layers.grillage);
	layers.contmask=new mse.Layer(pages.Content,3,{"globalAlpha":1,"textBaseline":"top","size":[mse.coor('cid0'),mse.coor('cid1')]});
	objs.obj711=new mse.Mask(layers.contmask,{"size":[mse.coor('cid3'),mse.coor('cid1')],"pos":[mse.coor('cid4'),mse.coor('cid2')],"fillStyle":"rgb(0, 0, 0)","globalAlpha":0.80,"font":"normal "+mse.coor('cid5')+"px Times","textAlign":"left"}); layers.contmask.addObject(objs.obj711);
	pages.Content.addLayer('contmask',layers.contmask);
	layers.text=new mse.ArticleLayer(pages.Content,4,{"size":[mse.coor('cid6'),mse.coor('cid7')],"pos":[mse.coor('cid8'),mse.coor('cid9')],"fillStyle":"rgb(255, 255, 255)","globalAlpha":1,"font":"normal "+mse.coor('cid10')+"px Gudea","textAlign":"left","textBaseline":"top","lineHeight":mse.coor('cid11')},null);
	objs.obj712=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'',true); layers.text.addObject(objs.obj712);
	objs.obj994=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Ils étaient là.',true); layers.text.addObject(objs.obj994);
	objs.obj713=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'À moins de cent mètres derrière ',true); layers.text.addObject(objs.obj713);
	objs.obj714=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon. Bien décidés à lui faire payer ',true); layers.text.addObject(objs.obj714);
	objs.obj715=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'l’affront qu’ils avaient subi.',true); layers.text.addObject(objs.obj715);
	objs.obj716=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'La Meute.',true); layers.text.addObject(objs.obj716);
	objs.obj717=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Quatre adolescents qui faisaient ',true); layers.text.addObject(objs.obj717);
	objs.obj718=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'régner leur loi au sein du foyer.',true); layers.text.addObject(objs.obj718);
	objs.obj719=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Recroquevillé dans la pénombre d’un ',true); layers.text.addObject(objs.obj719);
	objs.obj720=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'porche, Simon contemplait le ballet ',true); layers.text.addObject(objs.obj720);
	objs.obj721=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'des lampes torches qui déchiraient la ',true); layers.text.addObject(objs.obj721);
	objs.obj722=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'nuit. Des yeux, scrutant le moindre ',true); layers.text.addObject(objs.obj722);
	objs.obj723=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'recoin, repoussant les ténèbres de ',true); layers.text.addObject(objs.obj723);
	objs.obj724=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'leurs lueurs cyclopes.',true);
	objs.obj724.addLink(new mse.Link('cyclopes',13,'wiki',wikis.Cyclope)); layers.text.addObject(objs.obj724);
	objs.obj725=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Bientôt, ils seraient sur lui.',true); layers.text.addObject(objs.obj725);
	objs.obj726=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon frissonna en songeant à ce qui ',true); layers.text.addObject(objs.obj726);
	objs.obj727=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'allait lui arriver. Il savait que Kevin, ',true); layers.text.addObject(objs.obj727);
	objs.obj728=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'leur chef, serait sans pitié…',true); layers.text.addObject(objs.obj728);
	objs.obj729=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il fallait qu’il leur échappe.',true); layers.text.addObject(objs.obj729);
	objs.obj730=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Absolument. Et tant pis s’il ne pouvait ',true); layers.text.addObject(objs.obj730);
	objs.obj731=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'jamais retourner au foyer.',true); layers.text.addObject(objs.obj731);
	objs.obj732=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Les pas se rapprochaient, de plus en ',true);
	objs.obj732.addLink(new mse.Link('Les pas',21,'audio',mse.src.getSrc('pasAppro'))); layers.text.addObject(objs.obj732);
	objs.obj733=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'plus. Il pouvait entendre leurs voix à ',true); layers.text.addObject(objs.obj733);
	objs.obj734=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'présent.',true); layers.text.addObject(objs.obj734);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj924=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Trouvez-moi ce sale petit rat ! ',true);
	objs.src40.addObject(objs.obj924);
	objs.obj925=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Il va comprendre qu’on ne peut ',true);
	objs.src40.addObject(objs.obj925);
	objs.obj928=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pas se moquer de nous comme ça !',true);
	objs.src40.addObject(objs.obj928);
	objs.src39=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'fouine', 'src34' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src39);
	objs.obj929=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Ouaip, on va lui faire sa fête !',true);
	objs.src39.addObject(objs.obj929);
	objs.obj739=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Ça, c’était « La Fouine ».',true); layers.text.addObject(objs.obj739);
	objs.obj740=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Dix sept ans, un mètre quatre-vingt, ',true); layers.text.addObject(objs.obj740);
	objs.obj741=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'soixante-quinze kilos de violence ',true); layers.text.addObject(objs.obj741);
	objs.obj742=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pure. Une véritable bombe ambulante ',true); layers.text.addObject(objs.obj742);
	objs.obj743=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'qui ne demandait qu’à exploser.',true); layers.text.addObject(objs.obj743);
	objs.obj744=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon se pencha un instant hors de ',true); layers.text.addObject(objs.obj744);
	objs.obj745=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'son abri pour évaluer ses chances de ',true); layers.text.addObject(objs.obj745);
	objs.obj746=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'leur échapper.',true); layers.text.addObject(objs.obj746);
	objs.obj747=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Proches du zéro absolu s’il ne ',true); layers.text.addObject(objs.obj747);
	objs.obj748=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'bougeait pas de sa cachette. Un peu ',true); layers.text.addObject(objs.obj748);
	objs.obj749=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'plus s’il tentait une sortie. À condition ',true); layers.text.addObject(objs.obj749);
	objs.obj750=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'de tomber sur quelqu’un, un adulte ',true); layers.text.addObject(objs.obj750);
	objs.obj751=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'qui saurait éloigner ses poursuivants.',true); layers.text.addObject(objs.obj751);
	objs.src38=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'simon', 'src66' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src38);
	objs.obj930=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Tu es prêt ? chuchota-t-il à ',true);
	objs.src38.addObject(objs.obj930);
	objs.obj931=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Dark.',true);
	objs.src38.addObject(objs.obj931);
	objs.obj753=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Dark. Vador. Son rat albinos. Son ',true);
	objs.obj753.addLink(new mse.Link('albinos',40,'wiki',wikis.albinos)); layers.text.addObject(objs.obj753);
	objs.obj754=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'plus fidèle compagnon depuis un an.',true); layers.text.addObject(objs.obj754);
	objs.obj755=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Le seul en vérité.',true); layers.text.addObject(objs.obj755);
	objs.obj756=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon repoussa l’élan de mélancolie ',true); layers.text.addObject(objs.obj756);
	objs.obj757=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'qui menaçait de le submerger et ',true); layers.text.addObject(objs.obj757);
	objs.obj758=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'enfouit Dark au fond de son sac.',true); layers.text.addObject(objs.obj758);
	objs.obj983=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj983);
	objs.obj759=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il passa les lanières autour de ses ',true); layers.text.addObject(objs.obj759);
	objs.obj760=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'épaules et s’élança.',true); layers.text.addObject(objs.obj760);
	objs.obj761=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Pas de réaction.',true); layers.text.addObject(objs.obj761);
	objs.obj762=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il s’était mis à courir comme si sa vie ',true);
	objs.obj762.addLink(new mse.Link('courir',50,'audio',mse.src.getSrc('runsound'))); layers.text.addObject(objs.obj762);
	objs.obj763=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'en dépendait.',true); layers.text.addObject(objs.obj763);
	objs.obj764=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Si la Meute lui tombait dessus, il était ',true); layers.text.addObject(objs.obj764);
	objs.obj765=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'bon pour un passage à tabac dans les ',true); layers.text.addObject(objs.obj765);
	objs.obj766=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'règles de l’art. Voilà ce qui se passe ',true); layers.text.addObject(objs.obj766);
	objs.obj767=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'lorsque l’on refuse de se soumettre ',true); layers.text.addObject(objs.obj767);
	objs.obj768=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'aux plus forts.',true); layers.text.addObject(objs.obj768);
	objs.obj769=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon évitait de regarder dans leur ',true); layers.text.addObject(objs.obj769);
	objs.obj770=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'direction, les yeux rivés sur les ',true); layers.text.addObject(objs.obj770);
	objs.obj771=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'frondaisons du parc Montsouris. Des ',true);
	objs.obj771.addLink(new mse.Link('frondaisons',59,'wiki',wikis.frondaison)); layers.text.addObject(objs.obj771);
	objs.obj772=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'arbres, de la pénombre et des milliards ',true); layers.text.addObject(objs.obj772);
	objs.obj773=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'de recoins où il pourrait se dissimuler ',true); layers.text.addObject(objs.obj773);
	objs.obj774=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'en attendant l’aube.',true); layers.text.addObject(objs.obj774);
	objs.obj775=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'S’il atteignait le jardin, il serait sauvé.',true); layers.text.addObject(objs.obj775);
	objs.obj776=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Mais, dans sa précipitation, il buta ',true); layers.text.addObject(objs.obj776);
	objs.obj777=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'contre le trottoir. Le béton lui arracha ',true); layers.text.addObject(objs.obj777);
	objs.obj778=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'une plainte. Un cri minuscule.',true); layers.text.addObject(objs.obj778);
	objs.obj932=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj932);
	objs.src42=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'unknown', 'src41' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src42);
	objs.obj934=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Il est là !',true);
	objs.src42.addObject(objs.obj934);
	objs.obj933=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj933);
	objs.obj780=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Pas assez minuscule, visiblement.',true); layers.text.addObject(objs.obj780);
	objs.obj781=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon détala tandis que les faisceaux ',true); layers.text.addObject(objs.obj781);
	objs.obj782=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'accrochaient sa silhouette.',true); layers.text.addObject(objs.obj782);
	objs.obj935=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj935);
	objs.obj940=new mse.Image(layers.text,{"size":[mse.coor('cid15'),mse.coor('cid16')],"pos":[mse.coor('cid17'),mse.coor('cid5')]},'src47');
	objs.obj940.activateZoom(); layers.text.addObject(objs.obj940);
	objs.obj936=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj936);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj937=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Chopez-le ! Faut qu’il ',true);
	objs.src40.addObject(objs.obj937);
	objs.obj938=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'comprenne !',true);
	objs.src40.addObject(objs.obj938);
	objs.obj784=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Que je comprenne quoi ? Qu’il faut se ',true); layers.text.addObject(objs.obj784);
	objs.obj785=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'laisser faire ? Pas question !',true); layers.text.addObject(objs.obj785);
	objs.obj786=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il accéléra.',true);
	objs.obj786.addLink(new mse.Link('accéléra',79,'audio',mse.src.getSrc('accelera'))); layers.text.addObject(objs.obj786);
	objs.obj787=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il essayait d’oublier que ses poumons ',true); layers.text.addObject(objs.obj787);
	objs.obj788=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'le brûlaient, qu’il était épuisé par cette ',true); layers.text.addObject(objs.obj788);
	objs.obj789=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'poursuite qui durait depuis des ',true); layers.text.addObject(objs.obj789);
	objs.obj790=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'heures, et surtout que la peur ',true); layers.text.addObject(objs.obj790);
	objs.obj791=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'menaçait de le paralyser à tout instant.',true); layers.text.addObject(objs.obj791);
	objs.obj792=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il traversa le boulevard, déclenchant ',true); layers.text.addObject(objs.obj792);
	objs.obj793=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'le klaxon furieux d’un noctambule ',true);
	objs.obj793.addLink(new mse.Link('klaxon',86,'audio',mse.src.getSrc('klaxon')));
	objs.obj793.addLink(new mse.Link('noctambule',86,'wiki',wikis.Noctambule)); layers.text.addObject(objs.obj793);
	objs.obj794=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'égaré. Puis il s’engouffra à l’abri des ',true); layers.text.addObject(objs.obj794);
	objs.obj795=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'arbres. Son sac ballotait sur ses ',true); layers.text.addObject(objs.obj795);
	objs.obj796=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'épaules et il pensa au pauvre Dark. ',true); layers.text.addObject(objs.obj796);
	objs.obj797=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Sans réfléchir, il pénétra dans une ',true); layers.text.addObject(objs.obj797);
	objs.obj798=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'petite allée. Il dépassa les angles du ',true); layers.text.addObject(objs.obj798);
	objs.obj799=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pavillon météo qui s’élevait dans la ',true); layers.text.addObject(objs.obj799);
	objs.obj800=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pénombre, puis il ralentit sa course.',true); layers.text.addObject(objs.obj800);
	objs.obj801=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Pas un bruit.',true);
	objs.obj801.addLink(new mse.Link('bruit',94,'audio',mse.src.getSrc('vent'))); layers.text.addObject(objs.obj801);
	objs.obj802=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Rien d’autre que le vent dans les ',true); layers.text.addObject(objs.obj802);
	objs.obj803=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'feuilles.',true); layers.text.addObject(objs.obj803);
	objs.obj804=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Où étaient-ils passés ?',true); layers.text.addObject(objs.obj804);
	objs.obj805=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon s’arrêta, s’accroupit derrière un ',true); layers.text.addObject(objs.obj805);
	objs.obj806=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'banc scarifié de graffitis.',true); layers.text.addObject(objs.obj806);
	objs.obj807=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Là ! Sur sa gauche.',true); layers.text.addObject(objs.obj807);
	objs.obj941=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj941);
	objs.obj946=new mse.Image(layers.text,{"size":[mse.coor('cid15'),mse.coor('cid18')],"pos":[mse.coor('cid17'),mse.coor('cid5')]},'src48');
	objs.obj946.activateZoom(); layers.text.addObject(objs.obj946);
	objs.obj942=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj942);
	objs.obj808=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il avait reconnu la démarche ',true);
	objs.obj808.addLink(new mse.Link('démarche',104,'audio',mse.src.getSrc('paslourd'))); layers.text.addObject(objs.obj808);
	objs.obj809=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'chaloupée de la Fouine, les pas lourds ',true); layers.text.addObject(objs.obj809);
	objs.obj810=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'de l’Ours - seize ans, un QI ',true); layers.text.addObject(objs.obj810);
	objs.obj811=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'inversement proportionnel à sa force - ',true); layers.text.addObject(objs.obj811);
	objs.obj812=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'à ses côtés. Les deux autres suivaient ',true); layers.text.addObject(objs.obj812);
	objs.obj813=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'la ligne de tramway qui longeait le ',true); layers.text.addObject(objs.obj813);
	objs.obj814=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'parc, sur sa droite.',true); layers.text.addObject(objs.obj814);
	objs.obj815=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Le groupe s’était séparé en deux et ',true); layers.text.addObject(objs.obj815);
	objs.obj816=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'tentait de l’encercler.',true); layers.text.addObject(objs.obj816);
	objs.obj817=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon réfléchit à toute allure.',true); layers.text.addObject(objs.obj817);
	objs.obj818=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Le RER !',true);
	objs.obj818.addLink(new mse.Link('RER',114,'audio',mse.src.getSrc('rer'))); layers.text.addObject(objs.obj818);
	objs.obj819=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'La station ne devait être qu’à quelques ',true); layers.text.addObject(objs.obj819);
	objs.obj820=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'dizaines de mètres devant lui et, même ',true); layers.text.addObject(objs.obj820);
	objs.obj821=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'en ces heures tardives, il y aurait sans ',true); layers.text.addObject(objs.obj821);
	objs.obj822=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'doute un peu de monde.',true); layers.text.addObject(objs.obj822);
	objs.obj823=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il reprit sa progression, lentement, ',true); layers.text.addObject(objs.obj823);
	objs.obj824=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'veillant à rester invisible.',true); layers.text.addObject(objs.obj824);
	objs.obj825=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Plus que cinquante mètres.',true); layers.text.addObject(objs.obj825);
	objs.obj826=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il entendait déjà le crissement des ',true); layers.text.addObject(objs.obj826);
	objs.obj827=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'rames sur les rails.',true); layers.text.addObject(objs.obj827);
	objs.obj947=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj947);
	objs.obj828=new mse.Text(layers.text,{"size":[mse.coor('cid13'),mse.coor('cid11')],"pos":[mse.coor('cid2'),mse.coor('cid19')],"fillStyle":"rgb(255, 255, 255)","globalAlpha":1,"font":"normal "+mse.coor('cid10')+"px Gudea","textAlign":"left"},'Quarante.',true); layers.text.addObject(objs.obj828);
	objs.obj948=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj948);
	objs.src42=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'unknown', 'src41' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src42);
	objs.obj951=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Là sur le pont ! Il essaye de ',true);
	objs.src42.addObject(objs.obj951);
	objs.obj952=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'rejoindre la gare !',true);
	objs.src42.addObject(objs.obj952);
	objs.src38=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'simon', 'src66' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src38);
	objs.obj953=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Merde ! lâcha Simon en ',true);
	objs.src38.addObject(objs.obj953);
	objs.obj954=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'reprenant sa course.',true);
	objs.src38.addObject(objs.obj954);
	objs.obj949=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj949);
	objs.obj833=new mse.Text(layers.text,{"size":[mse.coor('cid13'),mse.coor('cid11')],"pos":[mse.coor('cid2'),mse.coor('cid20')],"fillStyle":"rgb(255, 255, 255)","globalAlpha":1,"font":"normal "+mse.coor('cid10')+"px Gudea","textAlign":"left"},'Trente.',true); layers.text.addObject(objs.obj833);
	objs.obj950=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj950);
	objs.obj834=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Mais la Meute, galvanisée par la ',true); layers.text.addObject(objs.obj834);
	objs.obj835=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'proximité de sa proie, se rapprochait ',true); layers.text.addObject(objs.obj835);
	objs.obj836=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'rapidement.',true); layers.text.addObject(objs.obj836);
	objs.obj837=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Ils avaient de la lumière, ils évitaient ',true); layers.text.addObject(objs.obj837);
	objs.obj838=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'les obstacles. Surtout ils étaient plus ',true); layers.text.addObject(objs.obj838);
	objs.obj839=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'âgés, plus forts,  alors que lui était ',true); layers.text.addObject(objs.obj839);
	objs.obj840=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'éreinté, les jambes écorchées par les ',true); layers.text.addObject(objs.obj840);
	objs.obj841=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'ronces, au bord de l’asphyxie.',true); layers.text.addObject(objs.obj841);
	objs.obj842=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Les deux groupes gagnaient ',true); layers.text.addObject(objs.obj842);
	objs.obj843=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'insensiblement du terrain. Bientôt ils ',true); layers.text.addObject(objs.obj843);
	objs.obj844=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'se rejoindraient et ce serait l’hallali.',true);
	objs.obj844.addLink(new mse.Link('l’hallali',142,'wiki',wikis.hallali)); layers.text.addObject(objs.obj844);
	objs.obj845=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon obliqua brutalement vers le ',true); layers.text.addObject(objs.obj845);
	objs.obj846=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'nord pour essayer de rejoindre un ',true); layers.text.addObject(objs.obj846);
	objs.obj847=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'bouquet d’arbres denses. Avec un peu ',true); layers.text.addObject(objs.obj847);
	objs.obj848=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'de chance, il pourrait les semer. Au ',true); layers.text.addObject(objs.obj848);
	objs.obj849=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pire, il grimperait sur l’un des troncs ',true); layers.text.addObject(objs.obj849);
	objs.obj850=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'centenaires.',true); layers.text.addObject(objs.obj850);
	objs.obj851=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il se précipita dans le bosquet. Les ',true); layers.text.addObject(objs.obj851);
	objs.obj852=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'branches basses fouettèrent son ',true); layers.text.addObject(objs.obj852);
	objs.obj853=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'visage, lui arrachant des larmes.',true); layers.text.addObject(objs.obj853);
	objs.obj854=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Mais il était presque à l’abri : ',true); layers.text.addObject(objs.obj854);
	objs.obj855=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'l’obscurité était totale.',true); layers.text.addObject(objs.obj855);
	objs.obj856=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il ignorait vers quoi il courait mais il ',true); layers.text.addObject(objs.obj856);
	objs.obj857=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'s’en fichait.',true); layers.text.addObject(objs.obj857);
	objs.obj858=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il accéléra encore et… s’effondra ',true); layers.text.addObject(objs.obj858);
	objs.obj859=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'brutalement, le souffle coupé, une ',true); layers.text.addObject(objs.obj859);
	objs.obj860=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'violente douleur barrant sa poitrine. Il ',true); layers.text.addObject(objs.obj860);
	objs.obj861=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'venait de heurter quelque chose de ',true); layers.text.addObject(objs.obj861);
	objs.obj862=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'plein fouet.',true); layers.text.addObject(objs.obj862);
	objs.obj863=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Abasourdi, Simon fouilla l’obscurité. ',true); layers.text.addObject(objs.obj863);
	objs.obj864=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il entendait ses poursuivants battre les ',true); layers.text.addObject(objs.obj864);
	objs.obj865=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'talus et les fourrés.',true); layers.text.addObject(objs.obj865);
	objs.obj866=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il tâtonna un instant dans son sac.',true); layers.text.addObject(objs.obj866);
	objs.obj867=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Sa torche.',true); layers.text.addObject(objs.obj867);
	objs.obj868=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Un faible halo de lumière.',true); layers.text.addObject(objs.obj868);
	objs.obj869=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Un grillage.',true); layers.text.addObject(objs.obj869);
	objs.obj955=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj955);
	objs.obj870=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Piégé !',true); layers.text.addObject(objs.obj870);
	objs.obj956=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj956);
	objs.obj871=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il se redressa en grimaçant, ',true); layers.text.addObject(objs.obj871);
	objs.obj872=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'s’approcha.',true); layers.text.addObject(objs.obj872);
	objs.obj873=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Une dizaine de mètres en contrebas, ',true); layers.text.addObject(objs.obj873);
	objs.obj874=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'le faisceau de sa lampe illumina les ',true); layers.text.addObject(objs.obj874);
	objs.obj875=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'reliefs mangés de rouille d’une ligne ',true); layers.text.addObject(objs.obj875);
	objs.obj876=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'de chemin de fer abandonnée.',true); layers.text.addObject(objs.obj876);
	objs.obj877=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'La Petite Ceinture.',true);
	objs.obj877.addLink(new mse.Link('La Petite Ceinture',177,'wiki',wikis.pCeinture)); layers.text.addObject(objs.obj877);
	objs.obj878=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Un éclat de voix derrière lui le fit ',true); layers.text.addObject(objs.obj878);
	objs.obj879=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'sursauter.',true); layers.text.addObject(objs.obj879);
	objs.src42=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'unknown', 'src41' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src42);
	objs.obj962=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'On le tient !',true);
	objs.src42.addObject(objs.obj962);
	objs.obj881=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon fixa le puits de ténèbres qui ',true); layers.text.addObject(objs.obj881);
	objs.obj882=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'s’étendait au-delà du grillage.',true); layers.text.addObject(objs.obj882);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj963=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Alors, t’es enfin prêt à recevoir ',true);
	objs.src40.addObject(objs.obj963);
	objs.obj964=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'ta leçon ?',true);
	objs.src40.addObject(objs.obj964);
	objs.obj885=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Kevin s’approcha dans la clarté de la ',true); layers.text.addObject(objs.obj885);
	objs.obj886=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'lune. Il tendit le bras. Un bruit de ',true); layers.text.addObject(objs.obj886);
	objs.obj887=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'ressort. Une lame apparut au bout de ',true); layers.text.addObject(objs.obj887);
	objs.obj888=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'sa main.',true); layers.text.addObject(objs.obj888);
	objs.obj889=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'L’adolescent sentait le sang battre ',true);
	objs.obj889.addLink(new mse.Link('battre',188,'audio',mse.src.getSrc('heart'))); layers.text.addObject(objs.obj889);
	objs.obj890=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'contre ses tempes, l’adrénaline ',true); layers.text.addObject(objs.obj890);
	objs.obj891=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'inonder son corps. Il voulait gagner ',true); layers.text.addObject(objs.obj891);
	objs.obj892=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'du temps pour récupérer. Pour tenter ',true); layers.text.addObject(objs.obj892);
	objs.obj893=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'quelque chose.',true); layers.text.addObject(objs.obj893);
	objs.obj894=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il se retourna face à ses adversaires.',true); layers.text.addObject(objs.obj894);
	objs.src38=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'simon', 'src66' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src38);
	objs.obj965=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Je n’ai fait que défendre Rachel. ',true);
	objs.src38.addObject(objs.obj965);
	objs.obj966=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Vous n’aviez pas le droit de ',true);
	objs.src38.addObject(objs.obj966);
	objs.obj968=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'vous en prendre à elle.',true);
	objs.src38.addObject(objs.obj968);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj969=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'T’avais qu’à pas te mêler de ',true);
	objs.src40.addObject(objs.obj969);
	objs.obj970=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'nos affaires.',true);
	objs.src40.addObject(objs.obj970);
	objs.src38=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'simon', 'src66' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src38);
	objs.obj971=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Quatre contre un, vous n’êtes ',true);
	objs.src38.addObject(objs.obj971);
	objs.obj972=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'que des lâches !',true);
	objs.src38.addObject(objs.obj972);
	objs.obj902=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon avait lancé ça tout en jetant un ',true); layers.text.addObject(objs.obj902);
	objs.obj903=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'bref coup d’œil autour de lui. Il avait ',true); layers.text.addObject(objs.obj903);
	objs.obj904=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'aperçu la grosse pierre au pied du ',true); layers.text.addObject(objs.obj904);
	objs.obj905=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'grillage. Un bon tremplin…',true); layers.text.addObject(objs.obj905);
	objs.obj906=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Kevin fulminait.',true); layers.text.addObject(objs.obj906);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj973=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Amenez-le-moi !',true);
	objs.src40.addObject(objs.obj973);
	objs.obj908=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Les trois autres s’élancèrent. Mais, ',true); layers.text.addObject(objs.obj908);
	objs.obj909=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'juste avant que leurs mains ne se ',true); layers.text.addObject(objs.obj909);
	objs.obj910=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'referment sur lui, il s’était jeté sur le ',true); layers.text.addObject(objs.obj910);
	objs.obj911=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'côté. D’une roulade il avait atteint la ',true); layers.text.addObject(objs.obj911);
	objs.obj912=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'pierre. Il se redressa d’un bond, prit ',true); layers.text.addObject(objs.obj912);
	objs.obj913=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'appui sur le rocher et entreprit ',true); layers.text.addObject(objs.obj913);
	objs.obj914=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'l’escalade du grillage.',true); layers.text.addObject(objs.obj914);
	objs.src40=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'kevin', 'src35' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src40);
	objs.obj974=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Il va s’échapper ! Faites ',true);
	objs.src40.addObject(objs.obj974);
	objs.obj975=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'quelque chose !',true);
	objs.src40.addObject(objs.obj975);
	objs.src42=new mse.Speaker( layers.text,{"size":[mse.coor('cid13'),mse.coor('cid2')]}, 'unknown', 'src41' , mse.coor(mse.joinCoor(45)) , '#f99200' ); layers.text.addObject(objs.src42);
	objs.obj976=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'Mais… Il ne peut pas aller loin, ',true);
	objs.src42.addObject(objs.obj976);
	objs.obj977=new mse.Text(layers.text,{"size":[mse.coor('cid14'),mse.coor('cid11')]},'il n’y a rien après.',true);
	objs.src42.addObject(objs.obj977);
	objs.obj978=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj978);
	objs.obj982=games.FindSimon; layers.text.addGame(objs.obj982);
	objs.obj980=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj980);
	objs.obj979=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'C’était vrai.',true); layers.text.addObject(objs.obj979);
	objs.obj920=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Il n’y avait plus rien. Rien d’autre ',true); layers.text.addObject(objs.obj920);
	objs.obj921=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'qu’un énorme trou de ténèbres.',true); layers.text.addObject(objs.obj921);
	objs.obj922=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Mais il était trop tard pour reculer.',true); layers.text.addObject(objs.obj922);
	objs.obj923=new mse.Text(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]},'Simon s’élança dans le vide.',true); layers.text.addObject(objs.obj923);
	objs.obj958=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj958);
	objs.obj959=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj959);
	objs.obj960=new mse.Text(layers.text,{"size":[mse.coor('cid13'),mse.coor('cid11')],"pos":[mse.coor('cid2'),mse.coor('cid21')],"fillStyle":"rgb(255, 255, 255)","globalAlpha":1,"font":"normal "+mse.coor('cid10')+"px Gudea","textAlign":"center"},'À SUIVRE...',true); layers.text.addObject(objs.obj960);
	objs.obj961=new mse.UIObject(layers.text,{"size":[mse.coor('cid12'),mse.coor('cid11')]}); layers.text.addObject(objs.obj961);
	layers.text.setDefile(1300);
	temp.layerDefile=layers.text;
	pages.Content.addLayer('text',layers.text);
	temp.obj=new mse.Mask(null,{'pos':[mse.coor('cid2'),mse.coor('cid2')],'size':[mse.coor('cid0'),mse.coor('cid1')],'fillStyle':'rgb(255, 255, 255)'});
	animes.fouine.addObj('obj567',temp.obj);
	temp.obj=new mse.Image(null,{'pos':[mse.coor('cid22'),mse.coor('cid23')],'size':[mse.coor('cid24'),mse.coor('cid25')]},'src0');
	animes.fouine.addObj('src0',temp.obj);
	animes.fouine.addAnimation('obj567',{'frame':JSON.parse('[0,1,9,15,21,22]'),'opacity':JSON.parse('[1,0,1,1,0,0]')});
	animes.fouine.addAnimation('src0',{'frame':JSON.parse('[0,1,9,15,21,22]'),'opacity':JSON.parse('[1,0,1,1,0,0]'),'pos':[[mse.coor('cid22'),mse.coor('cid23')],[mse.coor('cid22'),mse.coor('cid23')],[mse.coor('cid22'),mse.coor('cid23')],[mse.coor('cid22'),mse.coor('cid23')],[mse.coor('cid2'),mse.coor('cid26')],[mse.coor('cid2'),mse.coor('cid26')]],'size':[[mse.coor('cid24'),mse.coor('cid25')],[mse.coor('cid24'),mse.coor('cid25')],[mse.coor('cid24'),mse.coor('cid25')],[mse.coor('cid24'),mse.coor('cid25')],[mse.coor('cid0'),mse.coor('cid27')],[mse.coor('cid0'),mse.coor('cid27')]]});
	animes.titleshow.addObj('obj13',objs.obj13);
	animes.titleshow.addAnimation('obj13',{'frame':JSON.parse('[0,75,88,101]'),'opacity':JSON.parse('[0,0,1,1]')});
	animes.chashow.addObj('obj14',objs.obj14);
	animes.chashow.addAnimation('obj14',{'frame':JSON.parse('[0,75,88,101]'),'opacity':JSON.parse('[0,0,1,1]')});
	temp.obj=new mse.Image(null,{'pos':[mse.coor('cid2'),mse.coor('cid2')],'size':[mse.coor('cid0'),mse.coor('cid1')]},'grillageimg');
	animes.piege.addObj('grillageimg',temp.obj);
	temp.obj=new mse.Text(null,{'pos':[mse.coor('cid38'),mse.coor('cid39')],'size':[mse.coor('cid40'),mse.coor('cid24')],'fillStyle':'rgb(255, 255, 255)','textBaseline':'top','font':'normal '+mse.coor('cid37')+'px Verdana','textAlign':'left'},'Piégé!!!',true);
	animes.piege.addObj('obj587',temp.obj);
	animes.piege.addAnimation('grillageimg',{'frame':JSON.parse('[0,6,22,25,44,50,51]'),'opacity':JSON.parse('[0,1,1,1,1,0,0]')});
	animes.piege.addAnimation('obj587',{'frame':JSON.parse('[0,6,22,25,44,50,51]'),'fontSize':[mse.coor('cid37'),mse.coor('cid37'),mse.coor('cid41'),mse.coor('cid44'),mse.coor('cid44'),mse.coor('cid44'),mse.coor('cid44')],'pos':[[mse.coor('cid38'),mse.coor('cid39')],[mse.coor('cid38'),mse.coor('cid39')],[mse.coor('cid42'),mse.coor('cid43')],[mse.coor('cid45'),mse.coor('cid46')],[mse.coor('cid45'),mse.coor('cid46')],[mse.coor('cid45'),mse.coor('cid46')],[mse.coor('cid45'),mse.coor('cid46')]],'opacity':JSON.parse('[0,0,0.699999988079,1,1,0,0]')});
	animes.maskAnime.addObj('obj710',objs.obj710);
	animes.maskAnime.addAnimation('obj710',{'frame':JSON.parse('[0,75,88,89]'),'opacity':JSON.parse('[0,0,0.80000001192093,0.80000001192093]')});
	animes.quarantAnime.addObj('obj828',objs.obj828);
	animes.quarantAnime.addAnimation('obj828',{'frame':JSON.parse('[0,13,26,27]'),'fontSize':[mse.coor('cid48'),mse.coor('cid51'),mse.coor('cid48'),mse.coor('cid48')]});
	animes.trentAnime.addObj('obj833',objs.obj833);
	animes.trentAnime.addAnimation('obj833',{'frame':JSON.parse('[0,13,26,27]'),'fontSize':[mse.coor('cid48'),mse.coor('cid23'),mse.coor('cid48'),mse.coor('cid48')]});
	animes.addGrilleBack.addObj('obj957',objs.obj957);
	animes.addGrilleBack.addAnimation('obj957',{'frame':JSON.parse('[0,1,2]'),'opacity':JSON.parse('[0,1,1]')});
	animes.textAnime.addObj('obj178',objs.obj178);
	animes.textAnime.addAnimation('obj178',{'frame':JSON.parse('[0,8,14,15]'),'fontSize':[mse.coor('cid48'),mse.coor('cid56'),mse.coor('cid48'),mse.coor('cid48')]});
	animes.trenteAnime.addObj('obj183',objs.obj183);
	animes.trenteAnime.addAnimation('obj183',{'frame':JSON.parse('[0,8,14,15]'),'fontSize':[mse.coor('cid48'),mse.coor('cid56'),mse.coor('cid48'),mse.coor('cid48')]});
	temp.obj=new mse.Sprite(null,{'pos':[mse.coor('cid58'),mse.coor('cid47')],'size':[mse.coor('cid59'),mse.coor('cid60')]},'src65',420,414, 0,0,1260,828);
	animes.simcour2.addObj('src65',temp.obj);
	animes.simcour2.addAnimation('src65',{'frame':JSON.parse('[0,4,8,12,16,20,24,28,32,36,40,44,45]'),'spriteSeq':JSON.parse('[3,4,0,1,2,3,4,0,1,2,3,3,3]'),'pos':[[mse.coor('cid58'),mse.coor('cid47')],[mse.coor('cid61'),mse.coor('cid47')],[mse.coor('cid4'),mse.coor('cid47')],[mse.coor('cid37'),mse.coor('cid47')],[mse.coor('cid62'),mse.coor('cid47')],[mse.coor('cid63'),mse.coor('cid47')],[mse.coor('cid33'),mse.coor('cid47')],[mse.coor('cid64'),mse.coor('cid47')],[mse.coor('cid65'),mse.coor('cid47')],[mse.coor('cid3'),mse.coor('cid47')],[mse.coor('cid66'),mse.coor('cid47')],[mse.coor('cid66'),mse.coor('cid47')],[mse.coor('cid66'),mse.coor('cid47')]],'opacity':JSON.parse('[1,1,1,1,1,1,1,1,1,1,0.5,0,0]')});
	var action={};
	var reaction={};

	action.addTextEffet=new mse.Script([{src:pages.Content,type:'show'}]);
	reaction.addTextEffet=function(){ 
		function textEffect(effet,obj) {
	obj.startEffect(effet);
}
for(var i = 0; i < layers.text.objList.length; i++){
	var objCible = layers.text.getObject(i);
	if(objCible instanceof mse.Text){
	    objCible.evtDeleg.addListener('firstShow', new mse.Callback(textEffect, null, {"typewriter":{}}, objCible));
	}
} 
	};
	action.addTextEffet.register(reaction.addTextEffet);
	action.showFouine=new mse.Script([{src:objs.obj739,type:'firstShow'}]);
	reaction.showFouine=function(){ 
		animes.fouine.start(); 
	};
	action.showFouine.register(reaction.showFouine);
	action.changeBack=new mse.Script([{src:objs.obj795,type:'firstShow'}]);
	reaction.changeBack=function(){ 
		temp.width=objs.obj708.getWidth();temp.height=objs.obj708.getHeight();temp.boundingbox=imgBoundingInBox('src46',temp.width,temp.height);temp.obj=new mse.Image(objs.obj708.parent,temp.boundingbox,'src46');mse.transition(objs.obj708,temp.obj,25); 
	};
	action.changeBack.register(reaction.changeBack);
	action.start40Anime=new mse.Script([{src:objs.obj828,type:'firstShow'}]);
	reaction.start40Anime=function(){ 
		animes.quarantAnime.start(); 
	};
	action.start40Anime.register(reaction.start40Anime);
	action.start30Anime=new mse.Script([{src:objs.obj833,type:'firstShow'}]);
	reaction.start30Anime=function(){ 
		animes.trentAnime.start(); 
	};
	action.start30Anime.register(reaction.start30Anime);
	action.startPiege=new mse.Script([{src:objs.obj870,type:'firstShow'}]);
	reaction.startPiege=function(){ 
		animes.piege.start(); 
	};
	action.startPiege.register(reaction.startPiege);
	action.startPiegeSon=action.startPiege;
	reaction.startPiegeSon=function(){ 
		mse.src.getSrc('piegeson').play(); 
	};
	action.startPiegeSon.register(reaction.startPiegeSon);
	action.addGrilleBackSc=new mse.Script([{src:animes.piege,type:'end'}]);
	reaction.addGrilleBackSc=function(){ 
		animes.addGrilleBack.start(); 
	};
	action.addGrilleBackSc.register(reaction.addGrilleBackSc);
	action.addCouteauAnimeSc=action.addTextEffet;
	reaction.addCouteauAnimeSc=function(){ 
		// Couteau
mse.src.addSource('cran', 'images/cran.png', 'img', false);
mse.src.addSource('audCran', 'audios/cran', 'aud', false);

var mx = (mse.coor('cid0')-51)/2, my = (mse.coor('cid1')-350)/2+140;
var manche = new mse.Sprite(null, {}, 'cran', 51,210, 0,0,51,210);
var lame = new mse.Sprite(null, {pos:[-12,-127]}, 'cran', 25,196, 51,0,25,139);
var couteau = new mse.UIObject(null, {});
couteau.count = 0; couteau.angle = -180;
couteau.draw = function(ctx){
    if(this.count == 10) mse.src.getSrc('audCran').play();
    if(this.count >= 10 && this.count <= 14)
    	this.angle = -180 + (this.count-10) * 180/4;
    this.count++;
    
	ctx.save();
	ctx.globalAlpha = this.globalAlpha;
	// Origin of rotation: point on the top of manche
	ctx.translate(mx+24,my+16);
	// Rotation of the lame
	ctx.rotate(this.angle * Math.PI / 180);
	lame.draw(ctx);
	// Draw Manche
	ctx.rotate(-this.angle * Math.PI / 180);
	ctx.translate(-24,-16);
	manche.draw(ctx);
	ctx.restore();
};

animes.couteau=new mse.Animation(36,1,true);
animes.couteau.block=true;
animes.couteau.addObj('couteau',couteau);
animes.couteau.addAnimation('couteau', {
		frame	: [0, 6, 30, 36],
		opacity	: [0, 1, 1,  0]
	});

action.showCouteau=new mse.Script([{src:objs.obj888,type:'firstShow'}]);
reaction.showCouteau=function(){ animes.couteau.start(); };
action.showCouteau.register(reaction.showCouteau) 
	};
	action.addCouteauAnimeSc.register(reaction.addCouteauAnimeSc);
	action.startRatGame=new mse.Script([{src:objs.obj759,type:'firstShow'}]);
	reaction.startRatGame=function(){ 
		games.RatGame.start(); 
	};
	action.startRatGame.register(reaction.startRatGame);
	action.playKevinSpeak_click=new mse.Script([{src:objs.obj924,type:'click'}]);
	reaction.playKevinSpeak_click=function(){ 
		mse.src.getSrc('kevinSpeak').play(); 
	};
	action.playKevinSpeak_click.register(reaction.playKevinSpeak_click);
	action.playKevinSpeak_show=new mse.Script([{src:objs.obj924,type:'firstShow'}]);
	reaction.playKevinSpeak_show=function(){ 
		mse.src.getSrc('kevinSpeak').play(); 
	};
	action.playKevinSpeak_show.register(reaction.playKevinSpeak_show);
	action.playWoosh=new mse.Script([{src:animes.fouine,type:'start'}]);
	reaction.playWoosh=function(){ 
		mse.src.getSrc('woosh').play(); 
	};
	action.playWoosh.register(reaction.playWoosh);
	action.playIlestla_clic=new mse.Script([{src:objs.obj934,type:'click'}]);
	reaction.playIlestla_clic=function(){ 
		mse.src.getSrc('ilestla').play(); 
	};
	action.playIlestla_clic.register(reaction.playIlestla_clic);
	action.playIlestla_show=new mse.Script([{src:objs.obj934,type:'firstShow'}]);
	reaction.playIlestla_show=function(){ 
		mse.src.getSrc('ilestla').play(); 
	};
	action.playIlestla_show.register(reaction.playIlestla_show);
	action.playRestartRun_clic=new mse.Script([{src:objs.obj954,type:'click'}]);
	reaction.playRestartRun_clic=function(){ 
		mse.src.getSrc('restartrun').play(); 
	};
	action.playRestartRun_clic.register(reaction.playRestartRun_clic);
	action.playRestartRun_show=new mse.Script([{src:objs.obj954,type:'firstShow'}]);
	reaction.playRestartRun_show=function(){ 
		mse.src.getSrc('restartrun').play(); 
	};
	action.playRestartRun_show.register(reaction.playRestartRun_show);
	action.playOnletien_clic=new mse.Script([{src:objs.obj962,type:'click'}]);
	reaction.playOnletien_clic=function(){ 
		mse.src.getSrc('onletien').play(); 
	};
	action.playOnletien_clic.register(reaction.playOnletien_clic);
	action.playOnletien_show=new mse.Script([{src:objs.obj962,type:'firstShow'}]);
	reaction.playOnletien_show=function(){ 
		mse.src.getSrc('onletien').play(); 
	};
	action.playOnletien_show.register(reaction.playOnletien_show);
	action.playIntroEnd=new mse.Script([{src:objs.obj960,type:'firstShow'}]);
	reaction.playIntroEnd=function(){ 
		mse.src.getSrc('intro').play(); 
	};
	action.playIntroEnd.register(reaction.playIntroEnd);
	action.startSimCour=new mse.Script([{src:objs.obj764,type:'firstShow'}]);
	reaction.startSimCour=function(){ 
		animes.simcour2.start(); 
	};
	action.startSimCour.register(reaction.startSimCour);
	action.startSonNuit=new mse.Script([{src:objs.obj726,type:'firstShow'}]);
	reaction.startSonNuit=function(){ 
		mse.src.getSrc('villenuit').play(); 
	};
	action.startSonNuit.register(reaction.startSonNuit);
	action.startHeartbeat=action.addTextEffet;
	reaction.startHeartbeat=function(){ 
	    if(MseConfig.iPhone || MseConfig.android) return;
		var lines = [
    objs.obj994,
    objs.obj713,
    objs.obj714,
    objs.obj715,
    objs.obj716,
    objs.obj717,
    objs.obj718,
    objs.obj719,
    objs.obj720,
    objs.obj721,
    objs.obj722,
    objs.obj723,
    objs.obj724,
    objs.obj725
]

function textEffect(effet,obj) {
    obj.startEffect(effet);
}
for(var i = 0; i < lines.length; i++){
    var objCible = lines[i];
    if(objCible instanceof mse.Text){
        objCible.evtDeleg.addListener('firstShow', new mse.Callback(textEffect, null, {"twistmultitext":{'height':mse.coor(mse.joinCoor(23)), 'variation':6}}, objCible));
    }
}

mse.src.getSrc('heartbeat').loop = true;
mse.src.getSrc('heartbeat').play(); 
	};
	action.startHeartbeat.register(reaction.startHeartbeat);
	action.stopHeartBeat=action.startSonNuit;
	reaction.stopHeartBeat=function(){ 
	    if(MseConfig.iPhone || MseConfig.android) return;
		var lines = [
    objs.obj994,
    objs.obj713,
    objs.obj714,
    objs.obj715,
    objs.obj716,
    objs.obj717,
    objs.obj718,
    objs.obj719,
    objs.obj720,
    objs.obj721,
    objs.obj722,
    objs.obj723,
    objs.obj724,
    objs.obj725
]

for(var i = 0; i < lines.length; i++){
    lines[i].endEffect();
}

mse.src.getSrc('heartbeat').pause(); 
	};
	action.stopHeartBeat.register(reaction.stopHeartBeat);
	mse.currTimeline.start();};
mse.autoFitToWindow(function(){
	mse.init(null, 'Voodoo_Ch1',mse.coor('cid0'),mse.coor('cid1'),'portrait');
	$(document).ready(createbook);
});