<?php

session_start();
session_destroy();

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>BioWizard</title>
<style type="text/css">
@import url('css/theme.css'); 
@import url('css/buttons.css');
@import url('css/LoadingBar.css');
@import url('css/tabs.css');
@import url('css/reveal.css');
@import url('css/graphicElements.css');
</style>

<script type="text/javascript" src="scripts/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="scripts/wizardutils.js"> </script>
<script type="text/javascript" src="scripts/internalrequests.js"> </script>
<script type="text/javascript" src="scripts/jquery.reveal.js"> </script>
<script type="text/javascript" src="scripts/d3.v2.js"> </script>
<script type="text/javascript" src="scripts/map.js"> </script>
<script type="text/javascript" src="scripts/ui.core.js"> </script>
<script type="text/javascript" src="scripts/ui.draggable.js"> </script>
<script type="text/javascript">

$(document).ready(function(){
$('.button').click(function(){
	$('#navigationmenu').show( "slow");
	$('#mainframe').animate({
		width:"74%"
		});
		$('#nextbutton').show("fast");
		$('.oLine').show('fast');
		$('#intro').show('fast');
		document.getElementById('choicestep1').className='';
		document.getElementById('choicestep1').className='respanel';
	});

	$('.editbutton').click(function(){
		$('.respanel').hide("slow");
		
		$('.editcontrols').show("slow");
		$('#prevbutton').hide("slow");
		$('#nextbutton').hide("slow");
		$('#editDictionary').show("slow");
	});
	
	$('#back').click(function(){
		$('#editDictionary').hide("fast");
		$('.editcontrols').hide("fast");
		$('#prevbutton').show("fast");
		$('#nextbutton').show("fast");
		if(printingtype=="article"){
			$('#articlestep2').show('slow');
		}
		else if(printingtype=="disease"){
			$('#disease').show('slow');
			}
		else if(printingtype=="gene"){
			$('#gene').show('slow');
			}
		else if(printingtype=="protein"){
			$('#protein').show('slow');
			}
		});
});
</script>

</head>
<body>

<div id="headerframe">

<div style="float:right; padding-right:50px;"> <a href="index.php"><img style="height:100px; margin-top:18px" src="images/genev3.png" /></a></div> </div>
<div style="height:10px"> </div>


<div id="containerframe">
<div id="navigationmenu" style="display:none">
		   <?php
    			include('propronav.php');
  				include('dispronav.php');
  				include('disgennav.php');
				include('gengennav.php'); ?>
	</div>
	<div id="mainframe" style="width:96.7%">
    <div style="height:90%" >
	<?php 
	include('step1.php');
    include('association.php');
	include('insertdisease.php');
	include('insertgene.php');
    include('insertprot.php');
	include('insertarticles.php');	
	include('clustering.php');
	include('editPanel.php');
	?>
    </div>
    <div class="oLine" style="display:none; padding-left:40px"><hr style="border-style:outset;"/></div>
      <div style=" position:relative;right:0; padding-top:8px">
    <input id="deleteEdit" class="buttoncontrols editcontrols" type="button" value="Delete" style="float:left; width:70px;height:30px;margin-left:20px;display:none" onclick="deletinglines()"/>
    <input id="back" class="buttoncontrols editcontrols" type="button" value="Back" style="float:left; width:70px; height:30px;margin-left:5px;display:none" onclick="" />
 	<button  id="nextbutton" name="step1" class="buttoncontrols" style="float:right; width:70px;height:30px;margin-left:5px;display:none" onClick="next()"> next </button>
    <button id="prevbutton"  name="step1" class="buttoncontrols" style="float:right; width:70px;height:30px;display:none" onclick="prev()"> prev </button>
    
    </div>
    </div>
   </div>    
<div id="footer" align="center" > BioWizard <br />
Progetto Human Computer Interaction. A.A. 2011/2012  </div>
<iframe id="secretIFrame" src="" style="display:none; visibility:hidden;"></iframe>
</body>
</html>
