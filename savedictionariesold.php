<?php 

session_start();
$filename = 'tmp/ArticleList.xml';
$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.ArticlesList">';
for($i = 0; $i< count($_SESSION['ArticleList']->return); $i++){
$xmlarticles=$xmlarticles.'
  <void method="add">
   <object class="biowizard.dict.DictionaryEntryArticle">
    <void property="abstractText">
     <string>'.htmlspecialchars($_SESSION['ArticleList']->return[$i]->abstractText).'</string>
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
$var=fopen($filename,"w");
fwrite($var, $xmlarticles);
fclose($var);

  header("Cache-Control: public");
  header("Content-Description: File Transfer");
  header("Content-Disposition: attachment; filename= " . $filename);
  header("Content-Transfer-Encoding: binary");
  readfile($filename);
  
  


?>