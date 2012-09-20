<?php
session_start();
$type = $_GET['dictype'];
$delitem = $_GET['delitem'];

$list = array();
$bound = count($_SESSION[$type]->return);

for($i = 0; $i<count($delitem);$i++)
	echo $delitem[$i].'\n';


$i=0;
while($i<count($delitem)){
	for($j = 0 ;$j < $bound; $j++){
			if(isset($_SESSION[$type]->return[$j]) && $delitem[$i] ==  $_SESSION[$type]->return[$j]->id){
			 echo("devo cancellare".$delitem[$i]);
			 unset($_SESSION[$type]->return[$j]);break;		
		}
		
	}	
	$i++;
}

for($i=0; $i<$bound; $i++)
	if(isset($_SESSION[$type]->return[$i]))
		$list[] = $_SESSION[$type]->return[$i];
		
		
$_SESSION[$type]->return=$list;

?>