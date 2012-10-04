var myRequest = null;
var printingtype = null;
var features = null;
var clusters = null;
var refreshflag = null;
var localdictionary = null;

function CreateXmlHttpReq(handler) {
  var xmlhttp = null;
  try {
    xmlhttp = new XMLHttpRequest();
  } catch(e) {
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  xmlhttp.onreadystatechange = handler;
  return xmlhttp;
}



function myHandlerArt() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabel");
		e.innerHTML =   "<font style='font-size:16px'>Result: " + myRequest.responseText+" Articles </font>";
		document.getElementById("line").style.webkitAnimationPlayState="paused";
		document.getElementById("line").style.MozAnimationPlayState="paused";
		document.getElementById("line").style.oAnimationPlayState="paused";
		document.getElementById("line").style.msAnimationPlayState="paused";
		document.getElementById("loaded").innerHTML="Completed";
		document.getElementById("resultlabel").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editArticles").style.visibility = "" ;
			articlescheck = true;
		}
		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=false;
    }
}

function buildArticlesDictionary() {

    var nome = document.queryArticles.nome.value;
	var fields = document.queryArticles.fields.options[document.queryArticles.fields.selectedIndex].value;
	var sMin = document.queryArticles.spinnerMin.value;
	var sMax = document.queryArticles.spinnerMax.value;
	var check= document.queryArticles.checkData.checked;
	associationcheck = false;
	if(nome == ""){
		//document.getElementById("textArticles").required="true";
		//document.queryArticles.nome.focus();
		document.getElementById("textArticles").className="focus";
		}
		else{
		document.getElementById("textArticles").className="elem";
		for(i=0;i< document.getElementsByClassName("result").length; i++)
			document.getElementsByClassName('result').item(i).style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
		document.getElementById("prevbutton").style.visibility = "hidden";
		document.getElementById("resultlabel").innerHTML = "";
		document.getElementById("line").style.webkitAnimationPlayState="running";
		document.getElementById("line").style.MozAnimationPlayState="running";
		document.getElementById("line").style.oAnimationPlayState="running";
		document.getElementById("line").style.msAnimationPlayState="running";
		document.getElementById("loaded").innerHTML = "Please Wait ...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandlerArt);
    myRequest.open("GET","buildarticleclient.php?nome="+escape(nome)+"["+escape(fields)+"]&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&check="+escape(check)+"&rand="+escape(r));
	myRequest.send(null);
}
}


function showDetails(i){
  var w = 700;
  var h = 450;
  var l = Math.floor((screen.width-w)/2);
  var t = Math.floor((screen.height-h)/2);
 
  var tmpstring='<body style="background-color:#d9d9d9"><font face ="Myriad Pro"> Id: &nbsp;&nbsp;&nbsp;&nbsp;'+localdictionary[i].id +"<br><br>";
  var popup = window.open('','Details'+localdictionary[i].id,"width=" + w + ",height=" + h + ",top=" + t + ",left=" + l);
	if(printingtype == 'article')
		tmpstring = tmpstring+'<div style="font-size:20px">Title:</div> <p>'+localdictionary[i].title+'</p><br><div style="font-size:20px">Abstract:</div><p>'+localdictionary[i].abstractText+'</p></font></body>';
	else{
		tmpstring = tmpstring+'<div style="font-size:20px">Name:</div><p>'+localdictionary[i].name+'</p><div style="font-size:20px"><br>Aliases:</div><p>';
		if(isArray(localdictionary[i].aliases))
			for(j=0;j<localdictionary[i].aliases.length;j++)
				tmpstring = tmpstring + localdictionary[i].aliases[j]+"<br>";
		else
			tmpstring = tmpstring + localdictionary[i].aliases+"<br>";
			
		tmpstring=tmpstring+'</p></font></body>';
	 	
	}
		
		popup.document.write(tmpstring);	
}

