<?php	


        $getProteinResponse = new stdClass();
	session_start();
    	$n = utf8_encode($_GET['nome']);
	$cs=($_GET['checkSearch']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	$field=($_GET['fields']);
	
	if($field == "All Fields") $field = 0;
	if($field == "Full Text") $field = 1;
	if($field == "Go Term") $field = 2;
	if($field == "Keywords") $field = 3;
	if($field == "Organism") $field = 4;
	if($field == "Protein Name") $field = 5;
	if($field == "ID List") $field = 6;
	
	$getProteins = new stdClass();
	$getProteins->retmax = $sMax;
	$getProteins->query = $n;
	$getProteins->retstart = $sMin;
	$getProteins->searchtype = $field;
	
	$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");	
	if($cd == 'true' || !isset($_SESSION['ProteinList'])){
		if($cs == 'true') {
			$getProteinResponse = ($client->getProteins($getProteins));
			$getProteins->alist = $_SESSION['ArticleList']->return;
			$getProteinResponsetmp = ($client->getProteinsFromArticles($getProteins));
			if($getProteinResponsetmp->return != null)
				if(is_array($getProteinResponsetmp->return))
					$getProteinResponse->return = array_merge($getProteinResponse->return,$getProteinResponsetmp->return); 
				else  $getProteinResponse->return[] = $getProteinResponsetmp->return;
			
		}
		else
		   $getProteinResponse = ($client->getProteins($getProteins));
			

		if((count(@$getProteinResponse->return)) != 0){
			$_SESSION['ProteinList'] = $getProteinResponse;
			echo count($_SESSION['ProteinList']->return);
		}
		else
			echo count($getProteinResponse->return);
		
				
	}
	else{
		
		if($cs == 'true') {		
			$list = $client->getProteins($getProteins)->return;
			$getProteins->alist = $_SESSION['ArticleList']->return;
			$listtmp = @$client->getProteinsFromArticles($getProteins)->return;
			if($listtmp!= null)
				if(is_array($listtmp)
					$list=array_merge($list,$listtmp);
				else $list[] = $listtmp;
			
		}
		else
			$list = @$client->getProteins($getProteins)->return;
		if(count($list)!= 0)
			$_SESSION['ProteinList']->return=array_merge($_SESSION['ProteinList']->return,$list);  
		echo count($_SESSION['ProteinList']->return);

	}

?>
