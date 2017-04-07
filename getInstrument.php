<?php

$db = json_decode(file_get_contents('dbInstrument.json'));

if(isset($_GET['idInstrument']))
	$instrument = $_GET['idInstrument'];
//echo "<pre>";var_dump(json_decode($db));echo "</pre>";

if(isset($instrument)){
	foreach($db->instruments as $singleInstrument){
		if($singleInstrument->id === $instrument)
			echo json_encode($singleInstrument);
	}
}

?>