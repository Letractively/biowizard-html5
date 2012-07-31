<div id="association" style="display:none">
<form id="querystep2" method="POST">

	<table>
    <tr>
    <td width="250">
    <label style="width:200"> Vector Space Models threshold: </label>
    </td>
    <td width="250">
    <input type="text" style="width:360px;text-align:right" value="0.0001"/>
    </td>
    </tr>
    <tr>
    <td width="250">
    <label style="width:200"> Number of clusters: </label>
    </td>
    <td width="250">
    <input type="number" style="width:360px;text-align:right" value="25" name="numClust" id="numClust" min="0" max="10000" step="1" />
    </td>
    </tr>
    <tr>
    <td width="250">
    <label> Iteration in clustering: </label>
    </td>
    <td width="250">
    <input type="number" style="width:360px;text-align:right" value="150" name="iterClust" id="iterClust" min="0" max="10000" step="1" />
    </td>
    </tr>
    <tr>
    <td>
   	<label style="width:200"> Clustering alghorithm: </label>
    </td>
    <td>
    <select class="association" style="width:365px">
    	<option value="K-Means"> K-Means </option>
		<option value="Hierarchical"> Hierarchical </option>
	</select>
    </td>
    </tr>
    <tr>
    <td>
    </td>
    <td>
    <input type="button" id="startAss" class="buildButton" value="Start" />
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="loading-bar" id="loadingBar" style="display:none; margin-left:5px">
		<div class="amount green" style="width: 100%">
			<div class="loaded" >
				Clustering in progress...
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