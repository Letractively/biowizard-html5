var selectednavcolor = "#669900";
var articlescheck = false;
var diseasescheck = false;
var genescheck = false;
var proteinscheck=false;
var associationcheck = false;



function next(){
	var name = document.getElementById("nextbutton").getAttribute("name");
	var type = document.getElementById("choicestep1").name;	
	for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName("result").item(i).style.display = "none";

	for(i=0;i< document.getElementsByClassName("respanel").length; i++)
		document.getElementsByClassName("respanel").item(i).style.display = "none";
	for(i=0;i<document.getElementsByClassName("navitem").length;i++){
			document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight='normal';
	}
	
	if(name == "step1"){		
		document.getElementById("nextbutton").name = "step2";
		document.getElementById("prevbutton").name = "step2";
		document.getElementById("prevbutton").style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";

		if(!articlescheck)
			document.getElementById("nextbutton").style.visibility = "hidden";
		else document.getElementById("nextbutton").style.visibility = "";
	
		for(i=0;i< document.getElementsByClassName("2phase").length;i++){
			document.getElementsByClassName("2phase").item(i).style.color=selectednavcolor;
			document.getElementsByClassName("2phase").item(i).style.fontWeight='bold';
			}
		document.getElementById("articlestep2").style.display = "";
	    document.getElementById("choicestep1").style.display = "none";
}


if(name == "step2"){		
		document.getElementById("nextbutton").name = "step3";
		document.getElementById("prevbutton").name = "step3";		
		for(i=0;i< document.getElementsByClassName("3phase").length;i++){
			document.getElementsByClassName("3phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("3phase").item(i).style.fontWeight='bold';	
	}
	showstep3(type);
}
	

if(name == "step3"){		
		document.getElementById("nextbutton").name = "step4";
		document.getElementById("prevbutton").name = "step4";
		for(i=0;i< document.getElementsByClassName("4phase").length;i++){
			document.getElementsByClassName("4phase").item(i).style.color=selectednavcolor;
			document.getElementsByClassName("4phase").item(i).style.fontWeight='bold';		
	}
	showstep4(type);
	
	
}
	
	

if(name == "step4"){		
		document.getElementById("nextbutton").name = "step5";
		document.getElementById("prevbutton").name = "step5";
		for(i=0;i< document.getElementsByClassName("5phase").length;i++){
			document.getElementsByClassName("5phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("5phase").item(i).style.fontWeight='bold';
	}
	
	showstep5(type);

}
	
	
if(name == "step5"){		
		document.getElementById("nextbutton").name = "step6";
		document.getElementById("prevbutton").name = "step6";
		for(i=0;i< document.getElementsByClassName("6phase").length;i++){
			document.getElementsByClassName("6phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("6phase").item(i).style.fontWeight='bold';	
	}
	showstep6(type);
}

		//document.getElementById("nextbutton").style.visibility = "";
}

	
function prev(){
		
	var name = document.getElementById("prevbutton").getAttribute("name");	 
	var type = document.getElementById("choicestep1").name;	
	document.getElementById("nextbutton").style.visibility = "";
	for(i=0;i< document.getElementsByClassName("result").length; i++)
		document.getElementsByClassName("result").item(i).style.display = "none";

	for(i=0;i< document.getElementsByClassName("respanel").length; i++)
		document.getElementsByClassName("respanel").item(i).style.display = "none";
	for(i=0;i<document.getElementsByClassName("navitem").length;i++){
			document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight='normal';
	}
		
if(name == "step2"){		
		document.getElementById("nextbutton").name = "step1";
		document.getElementById("prevbutton").name = "step1";
		document.getElementById("prevbutton").style.display = "none";
		for(i=0;i< document.getElementsByClassName("1phase").length;i++){
			document.getElementsByClassName("1phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("1phase").item(i).style.fontWeight='bold';	
	}
	document.getElementById("articlestep2").style.display = "none";
	document.getElementById("choicestep1").style.display = "";	
}

if(name == "step3"){		
		document.getElementById("nextbutton").name = "step2";
		document.getElementById("prevbutton").name = "step2";
		for(i=0;i< document.getElementsByClassName("2phase").length;i++){
			document.getElementsByClassName("2phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("2phase").item(i).style.fontWeight='bold';	
	}
	document.getElementById("articlestep2").style.display = "";
	
}
if(name == "step4"){		
		document.getElementById("nextbutton").name = "step3";
		document.getElementById("prevbutton").name = "step3";
		for(i=0;i< document.getElementsByClassName("3phase").length;i++){
			document.getElementsByClassName("3phase").item(i).style.color=selectednavcolor;	
			document.getElementsByClassName("3phase").item(i).style.fontWeight='bold';	
	}
		showstep3(type);
	
}

if(name == "step5"){		
		document.getElementById("nextbutton").name = "step4";
		document.getElementById("prevbutton").name = "step4";
		for(i=0;i< document.getElementsByClassName("4phase").length;i++){
			document.getElementsByClassName("4phase").item(i).style.color=selectednavcolor;		
			document.getElementsByClassName("4phase").item(i).style.fontWeight='bold';
	}	
	showstep4(type);
}
	
	
if(name == "step6"){		
		document.getElementById("nextbutton").name = "step5";
		document.getElementById("prevbutton").name = "step5";
		for(i=0;i< document.getElementsByClassName("5phase").length;i++){
			document.getElementsByClassName("5phase").item(i).style.color=selectednavcolor;		
			document.getElementsByClassName("5phase").item(i).style.fontWeight='bold';
	}
	
	showstep5(type);
	
}

}

function showstep3(type){
		
	if(type == "proprotype"){
		document.getElementById("protein").style.display = "";
		if(proteinscheck){
		 document.getElementById("nextbutton").style.visibility = "";}
		else document.getElementById("nextbutton").style.visibility = "hidden";
		
	}
	if(type == "disgentype" || type == "disprotype"){
		document.getElementById("disease").style.display = "";
		if(diseasescheck)
			document.getElementById("nextbutton").style.visibility = "";
		else document.getElementById("nextbutton").style.visibility = "hidden";
	}
		
	if(type == "gengentype"){
		document.getElementById("gene").style.display = "";
		if(genescheck)
		 document.getElementById("nextbutton").style.visibility = "";
		else document.getElementById("nextbutton").style.visibility = "hidden";	
	}
								
	

}

function showstep4(type){	
	if(type == "proprotype"){
		document.getElementById("association").style.display = "";
		if(associationcheck)
			document.getElementById("nextbutton").style.visibility = "";
			else document.getElementById("nextbutton").style.visibility = "hidden";
	}
	if(type == "disgentype"){
		document.getElementById("gene").style.display = "";
		if(genescheck)
		 document.getElementById("nextbutton").style.visibility = "";
		else document.getElementById("nextbutton").style.visibility = "hidden";	
	}
	if(type == "gengentype"){
		document.getElementById("association").style.display = "";
		if(associationcheck)
			document.getElementById("nextbutton").style.visibility = "";
			else document.getElementById("nextbutton").style.visibility = "hidden";	
		}	
	if(type == "disprotype"){
		document.getElementById("protein").style.display = "";	
		if(proteinscheck)
		 document.getElementById("nextbutton").style.visibility = "";
		else document.getElementById("nextbutton").style.visibility = "hidden";	
		
	}
}


function showstep5(type){	
	if(type == "disprotype" || type == "disgentype"){
		document.getElementById("association").style.display = "";
		if(associationcheck)
			document.getElementById("nextbutton").style.visibility = "";
			else document.getElementById("nextbutton").style.visibility = "hidden";
	}
	else{
		document.getElementById("clustering").style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
	}
}

function showstep6(type){	
	if(type == "disprotype" || type == "disgentype")
		document.getElementById("clustering").style.display = "";
		document.getElementById("nextbutton").style.visibility = "hidden";
}


