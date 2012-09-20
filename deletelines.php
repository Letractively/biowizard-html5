<?php
session_start();

$delitem = $_GET['delitem'];

$list = array();
$bound = count($_SESSION['ArticleList']->return);

for($i = 0; $i<count($delitem);$i++)
	echo $delitem[$i].'\n';


$i=0;
while($i<count($delitem)){
	for($j = 0 ;$j < $bound; $j++){
			if(isset($_SESSION['ArticleList']->return[$j]) && $delitem[$i] ==  $_SESSION['ArticleList']->return[$j]->id){
			 echo("devo cancellare".$delitem[$i]);
			 unset($_SESSION['ArticleList']->return[$j]);break;		
		}
		
	}	
	$i++;
}

for($i=0; $i<$bound; $i++)
	if(isset($_SESSION['ArticleList']->return[$i]))
		$list[] = $_SESSION['ArticleList']->return[$i];
		
		
$_SESSION['ArticleList']->return=$list;

?>