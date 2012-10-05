<?php
$getGeneResponse = new stdClass();
session_start();
$n    = utf8_encode($_GET['nome']);
$o    = ($_GET['organism']);
$cd   = ($_GET['checkData']);
$cs   = $_GET['checkSearch'];
$sMin = ($_GET['sMin']);
$sMax = ($_GET['sMax']);


$getGenes           = new stdClass();
$getGenes->retmax   = $sMax;
$getGenes->query    = $n;
$getGenes->retstart = $sMin;


$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");

if ($cd == 'true' || !isset($_SESSION['GeneList'])) {
    if ($cs == 'true') {
        $getGeneResponse  = ($client->getGenes($getGenes));
        $getGenes->alist  = $_SESSION['ArticleList']->return;
        $getGeneResponse2 = ($client->getGenesFromArticles($getGenes));
        if ($getGeneResponse2->return != null){
			if(is_array($getGeneResponse2->return))
            	$getGeneResponse->return = array_merge($getGeneResponse->return, $getGeneResponse2->return);
			else 
			    $getGeneResponse->return[] = $getGeneResponse2->return;
		}
    } else
        $getGeneResponse = ($client->getGenes($getGenes));
    if ((count(@$getGeneResponse->return)) != 0) {
        $_SESSION['GeneList'] = $getGeneResponse;
        echo count($_SESSION['GeneList']->return);
    } else
        echo count(@$getGeneResponse->return);
    
} else {
    if ($cs == 'true') {
        $list            = $client->getGenes($getGenes)->return;
        $getGenes->alist = $_SESSION['ArticleList']->return;
        $listtmp         = @$client->getGenesFromArticles($getGenes)->return;
        if ($listtmp != null)
			if(is_array($listtmp))
            	$list = array_merge($list, $listtmp);
			else $list[] = $listtmp;
    } else
        $list = @$client->getGenes($getGenes)->return;
    if (count($list) != 0)
        $_SESSION['GeneList']->return = array_merge($_SESSION['GeneList']->return, $list);
    
    echo count($_SESSION['GeneList']->return);
    
}


?>
