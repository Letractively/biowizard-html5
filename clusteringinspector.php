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
		
		
		
		$j=0;
		for($i=0;$i<$bound;$i++)
			if(isset($results[$i]->featureList)){
					$finalresults[$j] = $results[$i];	
					$finalresults[$j]->name = $localdict[$i]->name;
					$j++;		
				}
		echo json_encode($finalresults);			
	
	}	
	else echo 'failed';
?>	
		
 
 
 
 
 
		