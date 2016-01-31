var displayData = {
	startTb: false,
		
	startTextb : function(getValue){ //call in algorithm.js line 185
		var br = breathingAlgorithm	;
		var textbox = document.getElementById('textbox');
		var previusText;
		
		if(getValue == 'true'){
			previusText = textbox.value;
			textbox.value =  previusText +"\n\n \nPower   |    Noise level    |   Thr On Fast      |      Variance     |       Max variance      |      Min variance       |          offVariance     |       On event\n ---------------------------------------------------------------------------------------------------------------------------------------------------------------";
			
			displayData.startTb = true;
			getValue = 'false';
		}
		
		
		else if(getValue != 'true' && displayData.startTb == true){
				previusText = textbox.value;
				textbox.value = previusText +'\n'+ br.pow +'       |       '+ br.noiseLevel +'       |       '+ br.ThrOnFast +'       |       '+br.pwVariance+'       |       '+br.maxVariance+'       |       '+br.minVariance+'       |       '+br.varOffVar+'       |       '+br.functionRunning;
				
			}
	},

	stopTextb : function (){
				displayData.startTb = false;
	},	
			
	clearTb :function (){
		textbox.value = "";
		startTb = false;
	}
}


