
<div id="disease" class="respanel" style="display:none">
<form id="querystep3" method="POST">

	<table>
    <tr>
    <td width="100">
    <label> Query Terms: </label>
    </td>
    <td width="200">
    <input type="text" style="width:360px"/>
    </td>
    </tr>
    <tr>
    <td>
   	<label> Fields: </label>
    </td>
    <td>
    <select class="step3">
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
   
    <input type="number" name="spinnerMin" id="spinnerMin" min="0" max="10000" step="1" value="0" style="width:50px"/>
    &nbsp
    <label> Max: </label>
    
    <input type="number" name="spinnerMax" id="spinnerMax" min="0" max="10000" step="1" value="100" style="width:50px"/>
    &nbsp
    &nbsp
    </td>
    </tr>
    <tr>
    <td>
    <label> Database: </label>
    </td>
    <td>
    <select >
		<option value="Mesh"> Mesh </option>
	</select>
    &nbsp
    &nbsp
    &nbsp
    <input type="checkbox" id="check2" value="Search data within articles" /> <label for = "check2">Search data within articles</label>
    </td> 
    <td>
    <input type="button" id="buildstep2" class="buildButton" value="Build Dictionary" />
    </td>
    </tr>
    <tr>
    <td>
    </td>
    <td style="padding-left:89px">
    <input type="checkbox" id="check2" value="Overwrite previous data" /> <label for = "check2">Overwrite previous data</label>
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="loading-bar" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 100%">
			<div class="loaded" >
				Please Wait ...
			</div>
			<div class="lines"></div>
		</div>
	</div>
     <br>
    <div class="result" style="display:none; margin-top:15px; margin-left:5px">
    <label> RESULT: </label>
    <input type="button" id="editButtonstep2" class="result" style="display:none" value="Edit Dictionary">
</div>
</div>
</html>

