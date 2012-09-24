
<script type="text/javascript" src="scripts/navigationutils.js"> </script>

<style type="text/css">
.desc{
	padding-left:15px;
	font-size:17px;
}
.rowpad{
	margin-top::10px;
	}
</style>
<div id="choicestep1" >
<div align="left"> <font  style="font-size:22px" >Select an association type:</font></div>
<br />
<br/>
<form id="introduction">
<table  align="center" cellspacing="8px" >
    	<tr class="rowpad">
        <td >
        <input class="button" id="Dg" type="button" value="Disease - Gene" onClick="DisGen()" />
        </td>
        <td class="desc">
        Discovers disease - gene relations using Mesh and Entrez based dictionaries
        </td>
        </tr>
        <tr class="rowpad">
        <td >
        <input class="button" id="Dp" type="button" value="Disease - Protein" onClick="DisPro()" />
       	</td>
        <td class="desc">
        Discovers disease - protein relations using Mesh and UniProt based dictionaries
        </td>
        </tr>
        <tr class="rowpad">
        <td>
        <input class="button" id="Pp" type="button" value="Protein - Protein" onClick="ProPro()" />
       	</td>
        <td class="desc">
        Discovers protein - protein relations using UniProt based dictionaries and data from other DB
        </td>
        </tr>
        <tr class="rowpad">
        <td>
        <input class="button" id="Gg" type="button" value="Gene - Gene" onClick="GenGen()" />
       	</td>
        <td class="desc">
        Discovers gene - gene relations using Entrez based dictionaries
        </td>
        </tr>

</table>
</form>
</div>