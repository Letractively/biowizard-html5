<?	
	$getProteinResponse = new stdClass();
	session_start();
    $n = utf8_encode($_GET['nome']);
	$f=($_GET['fields']);
	$cs=($_GET['checkSearch']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	
	$getProteins = new stdClass();
	$getProteins->retmax = $sMax;
	$getProteins->query = $n;
	$getProteins->retstart = $sMin;
	
	$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");
	
	if($c == 'true' || !isset($_SESSION['ProteinList'])){
		$getProteinResponse = ($client->getProteins($getProteins));
	if((count(@$getProteinResponse->return)) != 0){
		$_SESSION['ProteinList'] = $getProteinResponse;
		echo count($_SESSION['ProteinList']->return);
	}
	else
		echo count(@$getProteinResponse->return);
				
	}
	else{
 	
		$list = @$client->getProteins($getProteins)->return;
		if(count($list)!= 0)
			$_SESSION['ProteinList']->return=array_merge($_SESSION['ProteinList']->return,$list);  
		echo count($_SESSION['ProteinList']->return);

	}

?>