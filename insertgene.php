
<div id="gene" class="respanel" style="display:none">
<form id="querystep4" method="POST">

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
    <select class="step4">
    	<option value="All Fields"> All Fields </option>
		<option value="Base Position"> Base Position </option>
  		<option value="Chromosome"> Chromosome </option>
        <option value="Creation Date"> Creation Date </option>
        <option value="Date Discontinued"> Date Discontinued </option>
        <option value="Default Map Location"> Default Map Location</option>
        <option value="Disease/Phenotype"> Disease/Phenotype </option>
        <option value="Domain Name"> Domain Name </option>
        <option value="EC/RN Number"> EC/RN Number </option>
        <option value="Exon Count"> Exon Count </option>
        <option value="Filter"> Filter </option>        
        <option value="Gene Full Name"> Gene Full Name </option>
        <option value="Gene Length"> Gene Length </option>
        <option value="Gene Name"> Gene Name </option>
        <option value="Gene Ontology"> Gene Ontology </option>
        <option value="Gene/Protein Name"> Gene/Protein Name </option>
        <option value="Group"> Group </option>
        <option value="MIM"> MIM </option>
        <option value="ISBN"> ISBN </option>
        <option value="Modification Date"> Modification Date </option>
        <option value="Nucleotide Accession"> Nucleotide Accession </option>
        <option value="Nucleotide UID"> Nucleotide UID </option>
        <option value="Nucleotide/protein Accession"> Nucleotide/protein Accession </option>
        <option value="Preferred Symbol"> Preferred Symbol </option>
        <option value="Protein Full Name"> Protein Full Name </option>
        <option value="Protein UID"> Protein UID </option>
        <option value="PubMed ID"> PubMed ID </option>
        <option value="Taxonomy ID"> Taxonomy ID </option>
        <option value="Text World"> Text World </option>
        <option value="UniGene Cluster Number"> UniGene Cluster Number </option>
	</select>
    </td>
    </tr>
    <tr>
    <td width="100">
    <label> Organism: </label>
    </td>
    <td width="400">
    <input type="text" style="width:360px"/>
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
    
    </tr>
    <tr>
    <td>
    <label> Database: </label>
    </td>
    <td>
    <select >
		<option value="Entrez Gene"> Entrez Gene </option>
	</select>
    &nbsp
    &nbsp
    &nbsp
    <input type="checkbox" id="check2" value="Overwrite previous data" /> <label for = "check2">Overwrite previous data</label>
    </td> 
    <td>
    <input type="button" id="buildstep4" class="buildButton" value="Build Dictionary" />
    </td>
    </tr>
    </table>

</form>
	<br>
    <br>
	<div class="result" id="loadingBar" style="display:none; margin-left:5px">
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
    <input type="button" id="editButtonstep4" class="result" style="display:none" value="Edit Dictionary">
    </div>
</div>
</html>