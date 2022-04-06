$( document ).ready(function() {

$('.dropdown-menu a').keydown(function(e){
    switch(e.which){
        case 36: // home
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:first').focus();
            break;
        case 35: // end
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:last').focus();
            break;
    }
});

$(".moreBox").slice(0, 3).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore").show();
		}
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
        $("#view-all-news").show();
			}
		});
	

				
				$(".sidebar a.active-nav").parents('li').addClass("active-parent");
				$(".active-parent button").attr("aria-expanded","true");
				$(".active-parent button").removeClass("collapsed");
				$(".active-parent ul").addClass("nav collapse in");

	
				
});

(function ( window, document, undefined ) {

  /*
   * Grab all iframes on the page or return
   */
  var iframes = document.getElementsByTagName( 'iframe' );

  /*
   * Loop through the iframes array
   */
  for ( var i = 0; i < iframes.length; i++ ) {

    var iframe = iframes[i],

    /*
       * RegExp, extend this if you need more players
       */
    players = /www.youtube.com|player.vimeo.com/;

    /*
     * If the RegExp pattern exists within the current iframe
     */
    if ( iframe.src.search( players ) > 0 ) {

      /*
       * Calculate the video ratio based on the iframe's w/h dimensions
       */
      var videoRatio        = ( iframe.height / iframe.width ) * 100;
      
      /*
       * Replace the iframe's dimensions and position
       * the iframe absolute, this is the trick to emulate
       * the video ratio
       */
      iframe.style.position = 'absolute';
      iframe.style.top      = '0';
      iframe.style.left     = '0';
      iframe.width          = '100%';
      iframe.height         = '100%';
      
      /*
       * Wrap the iframe in a new <div> which uses a
       * dynamically fetched padding-top property based
       * on the video's w/h dimensions
       */
      var wrap              = document.createElement( 'div' );
      wrap.className        = 'fluid-vids';
      wrap.style.width      = '100%';
      wrap.style.position   = 'relative';
      wrap.style.paddingTop = videoRatio + '%';
      
      /*
       * Add the iframe inside our newly created <div>
       */
      var iframeParent      = iframe.parentNode;
      iframeParent.insertBefore( wrap, iframe );
      wrap.appendChild( iframe );

    }

  }

})( window, document );