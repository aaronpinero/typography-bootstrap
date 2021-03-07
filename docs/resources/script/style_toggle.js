theme_tyfy= "resources/style/tyfy-bootstrap-docs.css";
theme_default = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css";
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