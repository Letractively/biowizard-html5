<?	
	$getDiseaseResponse = new stdClass();
	session_start();	
    $n = utf8_encode($_GET['nome']);
	$cs=($_GET['checkSearch']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	
	
	$getDiseases = new stdClass();
	$getDiseases->retmax = $sMax;
	$getDiseases->query = $n;
	$getDiseases->retstart = $sMin;
	
    $client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");

	if($cd == 'true' || !isset($_SESSION['DiseaseList'])){
		$getDiseaseResponse = ($client->getDisease($getDiseases));
		if((count(@$getDiseaseResponse->return)) != 0){
			$_SESSION['DiseaseList'] = $getDiseaseResponse;
			echo count($_SESSION['DiseaseList']->return);
		}
		else
			echo count(@$getDiseaseResponse->return);
				
	}
	else{
 	
		$list = @$client->getDisease($getDiseases)->return;
		if(count($list)!= 0)
			$_SESSION['DiseaseList']->return=array_merge($_SESSION['DiseaseList']->return,$list);  
		echo count($_SESSION['DiseaseList']->return);

	}

?>