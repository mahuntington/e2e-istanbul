(function($){
	$(function(){
		$('a').click(function(){
			$('body').append('<div id="jQueryAddedDiv">added through jquery</div>');
		});
	});
	$(function(){
		$('div').click(function(){
			$('body').append('this also worked!!!'); //coverage report should show this line was not run
		});
	})
})(jQuery);