function openDictionary(){
	 if (myRequest.readyState == 4 && myRequest.status == 200) {
		localdictionary = JSON.parse(myRequest.responseText);
		if(printingtype != 'article')
			 document.getElementById('titlelabel').innerHTML="Name"; 
			 var temphtml = "";
		for(i=0;i<localdictionary.length;i++){
			if(i%2==1){
				if(printingtype == 'article'){
					temphtml = temphtml + "<tr><td><input type=checkbox id="+localdictionary[i].id+" name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'><label for="+localdictionary[i].id+">" + localdictionary[i].id + "</label></td><td width='2600' class='titleText' onclick='showDetails("+i+")' style='cursor:pointer;'>" + localdictionary[i].title + "</td><td style='display:none;' class='abstractText'>" + localdictionary[i].abstractText+"</td></tr>";
				}else{
					temphtml = temphtml + "<tr><td><input type=checkbox id="+localdictionary[i].id+" name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'><label for="+localdictionary[i].id+">" + localdictionary[i].id + "</label></td><td width='2600' class='titleText' onclick='showDetails("+i+")' style='cursor:pointer;'>"+ localdictionary[i].name + "</td></tr>";
				}
			}
			else{
			if(printingtype == 'article'){
				temphtml = temphtml + "<tr style='color:#009900;'><td><input type=checkbox id="+localdictionary[i].id+" name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'><label for="+localdictionary[i].id+">" + localdictionary[i].id + "</label></td><td width='2600' class='titleText' style='cursor:pointer;' onclick='showDetails("+i+")'>"+ localdictionary[i].title +"</td><td style='display:none;'class='abstractText'>" + localdictionary[i].abstractText+"</td></tr>";
			}else{
				temphtml = temphtml + "<tr style='color:#009900;'><td><input type=checkbox id="+localdictionary[i].id+" name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'><label for="+localdictionary[i].id+">" + localdictionary[i].id + "</label></td><td width='2600' class='titleText' style='cursor:pointer;' onclick='showDetails("+i+")'>"+ localdictionary[i].name + "</td></tr>";
			}
				}
		}
	document.getElementById('editTable').innerHTML=temphtml;
	
	
	 }
}

function editDictionary(type){
	var r = Math.random();
	printingtype=type;
	associationcheck = false;
    myRequest = CreateXmlHttpReq(openDictionary);
    myRequest.open("GET","printDictionary.php?type="+printingtype+"&rand="+r);
	myRequest.send(null);

	
	
}
	
	

function myHandlerDis() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelDisease");
		e.innerHTML =   "<font style='font-size:16px'>Result: " + myRequest.responseText+" Articles </font>";
		document.getElementById("lineDisease").style.webkitAnimationPlayState="paused";
		document.getElementById("lineDisease").style.MozAnimationPlayState="paused";
		document.getElementById("lineDisease").style.oAnimationPlayState="paused";
		document.getElementById("lineDisease").style.msAnimationPlayState="paused";
		document.getElementById("loadedDisease").innerHTML="Completed";
		document.getElementById("resultlabelDisease").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editDiseases").style.visibility = "" ;
			diseasescheck = true;

		}
		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=false;		
    }
}

function buildDiseasesDictionary() {

    var nome = document.queryDisease.nome.value;
	var fields = document.queryDisease.fields.options[document.queryDisease.fields.selectedIndex].value;
	var sMin = document.queryDisease.spinnerMin.value;
	var sMax = document.queryDisease.spinnerMax.value;
	var checkData= document.queryDisease.checkData.checked;
	associationcheck = false;
	if(nome == ""){
		document.getElementById("textDisease").className="focus";
		}
		else{
		document.getElementById("textDisease").className="elem";
		for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName('result').item(i).style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
		document.getElementById("prevbutton").style.visibility = "hidden";
		document.getElementById("resultlabelDisease").innerHTML = "";
		document.getElementById("lineDisease").style.webkitAnimationPlayState="running";
		document.getElementById("lineDisease").style.MozAnimationPlayState="running";
		document.getElementById("lineDisease").style.oAnimationPlayState="running";
		document.getElementById("lineDisease").style.msAnimationPlayState="running";
		document.getElementById("loadedDisease").innerHTML = "Please Wait ...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandlerDis);
    myRequest.open("GET","builddiseaseclient.php?nome="+escape(nome)+"["+escape(fields)+"]&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
}
}


function myHandlerGene() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelGene");
		e.innerHTML =   "<font style='font-size:16px'>Result: " + myRequest.responseText+" Articles </font>";
		document.getElementById("lineGene").style.webkitAnimationPlayState="paused";
		document.getElementById("lineGene").style.MozAnimationPlayState="paused";
		document.getElementById("lineGene").style.oAnimationPlayState="paused";
		document.getElementById("lineGene").style.msAnimationPlayState="paused";
		document.getElementById("loadedGene").innerHTML="Completed";
		document.getElementById("resultlabelGene").style.display = "";
						
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editGenes").style.visibility = "" ;
			genescheck = true;

		}
		
		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=false;
    }
}

