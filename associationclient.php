<?
	$type = $_GET['type'];
	$VectorSpaceModelThreashold = $_GET['vsmt'];
	$ClusterNumber =$_GET['clusternumber'];
	$iterationnumber = $_GET['iterationnumber'];
	$clusteringAlgorithm= $_GET['calghorithm'];
	$associationResponse = new stdClass();
	$associationParameters = new stdClass();
	if($clusteringAlgorithm == 'K-Means')
		$clusteringAlgorithm = 'KMeans';
	else
		$clusteringAlgorithm = 'Hierarchical';	
	
	session_start();   
	
	$client = new SoapClient("http://localhost:8080/BioWizard-ws/ClusteringWS?wsdl");
	
	$associationParameters->articleList = $_SESSION['ArticleList']->return;
	$associationParameters->vectorModelThreshold = $VectorSpaceModelThreashold;
	$associationParameters->iterations = $iterationnumber;
	$associationParameters->count = $ClusterNumber;
	$associationParameters->algorithm = $clusteringAlgorithm;
	if($type == 'disgentype'){	
		$associationParameters->diseaseDict = $_SESSION['DiseaseList']->return;
		$associationParameters->geneDict = $_SESSION['GeneList']->return;	
		$associationResponse=$client->clusteringDataDG($associationParameters);
	}
	if($type == 'proprotype'){	
		$associationParameters->proteinDict = $_SESSION['ProteinList']->return;	
		echo 'propro';
		$associationResponse=$client->clusteringDataPP($associationParameters);
	}
	if($type == 'gengentype'){	
		$associationParameters->geneDict = $_SESSION['GeneList']->return;	
		$associationResponse=$client->clusteringDataGG($associationParameters);
	}
	if($type == 'disprotype'){	
		$associationParameters->diseaseDict = $_SESSION['DiseaseList']->return;
		$associationParameters->proteinDict = $_SESSION['ProteinList']->return;	
		$associationResponse=$client->clusteringDataDP($associationParameters);
	}	
	$_SESSION['associationResponse'] = $associationResponse;
	$_SESSION['clientclustering'] = $client;
	include_once("clusteringinspector.php");
?>