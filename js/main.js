window.onload = function (){
		canvas_main = document.getElementById('main_graph');
		ctx_main = canvas_main.getContext('2d');
				
		canvas_variance = document.getElementById('variance_graph');
		ctx_variance = canvas_variance.getContext('2d');
		
		//press s to start
		 $(document).keydown(function(e) {
			if(e.which == 83) {
				startFunction();
			}
			
			else if(e.which == 82) {
				stopFunction();
			}
		});
}

function startFunction(){
	breathingAlgorithm.run();
	displayValuse();
}

function stopFunction(){
	location.reload();
	
}

var breathingEvents = {
			whichEvent : '',
			
			fireOffEvent : function(){
				document.getElementById('scrollStatus').innerHTML = "<span style='color:red'>..... No Exhelation</span>";
				document.getElementById('scrollStatus_2').innerHTML = "<span style='color:red'>..... false</span>";
				ctx_main.fillStyle = "red";
				ctx_main.fillRect(graph.row_1, 0, 2, 256);
				ctx_main.font="12px Georgia";
				ctx_main.fillText(this.whichEvent,graph.row_1,40);
				$('#par_4').html('<span style="color:red">false</span>');
			},
			
			fireOnEvent : function(){
				document.getElementById('scrollStatus').innerHTML = "<span style='color:blue'>.....  Exhelation detected</span>";
				document.getElementById('scrollStatus_2').innerHTML = "<span style='color:blue'>..... true</span>";
				ctx_main.fillStyle = "green";
				ctx_main.fillRect(graph.row_1, 0, 2, 256);
				ctx_main.font="12px Georgia";
				ctx_main.fillText(this.whichEvent,graph.row_1,20);
				$('#par_4').html('<span style="color:blue">true</span>');
			},
			
			offRunning : function(){
			
			},
			
			onRunning : function(){
			
			}
			
		}