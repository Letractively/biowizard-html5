
<div id="disease" class="respanel" style="display:none">
<div class="titlePanel">Diseases Dictionary Building</div>
<div class="oLine"><br /><hr style="border-style:outset"/><br /></div>
<div class="panelForm titleForm">Please complete the form below:</div>
<form name="queryDisease">

	<table class="panelForm">
    <tr>
    <td width="150">
    <label> Query Terms: </label>
    </td>
    <td width="200">
    <input type="text" id="textDisease" name="nome" class="elem" style="width:360px" />
    </td>
    </tr>
    <tr>
    <td>
   	<label> Fields: </label>
    </td>
    <td>
    <select class="step3 elem" name="fields">
  		<option value="All Fields"> All Fields </option>
        <option value="Mesh Terms"> Mesh Terms </option>
        <option value="Record Type"> Record Type </option>
        <option value="Registry Number"> Registry Number </option>
        <option value="Scope Note"> Scope Note </option>
        <option value="Supplementary Concept"> Supplementary Concept </option>
        <option value="Text Word"> Text Word</option>
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
    </td>
    </tr>
    <tr>
    <td>
    <label> Database: </label>
    </td>
    <td>
    <table class="intraTable">
    <tr>
    <td style="width:100px" align="left">
    <select class="elem">
		<option value="Mesh" > Mesh </option>
	</select>
    </td>
    <td>
    <input type="checkbox" id="check1dis" name="checkSearch" class="elem" value="Search data within articles" /> <label for = "check1dis">Search data within articles</label>
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
    <input type="checkbox" id="check2dis" name="checkData" class="elem" value="Overwrite previous data" /> <label for = "check2dis">Overwrite previous data</label>
    </td>
    </tr>
    </table>
    </td>
    <td>
    <input type="button" id="buildstep2" class="buildButton elem" value="Build Dictionary" onclick="buildDiseasesDictionary()" />
    </td>
    <td>
    <input type="button" id="editDiseases" class="buildButton elem editbutton" value="Edit Dictionary" onclick="editDictionary('disease')" style="visibility:hidden" />
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="result" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 94%">
			<div id="loadedDisease" class="loaded" >
				Please Wait ...
			</div>
			<div id="lineDisease" class="lines"></div>
		</div>
	</div>
     <br>
    <div class="result" style="display:none; margin-top:15px; margin-left:5px">
    <label id="resultlabelDisease" style="display:none"> </label>
</div>
</div>
</html>


