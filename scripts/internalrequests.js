var myRequest = null;

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



function myHandler2() {
	var tmp;
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("resultlabel");
		e.innerHTML =   "RESULT: " + myRequest.responseText;
		document.getElementById("line").style.webkitAnimationPlayState="paused";
		document.getElementById("line").style.MozAnimationPlayState="paused";
		document.getElementById("line").style.oAnimationPlayState="paused";
		document.getElementById("line").style.msAnimationPlayState="paused";
		document.getElementById("loaded").innerHTML="Completed";
		document.getElementById("resultlabel").style.display = "";
		document.getElementById("nextbutton").style.display = "";
		document.getElementById("prevbutton").style.display = "";
		
    }
}

function builddictionary() {
    var nome = document.querystep2.nome.value;
	if(nome != ""){
		document.getElementById("nextbutton").style.display = "none";
		document.getElementById("prevbutton").style.display = "none";
		document.getElementById("resultlabel").innerHTML = "";
		document.getElementById("line").style.webkitAnimationPlayState="running";
		document.getElementById("line").style.MozAnimationPlayState="running";
		document.getElementById("line").style.oAnimationPlayState="running";
		document.getElementById("line").style.msAnimationPlayState="running";
		document.getElementById("loaded").innerHTML = "Please Wait ...";
    var r = Math.random();
    myRequest = CreateXmlHttpReq(myHandler2);
    myRequest.open("GET","prova.php?nome="+nome+"&rand="+escape(r));
	myRequest.send(null);
}
}
	
