$(function(){
	
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
			beforeSend : function(data) {
				console.log( "beforeSend" );
				$("body").append($("<div class=loading>loading...</div>"));
			},
			success: function(json) {
				$(".loading").remove();
				var data = JSON.parse(json);
				var images = data.data;
				$.each(images, function(index, image) {
					var title = image.caption.text;
					var thumbnail = $("<img>").attr("src",image.images.thumbnail.url);
					var item = $("<div>").append( $("<h2>").append(title) ).append( thumbnail );
					$(".search-result").append( item );
				});
			}
		});
	});
});
