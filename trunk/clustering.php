<script type="text/javascript">
function pressed(tab){
	if(document.getElementsByClassName("pressedTabs").length != 0)
		document.getElementsByClassName("pressedTabs").item(0).className = "tabanchors";
	document.getElementById(tab).className ="pressedTabs";
}
</script>


<div id="clustering" class="respanel" style="display:none">
<div class="titlePanel">Clustering Inspector</div>
<div class="oLine"><br /><hr style="border-style:outset"/></div>
<div>
<article class="tabtab applegreen left">
<nav>

<ul>
<li><a href="#tab1" id="Tab1" class="tabanchors" onclick=pressed("Tab1")>Associations discover</a></li>
<li><a href="#tab2" id="Tab2" class="tabanchors" onclick=pressed("Tab2")>Class inspector</a></li>
<li><a href="#tab3" id="Tab3" class="tabanchors" onclick=pressed("Tab3")>Map inspector</a></li>
</ul>

</nav>


<section id="tab1">
<div>
<div style="float:left;">
<h5>Selected Dataset Features:</h5>
<div id="textarea1" class="textTab1" readonly="readonly">

</div>
</div>
<div style="float:right;">
<h5>Associated Features:</h5>
<div id="textarea2" class="textTab1" readonly="readonly">

</div>
</div>
</div>
</section>

<section id="tab2">
<div>
<div style="float:left;">
<h5>Clusters:</h5>
<div class="textTab2" readonly="readonly"></div>
</div>
<div style="float:right;">
<h5>Features:</h5>
<div class="textTab2" readonly="readonly"></div>
</div>
<div style="padding-top:10px">
<h5>Documents:</h5>
<div id="textDocuments" readonly="readonly"></div>
</div>
</div>
</section>


<section id="tab3">
<h5>Legend:</h5>
<div style="align:left;"> <img src="images/legend.png" /></div>
<button  id="showmap" class="button" style="float:right; width:110px; height:30px; margin-bottom:10px" onClick=alert("")> Show Map </button>

</section>

</article>
</div>

<div style="padding-top:12px">
<label>Dataset:</label>
<select style="width:100px">
	<option value="first">1</option>
    <option value="second">2</option>
</select>
&nbsp;
&nbsp;
<label>Feature threshold:</label>
<input type="number" style="width:50px" value = "75"/>
<label>%</label>
&nbsp;
&nbsp;
<input type="button" class="buildButton" value="Refresh" onclick=""/>
</div>
</div>

<script type="text/javascript">
if(window.location.hash){
	tab = window.location.href.split('#')[1];
	tab = tab.substring(0,1).toUpperCase()+tab.substring(1);
	pressed(tab);
}
else{
	window.location.hash="#tab1";
	pressed("Tab1");
}
</script>