function buildGenesDictionary() {
    var nome = document.queryGene.nome.value;
	var fields = document.queryGene.fields.options[document.queryGene.fields.selectedIndex].value;
	var organism = document.queryGene.organism.value;
	var sMin = document.queryGene.spinnerMin.value;
	var sMax = document.queryGene.spinnerMax.value;
	var checkData= document.queryGene.checkData.checked;
	var checkSearch= document.queryGene.checkSearch.checked;

	associationcheck = false;
	if(nome == ""){
		document.getElementById("textGene").className="focus";
		}
		else{
		document.getElementById("textGene").className="elem";
		for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName('result').item(i).style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
		document.getElementById("prevbutton").style.visibility = "hidden";
		document.getElementById("resultlabelGene").innerHTML = "";
		document.getElementById("lineGene").style.webkitAnimationPlayState="running";
		document.getElementById("lineGene").style.MozAnimationPlayState="running";
		document.getElementById("lineGene").style.oAnimationPlayState="running";
		document.getElementById("lineGene").style.msAnimationPlayState="running";
		document.getElementById("loadedGene").innerHTML = "Please Wait ...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandlerGene);
    myRequest.open("GET","buildgeneclient.php?nome="+escape(nome)+"["+escape(fields)+"]&organism="+escape(organism)+"&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkSearch="+escape(checkSearch)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
	}
}


function myHandlerProt() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelProtein");;
		e.innerHTML =   "<font style='font-size:16px'>Result: " + myRequest.responseText+" Articles </font>";
		document.getElementById("lineProtein").style.webkitAnimationPlayState="paused";
		document.getElementById("lineProtein").style.MozAnimationPlayState="paused";
		document.getElementById("lineProtein").style.oAnimationPlayState="paused";
		document.getElementById("lineProtein").style.msAnimationPlayState="paused";
		document.getElementById("loadedProtein").innerHTML="Completed";
		document.getElementById("resultlabelProtein").style.display = "";
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editProteins").style.visibility = "" ;
			proteinscheck = true;
		}
		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=false;		
    }
}

function buildProteinsDictionary() {
    var nome = document.queryProtein.nome.value;
	var fields = document.queryProtein.fields.options[document.queryProtein.fields.selectedIndex].value;
	var sMin = document.queryProtein.spinnerMin.value;
	var sMax = document.queryProtein.spinnerMax.value;
	var checkSearch= document.queryProtein.checkSearch.checked;
	var checkData= document.queryProtein.checkData.checked;
	associationcheck = false;
	if(nome == ""){
		document.getElementById("textProtein").className="focus";
		}
		else{
		document.getElementById("textProtein").className="elem";
		for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName('result').item(i).style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
		document.getElementById("prevbutton").style.visibility = "hidden";
		document.getElementById("resultlabelProtein").innerHTML = "";
		document.getElementById("lineProtein").style.webkitAnimationPlayState="running";
		document.getElementById("lineProtein").style.MozAnimationPlayState="running";
		document.getElementById("lineProtein").style.oAnimationPlayState="running";
		document.getElementById("lineProtein").style.msAnimationPlayState="running";
		document.getElementById("loadedProtein").innerHTML = "Please Wait ...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandlerProt);
    myRequest.open("GET","buildproteinclient.php?nome="+escape(nome)+"&fields="+escape(fields)+"&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkSearch="+escape(checkSearch)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
}
}



function countFeatures(){	
	count = 0;	
	if(isArray(features))
		for(i=0;i<features.length;i++)
			if(isArray(features[i].featureList))
				for(j=0;j<features[i].featureList.length;j++)
					count++;
			else
				count++;
	else
		if(isArray(features.featureList))
			for(j=0;j<features.featureList.length;j++)
				count++;
		else
			count++;
	
	return count;			
}



function myHandlerAsso() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		associationcheck = true;
        document.getElementById("lineAssociation").style.webkitAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.MozAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.oAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.msAnimationPlayState="paused";
		document.getElementById("loadedAssociation").innerHTML="Clustering Completed";
		document.getElementById("resultlabelAssociation").style.display = "";
		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
			document.getElementsByClassName('elem').item(i).disabled=false;
		if(myRequest.responseText == 0){
			 associationcheck = false;
			alert('Failed to retrieve associations.Please retry with others Dictionaries');
		}
		else{
		 if(!refreshflag)
			document.getElementById("nextbutton").style.visibility = "" ;	
		features = JSON.parse(myRequest.responseText);
		var featuresnumber = countFeatures();
		document.getElementById('assnumber').innerHTML = "<font style='font-size:16px'> Associations Found: "+featuresnumber+"</font>";
		refreshflag = false; 
		classInspector();
		var temp=""
		for(i=0; i<features.length; i++){
			temp=temp+"<a style='cursor:pointer; width=360px'  onclick=associationFeatures('"+features[i].entryID+"') ><div style='width:360;height:20px' id= "+features[i].entryID +" class = 'unselectedAsso' >"+features[i].entryID+" Name:"+features[i].name+"</div></a>";
			}
		document.getElementById("textarea1").innerHTML=temp;
    	}
	}
}


