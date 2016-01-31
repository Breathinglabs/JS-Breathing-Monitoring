$(document).ready(function(){
			

			//For enter parameters
			var getInValue;
						
			$("input").click(function(){
				getInValue = $(this).val();
			});
			
			$("input").keyup(function(){
				
				if($(this).val() != getInValue){
					if(isNaN($(this).val())){
						$('#paramWarning').text('Note: Please enter a number  !!!!!!!!!!!!!!!');
						$('#paramWarning').css('color','red');
					}
					else{
						$('#paramWarning').text('Submit new values!');
						$('#paramWarning').css('color','red');
					}
					
				}
				else{
					$('#paramWarning').text('');
					$('#paramWarning').css('color','red');
				}	
			});
			
			//For explanation section
			$('.explanation .node-add').after('<div class="arrows"><div class="arrow-right"></div></div>');
			
			var allHeight = ($('.explanation').innerHeight());
			
			$('.explanation > div').not('.explanation div div, .explanation .node_event').each(function(){
				var divHeight = $(this).outerHeight();
				var cssHeight = (allHeight - divHeight)/2;
				$(this).css('margin-top', cssHeight);
			});
			
			$('.explanation, .parameters .param_hide').hide();
			$('.menu ul li:nth-child(1)').toggle(function(){
				$('.explanation').fadeIn(1000);
				$(this).find('a').text('Hide explanation').css('border-bottom','2px solid gray');},
				function(){
				$('.explanation').hide(1000);
				$(this).find('a').text('Algorithm Explanation').css('border-bottom','none');}
			
			);
			
			$('.menu ul li:nth-child(2)').toggle(function(){
				$('.parameters .param_hide').show(1000);
				$(this).find('a').text('Hide parameters').css('border-bottom','2px solid gray');
				$('.paramChange_title').text('Set Parameters');},
				function(){
				$('.parameters .param_hide').hide(1000);
				$(this).find('a').text('Set Parameters').css('border-bottom','none');
				$('.paramChange_title').text('Parameters');}
			
			);
						
		});
	