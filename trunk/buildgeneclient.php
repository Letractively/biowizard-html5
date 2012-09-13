<?
    $getGeneResponse = new stdClass();
	session_start();
	$n = utf8_encode($_GET['nome']);
	$o =($_GET['organism']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	
	
	$getGenes = new stdClass();
	$getGenes->retmax = $sMax;
	$getGenes->query = $n;
	$getGenes->retstart = $sMin;
	
	
	$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");
	
	if($cd == 'true' || !isset($_SESSION['GeneList'])){
		$getGeneResponse = ($client->getGenes($getGenes));
	if((count(@$getGeneResponse->return)) != 0){
		$_SESSION['GeneList'] = $getGeneResponse;
		echo count($_SESSION['GeneList']->return);
	}
	else
		echo count(@$getGeneResponse->return);
				
	}
	else{
 	
		$list = @$client->getGenes($getGenes)->return;
		if(count($list)!= 0)
			$_SESSION['GeneList']->return=array_merge($_SESSION['GeneList']->return,$list);  
		echo count($_SESSION['GeneList']->return);

	}
	
	
?>