<?php 
session_start();

if($_GET['Type'] == 'Article'){
$filename = 'ArticleList.xml';
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
}

if($_GET['Type'] == 'Gene'){
	$filename = 'GeneList.xml';
	$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.Dictionary">';
for($i = 0; $i< count($_SESSION['GeneList']->return); $i++){
$xmlarticles=$xmlarticles.'
 <void method="add">
  <object class="biowizard.dict.DictionaryEntryGene">
    <void property="aliases">';
	for($j=0;$j<count($_SESSION['GeneList']->return[$i]->aliases);$j++){
	$xmlarticles=$xmlarticles.'
	 <void method="add">
      <string>'.$_SESSION['GeneList']->return[$i]->aliases[$j].'</string>
     </void>';
	 }
	 $xmlarticles= $xmlarticles.'
    </void>
    <void property="id">
     <string>'.$_SESSION['GeneList']->return[$i]->id.'</string>
    </void>
    <void property="name">
     <string>'.$_SESSION['GeneList']->return[$i]->name.'</string>
    </void>
    <void property="orgname">
     <string>'.$_SESSION['GeneList']->return[$i]->orgname.'</string>
    </void>
   </object>
  </void>';
}
$xmlarticles=$xmlarticles.'
 </object>
</java>';
}


if($_GET['Type'] == 'Disease'){
	$filename = 'DiseaseList.xml';
	$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.Dictionary">';
for($i = 0; $i< count($_SESSION['DiseaseList']->return); $i++){
$xmlarticles=$xmlarticles.'
 <void method="add">
  <object class="biowizard.dict.DictionaryEntryDisease">
    <void property="aliases">';
	for($j=0;$j<count($_SESSION['DiseaseList']->return[$i]->aliases);$j++){
	$xmlarticles=$xmlarticles.'
	 <void method="add">
      <string>'.$_SESSION['DiseaseList']->return[$i]->aliases[$j].'</string>
     </void>';
	 }
	 $xmlarticles= $xmlarticles.'
    </void>
    <void property="id">
     <string>'.$_SESSION['DiseaseList']->return[$i]->id.'</string>
    </void>
    <void property="name">
     <string>'.$_SESSION['DiseaseList']->return[$i]->name.'</string>
    </void>
   </object>
  </void>';
}
$xmlarticles=$xmlarticles.'
 </object>
</java>';
}

if($_GET['Type'] == 'Protein'){
	$filename = 'ProteinList.xml';
	$xmlarticles='<?xml version="1.0" encoding="UTF-8"?>
<java version="1.7.0_01" class="java.beans.XMLDecoder">
 <object class="biowizard.dict.Dictionary">';
for($i = 0; $i< count($_SESSION['ProteinList']->return); $i++){
$xmlarticles=$xmlarticles.'
 <void method="add">
  <object class="biowizard.dict.DictionaryEntryProtein">
    <void property="aliases">';
	for($j=0;$j<count($_SESSION['ProteinList']->return[$i]->aliases);$j++){
	$xmlarticles=$xmlarticles.'
	 <void method="add">
      <string>'.$_SESSION['ProteinList']->return[$i]->aliases[$j].'</string>
     </void>';
	 }
	 $xmlarticles= $xmlarticles.'
    </void>
    <void property="id">
     <string>'.$_SESSION['ProteinList']->return[$i]->id.'</string>
    </void>
    <void property="name">
     <string>'.$_SESSION['ProteinList']->return[$i]->name.'</string>
    </void>
    <void property="orgname">
     <string>'.$_SESSION['ProteinList']->return[$i]->orgname.'</string>
    </void>
   </object>
  </void>';
}
$xmlarticles=$xmlarticles.'
 </object>
</java>';
}



$var=fopen("tmp/".$filename,"w");
fwrite($var, $xmlarticles);
fclose($var);

  header("Cache-Control: public");
  header("Content-Description: File Transfer");
  header("Content-Disposition: attachment; filename=" .$filename);
  header("Content-Transfer-Encoding: binary");
  readfile('tmp/'.$filename);
  
?>