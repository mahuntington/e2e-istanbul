(function($){
	$(function(){
		$('h1').click(function(){
			$('body').append('<div>added through jquery</div>');
		})
	});
})(jQuery);