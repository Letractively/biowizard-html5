
<div id="disease" class="respanel" style="display:none">
<form name="queryDisease">

	<table>
    <tr>
    <td width="100">
    <label> Query Terms: </label>
    </td>
    <td width="200">
    <input type="text"  name="nome" class="elem" style="width:360px"/>
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
    <select class="elem">
		<option value="Mesh" > Mesh </option>
	</select>
    &nbsp
    &nbsp
    &nbsp
    <input type="checkbox" id="check2" name="checkSearch" class="elem" value="Search data within articles" /> <label for = "check2">Search data within articles</label>
    </td> 
    <td>
    <input type="button" id="buildstep2" class="buildButton elem" value="Build Dictionary" onclick="buildDiseasesDictionary()" />
    </td>
    </tr>
    <tr>
    <td>
    </td>
    <td style="padding-left:89px">
    <input type="checkbox" id="check2" name="checkData" class="elem" value="Overwrite previous data" /> <label for = "check2">Overwrite previous data</label>
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="result" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 100%">
			<div id="loadedDisease" class="loaded" >
				Please Wait ...
			</div>
			<div id="lineDisease" class="lines"></div>
		</div>
	</div>
     <br>
    <div class="result" style="display:none; margin-top:15px; margin-left:5px">
    <label id="resultlabelDisease" style="display:none"> </label>
    <input type="button" id="editButtonstep2"  style="display:none" value="Edit Dictionary">
</div>
</div>
</html>