function myHandlerClust(){
	if (myRequest.readyState == 4 && myRequest.status == 200) {
		
		clusters = JSON.parse(myRequest.responseText);
		var temp="";
		
		if(isArray(clusters)){
		for(i=0; i<clusters.length; i++){
			if(clusters[i].articleList!=null){
				if(isArray(clusters[i].articleList)){
					temp = temp+"<a onclick='getClusterFeaturesById("+ i +")'style='cursor:pointer;'><div id="+i+" class='unselectedclust' style='width:360px; height:20px;' >Cluster: "+ i + " ("+clusters[i].articleList.length+ " documents)</div></a>";
					}
				else
					{
					temp= temp+"<a onclick='getClusterFeaturesById("+ i +")' style='cursor:pointer;' ><div id="+i+" class='unselectedclust' style='width:360px; height:20px;' >Cluster: "+ i + " ( 1 document)</div></a>";
					}
					}
			else{
				commands = 'document.getElementById("textDocuments").innerHTML="";document.getElementById("textarea4").innerHTML="";switchColorsClust("'+i+'")';
				temp= temp+"<a onclick='"+commands+"' style='cursor:pointer;' ><div id="+i+" class='unselectedclust' style='width:360px; height:20px;' >Cluster: "+ i + " ( 0 document)</div></a>";
				}
			}
		}
		else{
		temp = "<a style='cursor:pointer;' onclick='switchColorsClust('emptyclust')' ><div id='emptyclust' class='unselectedclust' style='width:360px; height:20px;' >Cluster: 0 ("+clusters[0].articleList.length+ " documents)</a>";
		}
		document.getElementById("textarea3").innerHTML=temp;
		}
	}
	
function switchColorsClust(index){
	for(i=0; i < document.getElementsByClassName("unselectedclust").length ; i++)
    	document.getElementsByClassName("unselectedclust").item(i).style.backgroundColor="#FFF";           
    document.getElementById(index).style.backgroundColor="#ADFF2F";
 
	
}
	
	
function getClusterFeaturesById(index){
	tempdoc = "";
	switchColorsClust(index);
	if(isArray(clusters[index].articleList)){
		for(j=0; j<clusters[index].articleList.length; j++){
		
						tempdoc = tempdoc+"<a>Id: "+ clusters[index].articleList[j].id + " Title: "+ clusters[index].articleList[j].title +" </a><br>";
		}
	}
	else{
		tempdoc = tempdoc+"<a>Id: "+ clusters[index].articleList.id + " Title: "+ clusters[index].articleList.title +" </a><br>";
	}
    document.getElementById("textDocuments").innerHTML = tempdoc;
	
	
	myRequest = CreateXmlHttpReq(ClusterFeatureHandler);
	myRequest.open("GET","getfeature.php?index="+index);
	myRequest.send(null);
}


function ClusterFeatureHandler(){
	
	if (myRequest.readyState == 4 && myRequest.status == 200) {		
		list = "";
		clusterfeatures = JSON.parse(myRequest.responseText)
		if(isArray(clusterfeatures))
		for(i=0; i<clusterfeatures.length; i++)
		  list = list + "id: "+ clusterfeatures[i].entry.id +"; Name: "+clusterfeatures[i].entry.name+ "; Frequency:"+clusterfeatures[i].frequence+"<br>";
		else list = list + "id: "+ clusterfeatures.entry.id +"; Name: "+clusterfeatures.entry.name+ "; Frequency:"+clusterfeatures.frequence+"<br>";
		
		document.getElementById("textarea4").innerHTML = list;
		
	}
}


function classInspector(){
	myRequest = CreateXmlHttpReq(myHandlerClust);
	myRequest.open("GET","classinspector.php");
	myRequest.send(null);
	}


