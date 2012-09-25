<?php
@session_start();



$client = $_SESSION['clientclustering'];
if(!isset($_GET['whichDict']))
	$whichDict = 'first';
	else $whichDict = $_GET['whichDict'];	
	$localdict = $_SESSION[$_SESSION[$whichDict]]->return;
	
	
	
	
if(!isset($_GET['threshold']))
	$threshold = 0.75;
	else $threshold = $_GET['threshold'];
	
	if($_SESSION['associationResponse']->return){
		$allfeatureParameters = new stdClass();
		$allfeatureParameters->whichDict = $whichDict;
		$allfeatureParameters->threshold = $threshold;
		$allfeatureResponse = $client->getAllFeatures($allfeatureParameters);
		
		$results = $allfeatureResponse->return;
		$bound = count($results);
		$finalresults = array();
		
		
		
		
		for($i=0;$i<$bound;$i++)
			if(isset($results[$i]->featureList)){
					$finalresults[$i] = $results[$i];	
					$finalresults[$i]->name = $localdict[$i]->name;		
				}
		echo json_encode($finalresults);			
	
	}	
	else echo 'failed';
?>	
		
 
 
 
 
 
		