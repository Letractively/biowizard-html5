<div id="protein" class="respanel" style="display:none">
<div class="titlePanel">Proteins Dictionary Building</div>
<div class="oLine"><br /><hr style="border-style:outset"/><br /></div>
<div class="panelForm titleForm">Please complete the form below:</div>
<form id="querysteprot" name="queryProtein">

	<table class="panelForm">
    <tr>
    <td width="150">
    <label> Query Terms: </label>
    </td>
    <td width="200">
    <input type="text" id="textProtein" name="nome" class="elem" style="width:360px" autofocus="autofocus" />
    </td>
    </tr>
    <tr>
    <td>
   	<label> Fields: </label>
    </td>
    <td>
    <select class="steprot elem" name="fields">
  		<option value="All Fields"> All Fields </option>
        <option value="Full Text"> Full Text </option>
        <option value="Go Term"> Go Term </option>
        <option value="Keywords"> Keywords </option>
        <option value="Organism"> Organism </option>
        <option value="Protein Name"> Protein Name </option>
        <option value="ID List"> ID List</option>
	</select>
    </td>
    </tr>
    <tr>
    <td>
    <label> Starting from: </label>
    </td>
    <td>
   
    <input type="number" name="spinnerMin" id="spinnerMin" class="elem" min="0" max="10000" step="1" value="0" style="width:50px"/>
    &nbsp
    <label> Max: </label>
    
    <input type="number" name="spinnerMax" id="spinnerMax" class="elem" min="0" max="10000" step="1" value="100" style="width:50px"/>
    &nbsp
    &nbsp
    
    </tr>
    <tr>
    <td>
    <label> Database: </label>
    </td>
    <td>
    <table class="intraTable">
    <tr>
    <td style="width:100px" align="left">
    <select  class="elem">
		<option value="Mesh"> UniProt </option>
	</select>
    </td>
    <td>
    <input type="checkbox" name="checkSearch" id="check1prot" class="elem" value="Search data within articles" /> <label for = "check1prot">Search data within articles</label>
    </td>
    </tr>
    </table>
    </td> 
    </tr>
    <tr>
    <td>
    </td>
    <td>
    <table class="intraTable">
    <tr>
    <td style="width:100px">
    </td>
    <td>
    <input type="checkbox" name="checkData" id="check2prot" class="elem" value="Overwrite previous data" /> <label for = "check2prot">Overwrite previous data</label>
    </td>
    </tr>
    </table>
    </td>
    <td>
    <input type="button" id="buildstep2" class="buildButton elem" value="Build Dictionary" onclick="buildProteinsDictionary()" />
    </td>
    <td>
    <input type="button" id="editProteins" class="buildButton elem editbutton" value="Edit Dictionary" onclick="editDictionary('protein')" style="visibility:hidden" />
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="result" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 94%">
			<div id="loadedProtein" class="loaded" >
				Please Wait ...
			</div>
			<div id="lineProtein" class="lines"></div>
		</div>
	</div>
     <br>
    <div class="result" style="display:none; margin-top:15px; margin-left:5px">
    <label id="resultlabelProtein" style="display:none">  </label>
    </div>
</div>
</html>

