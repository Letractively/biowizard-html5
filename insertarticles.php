
<div id="articlestep2" style="display:none">
<form id="querystep2" method="POST">

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
    <select class="step2">
		<option value="Title/Abstract"> Title/Abstract </option>
  		<option value="All Fields"> All Fields </option>
        <option value="Affiliation"> Affiliation </option>
        <option value="Author"> Author </option>
        <option value="Book"> Book </option>
        <option value="Corporate Author"> Corporate Author</option>
        <option value="EC/RN Number"> EC/RN Number </option>
        <option value="Editor"> Editor </option>
        <option value="Entrez Date"> Entrez Date </option>
        <option value="Filter"> Filter </option>
        <option value="First Author"> First Author </option>
        <option value="Full Author Name"> Full Author Name </option>
        <option value="Full Investigator Name"> Full Investigator Name </option>
        <option value="Grant Number"> Grant Number </option>
        <option value="ISBN"> ISBN </option>
        <option value="Investigator"> Investigator </option>
        <option value="Issue"> Issue </option>
        <option value="Journal"> Journal </option>
        <option value="Language"> Language </option>
        <option value="Last Author"> Last Author </option>
        <option value="Location ID"> Location ID </option>
        <option value="MeSH Date"> MeSH Date </option>
        <option value="Mesh Subheading"> Mesh Subheading </option>
        <option value="Mesh Terms"> Mesh Terms </option>
        <option value="Pagination"> Pagination </option>
        <option value="Pharmacological Action"> Pharmacological Action </option>
        <option value="Publication Date"> Publication Date </option>
        <option value="Publication Type"> Publication Type </option>
        <option value="Publisher"> Publisher </option>
        <option value="Secondary Source ID"> Secondary Source ID </option>
        <option value="Supplementary Concept"> Supplementary Concept </option>
        <option value="Text World"> Text World </option>
        <option value="Title"> Title </option>
        <option value="Transliterated Title"> Transliterated Title </option>
        <option value="Volume"> Volume </option>
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
		<option value="Pubmed"> Pubmed </option>
  		<option value="OxfordJournals"> Oxford Journals</option>
	</select>
    &nbsp
    &nbsp
    &nbsp
    <input type="checkbox" id="check2" value="Overwrite previous data" /> <label for = "check2">Overwrite previous data</label>
    </td> 
    <td>
    <input type="button" id="buildstep2" class="buildButton" value="Build Dictionary" />
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