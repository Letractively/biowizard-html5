<?php
session_start();
$client = new SoapClient("http://localhost:8080/BioWizard-ws/ClusteringWS?wsdl");
$client->__setCookie('JSESSIONID',$_SESSION['clientcookieid']);
$getClusterDocumentspar = new stdClass();
$getClusterDocumentspar->whichDict = $_SESSION['whichDict'];
$getClusterDocumentsresponse = $client->getClusterDocuments($getClusterDocumentspar);
echo json_encode($getClusterDocumentsresponse->return);
var_dump($getClusterDocumentsresponse->return);
?>