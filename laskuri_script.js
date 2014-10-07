
$(document).ready(function(){

	var lunch = [0, 30]

	var calculateMinutes = function(start_time, end_time, lunch_time){
		var today = new Date();
		var start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), start_time[0], start_time[1]);
		var end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), end_time[0], end_time[1]);
		var lunch_sec = (parseInt(lunch_time[0])*60 + parseInt(lunch_time[1]))*60*1000;

		return  (end_date-start_date-lunch_sec)/1000/60;
		
		


	};
	$('#timeform').change(function(){
		$('#answer h1').empty()
		
		//values from form		
		var start = $('input[name=start-time]').val().split(':', 2);		
		var end = $('input[name=end-time]').val().split(':', 2);		
		
		if($('input[name=lunch-time]').val()){
			lunch = $('input[name=lunch-time]').val().split(':', 2);

		}
		
					
		var working_time =  calculateMinutes(start, end, lunch);

		//Formatting for display
		var work_hour = Math.floor(working_time / 60);
		var work_min = working_time%60;
		$('#answer').append('<h1>You worked ' + work_hour + ' hours and ' + work_min + ' minutes</h1>')
	});

	
});