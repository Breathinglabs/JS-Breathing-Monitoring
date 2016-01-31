function changeValues(){
	breathingAlgorithm.noiseLevelConst = parseInt(document.getElementById('onFastFirst').value);
	breathingAlgorithm.onFastConstant = -1*(parseFloat(document.getElementById('onFastSecond').value));
	breathingAlgorithm.onFastNumOfVar = parseInt(document.getElementById('onFastNum').value);
	
	breathingAlgorithm.noiseOffConst = parseInt(document.getElementById('offFastFirst').value);
	breathingAlgorithm.offFastConst = parseFloat(document.getElementById('offFastSecond').value);
	
	breathingAlgorithm.offSlowNumOfPow = parseInt(document.getElementById('offSlowFirst').value);
	breathingAlgorithm.noiseOffSlowConst = parseInt(document.getElementById('offSlowSecond').value);
	
	$('#paramWarning').text('New values submited');
	$('#paramWarning').css('color','green');
	
	displayValuse();
}

function displayValuse(){
	var bb = breathingAlgorithm;

	$('#par_1').text(bb.pow);
	$('#par_2').text(bb.noiseLevel);
	$('#par_3').text(bb.ThrOnFast);
	//$('par_4').text(bb.);
	$('#par_5').text(bb.pwVariance);
	$('#par_6').text(bb.maxVariance);
	$('#par_7').text(bb.minVariance +' / '+ -1*bb.minVariance);
	$('#par_8').text(bb.varOffVar);
	$('#par_10').text(bb.noiseLevelConst);
	$('#par_11').text(bb.onFastNumOfVar);
	$('#par_12').text(bb.onFastConstant);
	$('#par_13').text(bb.noiseOffConst);
	$('#par_14').text(bb.offFastConst);
	
	
}