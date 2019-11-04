$(document).ready(function(){
	current_page = window.location.href;
	$('.navbar a').each(function(){
		url = $(this).attr('href');
		if (current_page.indexOf(url) != -1) {
			$(this).addClass('active');
		}
	});
});