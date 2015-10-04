$(function(){
	
});

var form = $(".search-form");
form.on("submit", function(e){
	e.preventDefault();
	
	var q = $(this).find(".search-text").val();
	var ajax = JqueryAjax();
	ajax.get({
		url: "/api/images/find",
		data: {
			tag_name: q,
		},
		success: function(data) {
			console.log( data );
		}
	});
});
