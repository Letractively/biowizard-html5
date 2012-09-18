<?php
$type = $_GET['type'];
session_start();
if($type == 'article')
	if(isset($_SESSION['ArticleList']))
		echo json_encode($_SESSION['ArticleList']->return);		

if($type == 'protein')
	if(isset($_SESSION['ProteinList']))
		echo json_encode($_SESSION['ProteinList']->return);		

if($type == 'gene')
	if(isset($_SESSION['GeneList']))
		echo json_encode($_SESSION['GeneList']->return);
		
if($type == 'disease')
	if(isset($_SESSION['DiseaseList']))
		echo json_encode($_SESSION['DiseaseList']->return);		



?>