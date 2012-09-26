<?php
session_start();
$client = new SoapClient("http://localhost:8080/BioWizard-ws/ClusteringWS?wsdl");
$client->__setCookie('JSESSIONID',$_SESSION['clientcookieid']);
$getClusterFeaturespar = new StdClass();
$getClusterFeaturespar->whichDict = $_SESSION['whichDict'];
$getClusterFeaturespar->index = 0;
$getClusterFeaturespar->threshold = $_SESSION['threshold'];
$getClusterFeaturesResponse = $client->getClusterFeatures($getClusterFeaturespar);

echo json_encode($getClusterFeaturesResponse->return);



?>