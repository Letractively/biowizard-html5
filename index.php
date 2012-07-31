<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>BioWizard</title>
<style type="text/css">
@import url('css/theme.css'); 
@import url('css/buttons.css');
@import url('css/LoadingBar.css'); 

</style>
<script type="text/javascript" src="scripts/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="scripts/wizardutils.js"> </script>
<script type="text/javascript">
$(document).ready(function(){
$('.button').click(function(){
	$('#navigationmenu').show( "slow");
	$('#mainframe').animate({
		width:"70%"
		});
		$('.buttoncontrols').show("fast"	);
		$('#prevbutton').hide();
});

});
</script>

</head>
<body>

<div id="headerframe"> </div>
<div style="height:10px"> </div>


<div id="containerframe">
<div id="navigationmenu" align="center" style="display:none">
		   <?php
    			include('propronav.php');
  				include('dispronav.php');
  				include('disgennav.php');
  					include('gengennav.php'); ?>
	</div>
	<div id="mainframe" style="width:1060px">
    <?php 
	include('step1.php');
    include('association.php');
	include('insertdisease.php');
	include('insertgene.php');
    include('insertprot.php');
	include('insertarticles.php');	
	?>
      <div style="position:relative; bottom:10; right:0">
 	<button  id="nextbutton" name="step1" class="buttoncontrols" style="float:right; width:70px; height:30px;display:none" onClick="next()"> next </button>
    <button id="prevbutton"  name="step1" class="buttoncontrols" style="float:right; width:70px;height:30px;display:none" onclick="prev()"> prev </button>
    </div>
    </div>
   </div>
 
<div id="footer" align="center" > BioWizard <br />
Progetto Human Computer Interaction. A.A. 2011/2012  </div>
</body>
</html>