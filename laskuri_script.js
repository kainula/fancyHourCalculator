
$(document).ready(function(){
	$('#calculate').click(function(){
		$('#answer h1').empty()
		var today = new Date();
		
		var start = $('input[name=start-time]').val().split(':', 2);
		var start_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), start[0], start[1]);
		
		var end = $('input[name=end-time]').val().split(':', 2);
		var end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), end[0], end[1]);
		var lunch = $('input[name=lunch-time]').val().split(':', 2);
		var lunch_sec = (parseInt(lunch[0])*60 + parseInt(lunch[1]))*60*1000;
		
			
		var working_time =  (end_date-start_date-lunch_sec)/1000/60;
		var work_hour = Math.floor(working_time / 60);
		var work_min = working_time%60;
		$('#answer').append('<h1>You worked ' + work_hour + ' hours and ' + work_min + ' minutes</h1>')
	});

	var calculateHours = function(start_time, end_time, lunch_time){
		
		


	};
});