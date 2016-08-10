export const scroll = function(element){
    console.log(element)
        var $doc = jQuery('html, body');
        jQuery('.' + element).click(function() {
            $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1000);
            return false;
        });        
    }  