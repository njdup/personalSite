$(document).ready(function() {
	$('.portfolio-item').hide();
	$('.active').show();
    });


var index = 1;
var maxindex = $('#portfolio-section > div').length;


$(document).ready(function() { 
	$('.portfolio-slide').click(function(){
		$('.active').fadeOut(750).removeClass('active');
		$('#portfolio-section > div:eq(' + index + ')')
		    .addClass('active')
		    .fadeIn(750);
		index = (index < maxindex - 1) ? index + 1 : 0;
	    });
    });



	
       