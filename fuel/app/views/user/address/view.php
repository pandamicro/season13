<h2>Adresse</h2>

<p>
	<strong>Prénom :</strong>
	<?php echo $user_address->firstname; ?>
</p>
<p>
	<strong>Nom :</strong>
	<?php echo $user_address->lastname; ?>
</p>
<p>
	<strong>Adresse :</strong>
	<?php echo $user_address->address; ?>
</p>
<p>
	<strong>Code postal :</strong>
	<?php echo $user_address->postcode; ?>
</p>
<p>
	<strong>Ville :</strong>
	<?php echo $user_address->city; ?>
</p>
<p>
	<strong>Pays :</strong>
	<?php echo Config::get("currencies." .$user_address->country_code. ".name"); ?>
</p>
<p>
	<strong>Téléphone :</strong>
	<?php echo $user_address->tel; ?>
</p>

<?php echo Html::anchor('user/address/edit/'.$user_address->id, '<button>Modifier</button>'); ?>