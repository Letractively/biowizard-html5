<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>BioWizard - ShowMap</title>

<style type="text/css">
@import url('css/buttons.css');
@import url('css/graphicElements.css');
</style>

<script type="text/javascript" src="scripts/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="scripts/jquery.reveal.js"> </script>
<script type="text/javascript" src="scripts/d3.v2.js"> </script>

</head>
<body>
<script type="text/javascript">

var links;

  width = 500;
  height = 300;


window.onresize = function() {
  width = document.documentElement.clientWidth-25;
  height = document.documentElement.clientHeight-20;
  svg.attr("width", width);
  svg.attr("height", height);
};

var nodes = {};

// Compute the distinct nodes from the links.
  links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});

});


var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(78)
    .charge(-300)
    .on("tick", tick)
    .start();


var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg.append("defs").selectAll("marker")
    .data(["unchecked", "checkedPositive", "checkedNegative"])
  .enter().append("marker")
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 20)
    .attr("refY", -1)
    .attr("markerWidth", 5)
    .attr("markerHeight", 5)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { return (d.type == "unchecked" ? null : "url(#" + d.type + ")"); });

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 8)
    .attr("class", function(d) {
         return (d.name.split('|')[0] == 'd' ? "disease" : d.name.split('|')[0] == 'g' ? "gene" : "protein");
    })
    .call(force.drag);

var text = svg.append("g").selectAll("g")
    .data(force.nodes())
    .enter().append("g");

// A copy of the text with a thick white stroke for legibility.
text.append("text")
    .attr("x", 10)
    .attr("y", ".031em")
    .attr("class", "shadow")
    .text(function(d) { return d.name.split('|')[1]; });

text.append("text")
    .attr("x", 10)
    .attr("y", ".031em")
    .text(function(d) { return d.name.split('|')[1]; });


var cont = 0;

function tick() {

  if (cont < 200){

  path.attr("d", function(d) { return "M" + d.source.x + "," + d.source.y + "A0,0 0 0,1 " + d.target.x + "," + d.target.y; });

  circle.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  text.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  cont++;
  }

  else {

     force.stop();
     path.attr("d", function(d) {
     d.fixed = true;
     return "M" + d.source.x + "," + d.source.y + "A0,0 0 0,1 " + d.target.x + "," + d.target.y;
  });

  circle.attr("transform", function(d) {
    d.fixed = true;
    return "translate(" + d.x + "," + d.y + ")";
  });

  text.attr("transform", function(d) {
    d.fixed = true;
    return "translate(" + d.x + "," + d.y + ")";
  });

  }
}


</script>

</body>
</html>
