// Back to Top by @AaronGoff

var back_to_top = (function() {
	return {
		init: function() {
            var plugin = proboards.plugin.get('back_to_top');
			var settings = (plugin)? plugin.settings : false;

            // Horizontal position
            var hPosition;
            if (settings.horizontal_position == 1) hPosition = 'left: 15px;';  // left
            if (settings.horizontal_position == 2) hPosition = 'right: 15px;'; // right
            
            // Vertical position
            var vPosition;
            if (settings.vertical_position == 1) vPosition = 'top: 0px;';     // top (adjust later)
			if (settings.vertical_position == 2) vPosition = 'bottom: 50%;';   // middle
			if (settings.vertical_position == 3) vPosition = 'bottom: 23px;';  // bottom
            
            // Default background color
            // Remove default statements in next release
            var backgroundColor;
            var backgroundColorHover;
            if (!settings.background_color) {
            	backgroundColor = '#000000';
            } else {
            	backgroundColor = '#' + settings.background_color;   
            }
            
            if (!settings.background_color_hover) {
            	backgroundColorHover = '#000000';   
            } else {
             	backgroundColorHover = '#' + settings.background_color_hover;   
            }
            
            if (settings.transparent_background) {
            	backgroundColor = 'transparent';
                backgroundColorHover = 'transparent';
            }
            
            // Arrow color & size
            var arrow;
            var arrow_down;
            var dimensions;
            if (settings.arrow_color && !(settings.back_to_top_image || settings.go_to_bottom_image)) {
                if (settings.arrow_size == 1) {
                	dimensions = 'width="16" height="16"';
                }
                if (settings.arrow_size == 2) {
                	dimensions = 'width="24" height="24"';
                }
                if (settings.arrow_size == 3) {
                	dimensions = 'width="32" height="32"';
                }
            }
            if (settings.arrow_color == 1) {
                arrow = 'http://i.imgur.com/tZow8hc.png'; // white
                arrow_down = 'http://i.imgur.com/BBInBzV.png';
            }
            if (settings.arrow_color == 2) {
            	arrow = 'http://i.imgur.com/jg11Zxi.png'; // black
                arrow_down ='http://i.imgur.com/liDwk5z.png';
            }
            
            // Custom images
            //var ;
            if (settings.back_to_top_image) {
                arrow = settings.back_to_top_image; // custom up
            }
            if (settings.go_to_bottom_image) {
                arrow_down = settings.go_to_bottom_image; // custom bottom
            }
            
            // Default opacity
            var opacity;
            var opacityHover;
            if (!settings.opacity) {
            	opacity = '1.0';
            } else {
                opacity = settings.opacity;   
            }
            
            if (!settings.opacity_hover) {
            	opacityHover = '1.0';   
            } else {
             	opacityHover = settings.opacity_hover;   
            }
            
            if (settings.go_to_bottom) {
                $('body').append('<a href="#" id="go-to-bottom" style="position: fixed; ' + hPosition + ' ' + vPosition + ' margin: 15px 0; padding: 12px 20px 8px; text-align: center; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; text-decoration: none; background-color: ' + backgroundColor + '; opacity: ' + opacity + ';"><img src="' + arrow_down + '" ' + dimensions + ' /></a>')
            }
            $('body').append('<a href="#" id="back-to-top" style="display: none; position: fixed; ' + hPosition + ' ' + vPosition + ' margin: 15px 0; padding: 10px 20px; text-align: center; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; text-decoration: none; background-color: ' + backgroundColor + '; opacity: ' + opacity + ';"><img src="' + arrow + '" ' + dimensions + ' /></a>')

			//parseFloat(opacity) + 0.1

            $('a#go-to-bottom, a#back-to-top').mouseover(function() { $(this).css('background-color', backgroundColorHover); $(this).css('opacity', opacityHover); });
            $('a#go-to-bottom, a#back-to-top').mouseout(function() { $(this).css('background-color', backgroundColor); $(this).css('opacity', opacity); });

            // Scroll animation
            if (settings.scroll_animation == 1) {
                $('a#go-to-bottom').click(function() {
                    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() });
 					return false;
                });
                $('a#back-to-top').click(function() {
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                    return false;
                });
            } else {
             	$('a#go-to-bottom').click(function() {
                    $('html, body').scrollTop($(document).height());
                   return false; 
                });
            }
            
            // Fade in/out
            $(window).scroll(function() {
                if ($(this).scrollTop() > 300) {
                    if (settings.fade_inout == 1 && !settings.go_to_bottom) { // Fade in/out only works when Go to Top not enabled
                        $('a#go-to-bottom').fadeOut(600);
                        $('a#back-to-top').fadeIn(600);
                    } else {
                        $('a#go-to-bottom').hide();
                        $('a#back-to-top').show();
                    }
                } else {
                    if (settings.fade_inout == 1 && !settings.go_to_bottom) {
                        $('a#go-to-bottom').fadeIn(600);
                        $('a#back-to-top').fadeOut(600);
                    } else {
                        $('a#go-to-bottom').show();
                        $('a#back-to-top').hide();
                    }
                }
            });

		}
	};
})();

$(function() {
	back_to_top.init();
});