// JavaScript Document

//alert("replacer");

function trim( s ) {	
	s.trim();
	s.replace(/\s/g, ' ');
	alert(s);
	return s;
}

function generate() {
	var codes = $("#codes").val();
	
	codes = trim(codes);
	
	alert(codes);
	$("#newCodes").val(codes);
}


/*
(function($) {
	var codes = $("#codes").val();
	
	window.Processor = (function() {
		
	}
})();
*/