

/*Draw frequency power window and frequency variance*/
/*Canvas elements are difined in main.js on load*/

var graph = {
	
	// Global Variables for the Graphics
		graphsWidth : function(){
			
            
			var cont2_width = $('.content').width();
			
			if(cont2_width > 1000){
				return parseInt($('#main_graph').css('width'));
				
			}
			else{
				 
                return 700;
               
			}
		},
		
		row_1 : 0,
		row_2 : 0,
			
	drawFrequencySum : function(){
			var bre = breathingAlgorithm;
			//set graph variables
			var canvasWidth = graph.graphsWidth();
            var canvasWidtClear = parseInt($('#main_graph').css('width'));
			var canvasHeight = 256;
	
			var y_gPow = canvasHeight - (bre.pow/256);
			var y_gVariance =  Math.round(bre.pwVariance/128);
			var y_gnoiseLevel = canvasHeight - (bre.noiseLevel/256);
			var y_gThrOnFast =  canvasHeight - (bre.ThrOnFast/256);
			var y_gmaxVariance = Math.round(-bre.minVariance/128);
			var y_gminVariance = Math.round(bre.minVariance/128);
			var y_gminoffVariance = Math.round(bre.varOffVar/128);
			
			//draw main graph
			ctx_main.fillStyle = "#ffffff";
			ctx_main.fillRect(this.row_1, y_gPow-2, 2, 2);
			
			ctx_main.fillStyle = "gray";
			ctx_main.fillRect(this.row_1, y_gnoiseLevel-2, 2, 2);
			
			ctx_main.fillStyle = "red";
			ctx_main.fillRect(this.row_1, y_gThrOnFast-2, 2, 2);
			
			//draw variance graph
			if(y_gVariance == 0){
					y_gVariance = 1;
			}
		
			ctx_variance.fillStyle = "red";
			ctx_variance.fillRect(this.row_1, 125, 1, -y_gVariance);
			
			if(this.row_1 >= canvasWidth){
				this.row_1 = 0;
				clearCanvasFrequency();
			}
			
			this.row_1 = this.row_1 + 1;
			
			function clearCanvasFrequency(){
				ctx_main.clearRect(0, 0, canvasWidtClear, canvasHeight);
				ctx_variance.clearRect(0, 0, canvasWidtClear, canvasHeight);
			}
			
			if(y_gmaxVariance == 256){
				y_gmaxVariance = 0;
				y_gminVariance = 0;
			}
			
			if(bre.minVariance != 0){
				ctx_variance.fillStyle = "blue";
				ctx_variance.fillRect(this.row_1, 125-y_gmaxVariance, 2, 2);
				ctx_variance.fillRect(this.row_1, 125-y_gminVariance, 2, 2);
			}
			
			if(y_gminoffVariance != 0){
				ctx_variance.fillStyle = "orange";
				ctx_variance.fillRect(this.row_1, 125-y_gminoffVariance, 2, 2);
			}
			
		
	}
}

