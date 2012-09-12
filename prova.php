<? 
session_destroy();
session_start();
$n = strtolower($_GET['nome']);
$f=($_GET['fields']);
$c=($_GET['check']);
$sMin=($_GET['sMin']);
$sMax=($_GET['sMax']);    	
$getArticles = new stdClass();
$getArticles->retmax = $sMax;
$getArticles->query = $n;
$getArticles->retstart = $sMin;
$getArticleResponse = new stdClass();
$client = new SoapClient("http://localhost:8080/BioWizard-ws/BioWizardWS?wsdl");
$getArticleResponse = $client->getArticlesPubmed($getArticles);
$list=$getArticleResponse->return;
echo("Founded ".count($list)."\n");


/*
$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.ArticlesList">';
for($i = 0; $i< count($list); $i++){
$xmlarticles=$xmlarticles.'
  <void method="add">
   <object class="biowizard.dict.DictionaryEntryArticle">
    <void property="abstractText">
     <string>'.$list[$i]->abstractText.'</string>
    </void>
    <void property="id">
     <string>'.$list[$i]->id.'</string>
    </void>
    <void property="title">
     <string>'.$list[$i]->title.'</string>
	</void>
   </object>
  </void>';
}

$xmlarticles=$xmlarticles.'
 </object>
</java>';
*/


$var=fopen("dict.xml","w");
fwrite($var, $xmlarticles);
fclose($var);
?>