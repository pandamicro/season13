<?php

return array(

    // Error codes while request the access to a story
	'story_access' => array(
	    101 => "L'épisode est indisponible pour le moment.",
	    102 => "Aucun épisode n'était demandé",
	    103 => "L'épisode n'existe pas ou elle est indisponible.",
	    201 => "Tu dois te connecter ou t'inscrire sur SEASON13.com.",
	    303 => "",
	    304 => "",
	    'default' => "L'épisode n'existe pas ou elle est indisponible.",
	),
	
	// Error codes while upload a file
	'upload' => array(
	    1101 => "Fichier n'existe pas",
	    1102 => "La configuration de téléchargement n'est pas valide",
	    1199 => "Erreur inconnu",
	    1201 => "Echec à enregisterer le téléchargement",
	),
	
	// Error codes while request to reset a pasword
	'change_pass' => array(
	    2101 => "Adresse email erronée !",
	    2102 => "Nous n'avons pas d'utilisateur avec cette adresse !",
	),
);