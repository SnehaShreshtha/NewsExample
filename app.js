$(document).ready(function(){
	$('.js-like').on('click',function(event){
		event.preventDefault();
		
		$(this).text('Liked!!');
	});

	$('.js-add-text').on('click',function(event){
		event.preventDefault();
		
		$(this).closest('.content').find('.form').toggleClass('show-form');
	});
});