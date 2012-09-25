<?php
@session_start();
$client = $_SESSION['clientclustering'];
if(!isset($_GET['whichDict']))
	$whichDict = 'first';
	else $whichDict = $_GET['whichDict'];
	
if(!isset($_GET['threshold']))
	$threshold = 0.75;
	else $threshold = $_GET['threshold'];
	
	if($_SESSION['associationResponse']->return){
		$allfeatureParameters = new stdClass();
		$allfeatureParameters->whichDict = $whichDict;
		$allfeatureParameters->threshold = $threshold;
		$allfeatureResponse = $client->getAllFeatures($allfeatureParameters);
		echo json_encode($allfeatureResponse->return);
	}	
	else echo 'failed';
?>	
		
 
 
 
 
 
		