var links;
var linksforpopup;
var firstForce=true;


function initLink() {	
    threshold = document.getElementById('threshold').value;
    var r = Math.random();
    myRequest = CreateXmlHttpReq(initLinkHandler);
    myRequest.open("GET", "clusteringinspector.php?whichDict=first&threshold=" + threshold + "&rand=" + r);
    myRequest.send(null);
}

function initLinkHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        featuresforgraphics = JSON.parse(myRequest.responseText);
        links = new Array();
        choicetype = document.getElementById('choicestep1')
            .name;
        if (choicetype == 'disprotype') {
            type1 = "Disease";
            type2 = "Protein";

        }
        if (choicetype == 'proprotype') {
            type1 = "Protein";

            type2 = "Protein";
        }
        if (choicetype == 'disgentype') {
            type1 = "Disease";

            type2 = "Gene";
        }


        if (choicetype == 'gengentype') {
            type1 = "Gene";
            type2 = "Gene";

        }

        if (isArray(featuresforgraphics)) 
			for (i = 0; i < featuresforgraphics.length; i++) {
            	if (isArray(featuresforgraphics[i].featureList))
					for (j = 0; j < featuresforgraphics[i].featureList.length; j++)
            			addlink(type1, featuresforgraphics[i].name, type2, featuresforgraphics[i].featureList[j].entry.name, featuresforgraphics[i].featureList[j].association);

            	else addlink(type1, featuresforgraphics[i].name, type2, featuresforgraphics[i].featureList.entry.name, featuresforgraphics[i].featureList.association);
        } else {
            if (isArray(featuresforgraphics.featureList)) 
				for (j = 0; j < featuresforgraphics.featureList.length; j++)
            		addlink(type1, featuresforgraphics.name, type2, featuresforgraphics.featureList[j].entry.name, featuresforgraphics.featureList[j].association);
            else addlink(type1, featuresforgraphics.name, type2, featuresforgraphics.featureList.entry.name, featuresforgraphics.featureList.association);

        }
		
	var myJSONText = JSON.stringify(links);
    linksforpopup = JSON.parse(myJSONText);
	showMap();
	}
	
}


function addlink(typesource, namesource, typetarget, nametarget, typelink) {

    var s, t, ty;

    if (typesource == "Protein") s = "p|" + namesource;
    else if (typesource == "Gene") s = "g|" + namesource;
    else s = "d|" + namesource;

    if (typetarget == "Protein") t = "p|" + nametarget;
    else if (typetarget == "Gene") t = "g|" + nametarget;
    else t = "d/|" + nametarget;


    if (typelink == 'positive') ty = 'checkedPositive';
    else if (typelink == 'negative') ty = 'checkedNegative';
    else ty = 'unchecked';


    links.push({
        source: s,
        target: t,
        type: ty
    });

}


function pauseGraph(){
pause=!pause;
firstForce=true;
}


function showMap() {

    //MISURE DA RIVEDERE 
    width = 800;
    height = 480;


    window.onresize = function () {
        width = document.documentElement.clientWidth - 25;
        height = document.documentElement.clientHeight - 20;
        svg.attr("width", width);
        svg.attr("height", height);
    };

    var nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function (link) {
        link.source = nodes[link.source] || (nodes[link.source] = {
            name: link.source
        });
        link.target = nodes[link.target] || (nodes[link.target] = {
            name: link.target
        });

    });


    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        .linkDistance(200)
        .charge(-400)
        .on("tick", tick)
        .start();

    d3.select("#map")
        .selectAll("svg")
        .remove();
    var svg = d3.select("#map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


    // Per-type markers, as they don't inherit styles.
    svg.append("defs")
        .selectAll("marker")
        .data(["unchecked", "checkedPositive", "checkedNegative"])
        .enter()
        .append("marker")
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", - 1)
        .attr("markerWidth", 5)
        .attr("markerHeight", 5)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    var path = svg.append("g")
        .selectAll("path")
        .data(force.links())
        .enter()
        .append("path")
        .attr("class", function (d) {
        return "link " + d.type;
    })
        .attr("marker-end", function (d) {
        return (d.type == "unchecked" ? null : "url(#" + d.type + ")");
    });

    var circle = svg.append("g")
        .selectAll("circle")
        .data(force.nodes())
        .enter()
        .append("circle")
        .attr("r", 8)
        .attr("class", function (d) {
        return (d.name.split('|')[0] == 'd' ? "disease" : d.name.split('|')[0] == 'g' ? "gene" : "protein");
    })
        .call(force.drag);

    var text = svg.append("g")
        .selectAll("g")
        .data(force.nodes())
        .enter()
        .append("g");

    // A copy of the text with a thick white stroke for legibility.
    text.append("text")
        .attr("x", 10)
        .attr("y", ".031em")
        .attr("class", "shadow")
        .text(function (d) {
        return d.name.split('|')[1];
    });

    text.append("text")
        .attr("x", 10)
        .attr("y", ".031em")
        .text(function (d) {
        return d.name.split('|')[1];
    });


    function tick() {

        if (!pause) {

	    if (firstForce)
		force.resume;

            path.attr("d", function (d) {
		if (firstForce)
		   d.fixed = false;			
                return "M" + d.source.x + "," + d.source.y + "A0,0 0 0,1 " + d.target.x + "," + d.target.y;
            });

            circle.attr("transform", function (d) {
		if (firstForce)
		   d.fixed = false;
                return "translate(" + d.x + "," + d.y + ")";
            });

            text.attr("transform", function (d) {
		if (firstForce)
		   d.fixed = false;
                return "translate(" + d.x + "," + d.y + ")";
            });

        } else {

	    if (firstForce)
	        force.stop();

            path.attr("d", function (d) {
		if (firstForce)
		   d.fixed = true;
                return "M" + d.source.x + "," + d.source.y + "A0,0 0 0,1 " + d.target.x + "," + d.target.y;
            });

            circle.attr("transform", function (d) {
		if (firstForce)
		   d.fixed = true;
                return "translate(" + d.x + "," + d.y + ")";
            });

            text.attr("transform", function (d) {
		if (firstForce)
		   d.fixed = true;
                return "translate(" + d.x + "," + d.y + ")";
            });

        }
	firstForce=false;
    }

}
