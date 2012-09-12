function ProPro(){
        
    document.getElementById("nextbutton").name = "step1";
    document.getElementById("prevbutton").name = "step1";
    document.getElementById("choicestep1").name = "proprotype";
    
    for(i=0;i<document.getElementsByClassName("navitem").length;i++){
            document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight="normal";
    }
    for(i = 0; i< document.getElementsByClassName("navpanel").length;i++)
        document.getElementsByClassName("navpanel").item(i).style.display = "none";
    document.getElementById("ProPronav").style.display = "";
    for(i=0;i< document.getElementsByClassName("1phase").length;i++){
        document.getElementsByClassName("1phase").item(i).style.color= selectednavcolor;
		document.getElementsByClassName("1phase").item(i).style.fontWeight="bold";       
        }
        if(document.getElementsByClassName("buttonpushed").length != 0) 
            document.getElementsByClassName("buttonpushed").item(0).className = "button";
        document.getElementById("Pp").className="buttonpushed";    
}


function DisPro(){

    document.getElementById("nextbutton").name = "step1";
    document.getElementById("prevbutton").name = "step1";
    document.getElementById("choicestep1").name ="disprotype";
    
    for(i=0;i<document.getElementsByClassName("navitem").length;i++){
            document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight="normal";
    }
    
        for(i = 0; i< document.getElementsByClassName("navpanel").length;i++)
        document.getElementsByClassName("navpanel").item(i).style.display = "none";
    document.getElementById("DisPronav").style.display = "";
        for(i=0;i< document.getElementsByClassName("1phase").length;i++){
        document.getElementsByClassName("1phase").item(i).style.color= selectednavcolor;   
		document.getElementsByClassName("1phase").item(i).style.fontWeight="bold";  
        }
        if(document.getElementsByClassName("buttonpushed").length != 0) 
            document.getElementsByClassName("buttonpushed").item(0).className = "button";
        document.getElementById("Dp").className="buttonpushed";    
}


function GenGen(){
    
        document.getElementById("nextbutton").name = "step1";
        document.getElementById("prevbutton").name = "step1";
        document.getElementById("choicestep1").name ="gengentype";
    
    for(i=0;i<document.getElementsByClassName("navitem").length;i++){
            document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight="normal";
    }
        for(i = 0; i< document.getElementsByClassName("navpanel").length;i++)
        document.getElementsByClassName("navpanel").item(i).style.display = "none";
    document.getElementById("GenGennav").style.display = "";
        for(i=0;i< document.getElementsByClassName("1phase").length;i++){
        document.getElementsByClassName("1phase").item(i).style.color= selectednavcolor; 
		document.getElementsByClassName("1phase").item(i).style.fontWeight="bold";   
        }
        if(document.getElementsByClassName("buttonpushed").length != 0) 
            document.getElementsByClassName("buttonpushed").item(0).className = "button";
        document.getElementById("Gg").className="buttonpushed";
}


function DisGen(){
    
        document.getElementById("nextbutton").name = "step1";
        document.getElementById("prevbutton").name = "step1";    
        document.getElementById("choicestep1").name ="disgentype";

    for(i=0;i<document.getElementsByClassName("navitem").length;i++){
            document.getElementsByClassName("navitem").item(i).style.color="#292929";
			document.getElementsByClassName("navitem").item(i).style.fontWeight="normal";
    }
    
        for(i = 0; i< document.getElementsByClassName("navpanel").length;i++)
            document.getElementsByClassName("navpanel").item(i).style.display = "none";
        document.getElementById("DisGennav").style.display = "";
        for(i=0;i< document.getElementsByClassName("1phase").length;i++){
        document.getElementsByClassName("1phase").item(i).style.color= selectednavcolor; 
		document.getElementsByClassName("1phase").item(i).style.fontWeight="bold";   
        }
        if(document.getElementsByClassName("buttonpushed").length != 0) 
            document.getElementsByClassName("buttonpushed").item(0).className = "button";
        document.getElementById("Dg").className="buttonpushed";
}