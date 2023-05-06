jQuery(document).ready(function() {
	var el = document.getElementById("trigger");
	jQuery(window).on('scroll', function() {		  
	  if ( el.offsetTop <= document.documentElement.scrollTop + window.innerHeight / 2 ) {
				  jQuery('.skillbar').each(function() {
			jQuery(this).find('.skillbar-bar').animate({
			  width: jQuery(this).attr('data-percent')
			}, 4000);
		  });

	  }
	})
});