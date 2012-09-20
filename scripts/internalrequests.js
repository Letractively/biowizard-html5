var myRequest = null;
var printingtype = null;



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
		e.innerHTML =   "RESULT: \n Founded" + myRequest.responseText+" Articles";
		document.getElementById("line").style.webkitAnimationPlayState="paused";
		document.getElementById("line").style.MozAnimationPlayState="paused";
		document.getElementById("line").style.oAnimationPlayState="paused";
		document.getElementById("line").style.msAnimationPlayState="paused";
		document.getElementById("loaded").innerHTML="Completed";
		document.getElementById("resultlabel").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editArticles").style.visibility = "" ;
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

function openDictionary(){
	 if (myRequest.readyState == 4 && myRequest.status == 200) {
	/*	var popEdit=window.open("temp.php","Dictionary","menubar=0,toolbar=0, width=500, height=400, resizable=0,scrollbars=1");
		//popEdit.document.write('<input type="checkbox" value="ciao"/> ciao');	*/	
		var localdictionary = JSON.parse(myRequest.responseText);
		if(printingtype != 'article')
			 document.getElementById('titlelabel').innerHTML="Name"; 
			 var temphtml = "";
		for(i=0;i<localdictionary.length;i++){
			if(printingtype == 'article'){
				temphtml = temphtml + "<tr><td><input type=checkbox name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'>" + localdictionary[i].id + "</td><td width='2600' class='titleText' style='cursor:pointer;'>"+ localdictionary[i].title + "</td><td style='display:none;' class='abstractText'>" + localdictionary[i].abstractText+"</td></tr>";
			}else
				temphtml = temphtml + "<tr><td><input type=checkbox name="+localdictionary[i].id+" class='checkEdit' /></td><td width='100'>" + localdictionary[i].id + "</td><td width='2600' class='titleText' style='cursor:pointer;'>"+ localdictionary[i].name + "</td></tr>";
			
			}
	document.getElementById('editTable').innerHTML=temphtml;
	
	
	 }
}

function editDictionary(type){
	var r = Math.random();
	printingtype=type;
    myRequest = CreateXmlHttpReq(openDictionary);
    myRequest.open("GET","printDictionary.php?type="+printingtype+"&rand="+r);
	myRequest.send(null);

	
	
}
	
	

function myHandlerDis() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelDisease");
		e.innerHTML =   "RESULT: " + myRequest.responseText;
		document.getElementById("lineDisease").style.webkitAnimationPlayState="paused";
		document.getElementById("lineDisease").style.MozAnimationPlayState="paused";
		document.getElementById("lineDisease").style.oAnimationPlayState="paused";
		document.getElementById("lineDisease").style.msAnimationPlayState="paused";
		document.getElementById("loadedDisease").innerHTML="Completed";
		document.getElementById("resultlabelDisease").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editDiseases").style.visibility = "" ;
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
	var checkSearch= document.queryDisease.checkSearch.checked;
	var checkData= document.queryDisease.checkData.checked;
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
    myRequest.open("GET","builddiseaseclient.php?nome="+escape(nome)+"["+escape(fields)+"]&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkSearch="+escape(checkSearch)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
}
}


function myHandlerGene() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelGene");
		e.innerHTML =   "RESULT: " + myRequest.responseText;
		document.getElementById("lineGene").style.webkitAnimationPlayState="paused";
		document.getElementById("lineGene").style.MozAnimationPlayState="paused";
		document.getElementById("lineGene").style.oAnimationPlayState="paused";
		document.getElementById("lineGene").style.msAnimationPlayState="paused";
		document.getElementById("loadedGene").innerHTML="Completed";
		document.getElementById("resultlabelGene").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editGenes").style.visibility = "" ;
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
    myRequest.open("GET","buildgeneclient.php?nome="+escape(nome)+"["+escape(fields)+"]&organism="+escape(organism)+"&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
}
}



function myHandlerProt() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelProtein");;
		e.innerHTML =   "RESULT: " + myRequest.responseText;
		document.getElementById("lineProtein").style.webkitAnimationPlayState="paused";
		document.getElementById("lineProtein").style.MozAnimationPlayState="paused";
		document.getElementById("lineProtein").style.oAnimationPlayState="paused";
		document.getElementById("lineProtein").style.msAnimationPlayState="paused";
		document.getElementById("loadedProtein").innerHTML="Completed";
		document.getElementById("resultlabelProtein").style.display = "";
		
		if((myRequest.responseText) != '0'){
			document.getElementById("nextbutton").style.visibility = "" ;
			document.getElementById("editProteins").style.visibility = "" ;
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
		document.getElementById("lineDisease").style.oAnimationPlayState="running";
		document.getElementById("lineDisease").style.msAnimationPlayState="running";
		document.getElementById("loadedDisease").innerHTML = "Please Wait ...";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=true;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandlerProt);
    myRequest.open("GET","buildproteinclient.php?nome="+escape(nome)+"&fields="+escape(fields)+"&sMin="+escape(sMin)+"&sMax="+escape(sMax)+"&checkSearch="+escape(checkSearch)+"&checkData="+escape(checkData)+"&rand="+escape(r));
	myRequest.send(null);
}
}

function myHandlerAsso() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabelAssociation");
		e.innerHTML =   "RESULT: " + myRequest.responseText;
		document.getElementById("lineAssociation").style.webkitAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.MozAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.oAnimationPlayState="paused";
		document.getElementById("lineAssociation").style.msAnimationPlayState="paused";
		document.getElementById("loadedAssociation").innerHTML="Clustering Completed";
		document.getElementById("resultlabelAssociation").style.display = "";
		
		if((myRequest.responseText) != '0')
			document.getElementById("nextbutton").style.visibility = "" ;

		document.getElementById("prevbutton").style.visibility = "";
		for(i=0;i< document.getElementsByClassName("elem").length; i++)
		document.getElementsByClassName('elem').item(i).disabled=false;		
    }
}

function startAssociation(){
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
    myRequest.open("GET","provaAssociation.php?vector="+escape(vector)+"&number="+escape(number)+"&iteration="+escape(iteration)+"&cluster="+escape(cluster)+"&rand="+escape(r));
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


