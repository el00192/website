(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.gallery-container').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('.gallery-item').each(function() {
					var anchorEl = $(this);
					var $href   = anchorEl.attr('href'),
                        $size   = anchorEl.data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }
					// .description content
					if (anchorEl.parent().children('.description').length > 0) {
						item.title = anchorEl.parent().children('.description')[0].innerHTML; 
					}
                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();
            
            //var $index = $(this).index();
            var options = {
                //index: $index,
				index: 0,
                bgOpacity: 0.7,
                showHideOpacity: true
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);