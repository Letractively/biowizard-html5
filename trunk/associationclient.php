<?	
	$associationResponse = new stdClass();
	$associationParameters = new stdClass();
	session_start();   
	$associationParameters->articleList = $_SESSION['ArticleList']->return;
	$associationParameters->diseaseDict = $_SESSION['DiseaseList']->return;
	$associationParameters->geneDict = $_SESSION['GeneList']->return; 
	$associationParameters->vectorModelThreshold = 0.0001;
	$associationParameters->iterations = 150;
	$associationParameters->count = 25;
	$associationParameters->algorithm = 'KMeans';
	$par2 = new stdClass();
	$par2->threshold = 0.46;
	$client = new SoapClient("http://localhost:8080/BioWizard-ws/ClusteringWS?wsdl");
	$associationResponse=$client->clusteringDataDG($associationParameters);
	//$ret2 = $client->getAssociationsFound($par2);
	if($associationResponse->return){
		
		$allfeatureParameters = new stdClass();
		
		$allfeatureParameters->whichDict='first';
		$allfeatureParameters->threshold=0.46;
		$allfeatureResponse = $client->getAllFeatures($allfeatureParameters);
		echo(count($allfeatureResponse->return));
		echo($allfeatureResponse->return[0]->entryID);
		var_dump($allfeatureResponse->return[0]);
		echo($allfeatureResponse->return[0]->entryID);
		
	}
?>