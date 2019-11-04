theme_tyfy= "resources/style/tyfy-bootstrap-docs.css";
theme_default = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
$('#style-toggle').click(function(e){
	e.preventDefault();
	link = $('link#docstyles');
	link_href = link.attr('href');
	if (link_href == theme_tyfy) {
		link.attr('href',theme_default);
	}
	else {
		link.attr('href',theme_tyfy);
	}
});