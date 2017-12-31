$(document).ready(function(){
	current_page = window.location.href;
	$('.nav-link').each(function(){
		url = $(this).attr('href');
		if (current_page.indexOf(url) != -1) {
			$(this).parent().addClass('active');
		}
	});
});