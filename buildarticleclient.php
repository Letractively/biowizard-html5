<? 
$getArticleResponse = new stdClass();
session_start();
$n = utf8_encode($_GET['nome']);
$c=($_GET['check']);
$sMin=($_GET['sMin']);
$sMax=($_GET['sMax']);

    	
$getArticles = new stdClass();
$getArticles->retmax = $sMax;
$getArticles->query = $n;
$getArticles->retstart = $sMin;


$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");

if($c == 'true' || !isset($_SESSION['ArticleList'])){
	$getArticleResponse = ($client->getArticlesPubmed($getArticles));
	if((count(@$getArticleResponse->return)) != 0){
		$_SESSION['ArticleList'] = $getArticleResponse;
		echo count($_SESSION['ArticleList']->return);
	}
	else
		echo count(@$getArticleResponse->return);
				
}
else{
 	
	$list = @$client->getArticlesPubmed($getArticles)->return;
	if(count($list)!= 0)
		$_SESSION['ArticleList']->return=array_merge($_SESSION['ArticleList']->return,$list);  
	echo count($_SESSION['ArticleList']->return);

}






	
/*	

$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.ArticlesList">';
for($i = 0; $i< count($_SESSION['ArticleList']->return); $i++){
$xmlarticles=$xmlarticles.'
  <void method="add">
   <object class="biowizard.dict.DictionaryEntryArticle">
    <void property="abstractText">
     <string>'.$_SESSION['ArticleList']->return[$i]->abstractText.'</string>
    </void>
    <void property="id">
     <string>'.$_SESSION['ArticleList']->return[$i]->id.'</string>
    </void>
    <void property="title">
     <string>'.$_SESSION['ArticleList']->return[$i]->title.'</string>
	</void>
   </object>
  </void>';
}
$xmlarticles=$xmlarticles.'
 </object>
</java>';
$var=fopen("dict.xml","w");
fwrite($var, $xmlarticles);
fclose($var);*/
?>