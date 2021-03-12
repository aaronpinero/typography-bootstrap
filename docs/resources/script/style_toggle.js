var theme_tyfy = "resources/style/tyfy-bootstrap-docs.css";
var theme_default = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css";
var style_toggle = document.querySelector('#style-toggle');
style_toggle.addEventListener('click',function(e){
	e.preventDefault();
	var stylesheet_link = document.querySelector('#docstyles');
	var stylesheet_link_href = stylesheet_link.getAttribute('href');
	if (stylesheet_link_href == theme_tyfy) {
		stylesheet_link.setAttribute('href',theme_default);
	}
	else {
		stylesheet_link.setAttribute('href',theme_tyfy);
	}
});