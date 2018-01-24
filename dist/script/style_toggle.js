theme_tyfy = "../dist/style/style.css";
theme_default = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
$('#style-toggle').click(function(e){
	e.preventDefault();
	link = $('link#mainstyles');
	link_href = link.attr('href');
	if (link_href == theme_tyfy) {
		link.attr('href',theme_default);
	}
	else {
		link.attr('href',theme_tyfy);
	}
});