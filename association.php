<div id="association" class="respanel" style="display:none">
<form name="queryAssociation">

	<table class="panelForm">
    <tr>
    <td width="250">
    <label style="width:200"> Vector Space Models threshold: </label>
    </td>
    <td width="250">
    <input type="number" name="vector" class="elem" style="width:360px;text-align:right" value="0.0001"/>
    </td>
    </tr>
    <tr>
    <td width="250">
    <label style="width:200"> Number of clusters: </label>
    </td>
    <td width="250">
    <input type="number" name="number" style="width:360px;text-align:right" value="25" id="numClust" class="elem" min="0" max="10000" step="1" />
    </td>
    </tr>
    <tr>
    <td width="250">
    <label> Iteration in clustering: </label>
    </td>
    <td width="250">
    <input type="number" name="iteration" style="width:360px;text-align:right" value="150" id="iterClust" class="elem" min="0" max="10000" step="1" />
    </td>
    </tr>
    <tr>
    <td>
   	<label style="width:200"> Clustering alghorithm: </label>
    </td>
    <td>
    <select class="association" name="cluster" style="width:365px" class="elem">
    	<option value="K-Means"> K-Means </option>
		<option value="Hierarchical"> Hierarchical </option>
	</select>
    </td>
    </tr>
    <tr>
    <td>
    </td>
    <td align="right">
    <input type="button" id="startAss" class="buildButton elem" value="Start" onclick="startAssociation()" />
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="result" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 100%">
			<div id="loadedAssociation" class="loaded" >
				Clustering in progress...
			</div>
			<div id="lineAssociation" class="lines"></div>
		</div>
	</div>
     <br>
     <div class="result" style="display:none; margin-top:15px; margin-left:5px">
    <label id="resultlabelAssociation" style="display:none"> </label>
</div>
</div>
</html>