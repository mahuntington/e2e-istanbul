(function($){
	$(function(){
		$('a').click(function(){
			$('body').append('<div id="jQueryAddedDiv">added through jquery</div>');
		});
	});
})(jQuery);