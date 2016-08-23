export const scroll = function(element){
    var doc = jQuery('html, body');
    jQuery('.' + element).click(function() {
        doc.animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });
}  


export const resize = function(callback){
    jQuery(window).resize(function(e){
        callback(e)                   
	});
}  

export const scrolltop = function(callback){
    jQuery(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        callback(sc)
    });
} 





