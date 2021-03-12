
var current_page = window.location.href;
var nav_links = document.querySelectorAll('.navbar-tybs .nav-link');
nav_links.forEach(function(link){
	var url = link.getAttribute('href');
	if (current_page.indexOf(url) != -1) {
		link.classList.add('active');
	}
});