function associationFeatures(index){
	var temp="";
	
	for(i=0; i < document.getElementsByClassName("unselectedAsso").length ; i++)
    	document.getElementsByClassName("unselectedAsso").item(i).style.backgroundColor="#FFF";           
    document.getElementById(index).style.backgroundColor="#ADFF2F";
 
	featureList=null;	
	for(i=0; i<features.length; i++){
		if(features[i].entryID == index){
			featureList = features[i].featureList;
			}
		}	
	if(isArray(featureList))
		for(i=0; i<featureList.length; i++){
				temp=temp+"<a>ID: "+featureList[i].entry.id+" Name: "+ featureList[i].entry.name +" Frequence: "+featureList[i].frequence+"</a><br>";
			}
	else {
		temp = temp + "<a>ID: "+featureList.entry.id+" Name: "+ featureList.entry.name +" Frequence: "+featureList.frequence+"</a><br>";
	}
		
	document.getElementById('textarea2').innerHTML=temp;	
	
	}
	
function refreshClustering(){
	refreshflag=true;
	document.getElementById('textarea2').innerHTML ='';
	document.getElementById('textarea4').innerHTML ='';
	document.getElementById('textDocuments').innerHTML ='';
	whichDict= document.getElementById('whichDict').options[document.getElementById('whichDict').selectedIndex].value;
	threshold = document.getElementById('threshold').value;
	var r = Math.random();
	myRequest = CreateXmlHttpReq(myHandlerAsso);	
    myRequest.open("GET","clusteringinspector.php?whichDict="+whichDict+"&threshold="+threshold+"&rand="+ r );
	myRequest.send(null);
	
}

function startAssociation(){
	var maintype = document.getElementById("choicestep1").name;
    var vector = document.queryAssociation.vector.value;
	var number = document.queryAssociation.number.value;
	var iteration = document.queryAssociation.iteration.value;
	var cluster = document.queryAssociation.cluster.options[document.queryAssociation.cluster.selectedIndex].value;
		for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName('result').item(i).style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
		document.getElementById("prevbutton").style.visibility = "hidden";
		document.getElementById("resultlabelAssociation").innerHTML = "";
		document.getElementById("lineAssociation").style.webkitAnimationPlayState="running";
		document.getElementById("lineAssociation").style.MozAnimationPlayState="running";
		document.getElementById("lineAssociation").style.oAnimationPlayState="running";
		document.getElementById("lineAssociation").style.msAnimationPlayState="running";
		document.getElementById("loadedAssociation").innerHTML = "Clustering in progress...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
	myRequest = CreateXmlHttpReq(myHandlerAsso);	
    myRequest.open("GET","associationclient.php?type="+maintype+"&vsmt="+vector+"&clusternumber="+number+"&iterationnumber="+iteration+"&calghorithm="+cluster+"&rand="+ r );
	myRequest.send(null);

}




function deletinglines(){
	var j=0;	
	delitem = new Array();
	for(i = 0;i< document.getElementsByClassName("checkEdit").length; i++)
		if(document.getElementsByClassName('checkEdit').item(i).checked.toString()=='true'){
			delitem[j]=document.getElementsByClassName('checkEdit').item(i).name;
			j++;
		}
		var tmp = 'deletelines.php?';
		if(printingtype=='article')
			tmp=tmp+'dictype=ArticleList&';
		if(printingtype=='disease')
			tmp=tmp+'dictype=DiseaseList&';
		if(printingtype=='protein')
			tmp=tmp+'dictype=ProteinList&';
		if(printingtype=='gene')
			tmp=tmp+'dictype=GeneList&';
		
	for(i=0; i<delitem.length;i++){
		tmp=tmp+'delitem[]='+delitem[i];
		if(i!=(delitem.length - 1))
			tmp=tmp+'&';
	}
	
	myRequest = CreateXmlHttpReq(logprinter);	
    myRequest.open("GET",tmp);
	myRequest.send(null);
	
}

function logprinter(){
	
	    if (myRequest.readyState == 4 && myRequest.status == 200) {
			
						editDictionary(printingtype);
	
		}
		
}
		



	
/**
 * Function : dump()
 * Arguments: The data - array,hash(associative array),object
 *    The level - OPTIONAL
 * Returns  : The textual representation of the array.
 * This function was inspired by the print_r function of PHP.
 * This will accept some data as the argument and return a
 * text that will be a more readable version of the
 * array/hash/object that is given.
 * Docs: http://www.openjs.com/scripts/others/dump_function_php_print_r.php
 */
function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;

	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";

	if(typeof(arr) == 'object') { //Array/Hashes/Objects
		for(var item in arr) {
			var value = arr[item];

			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

//chk if an object is an array or not.
function isArray(obj) {
//returns true is it is an array
if (obj.constructor.toString().indexOf("Array") == -1)
	return false;
else
	return true;
}



