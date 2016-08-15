export const scroll = function(element){
        var doc = jQuery('html, body');
        jQuery('.' + element).click(function() {
            doc.animate({
                scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top
            }, 1000);
            return false;
        });
        jQuery('.button-collapse').sideNav('hide');        
    }  