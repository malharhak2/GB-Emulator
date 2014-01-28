requirejs.config ({
	baseUrl : "js/",

	paths : {
		"jquery" : "bower_components/jquery/jquery.min"
	},
	shim : {
		"jquery" : {
			exports : "$"
		}
	},
	urlArgs : "d=" + Date.now()
});

require(["gbemu"], function (gbemu) {
	console.log("sup");
});