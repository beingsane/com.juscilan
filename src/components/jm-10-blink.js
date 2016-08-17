export const blink = function(element){
   
   var count = 0;
   
   do {
        $('#' + element).fadeOut(500).fadeIn(500)
        count++
   }while(count < 10)
   
   $('#' + element).hide()    
}  