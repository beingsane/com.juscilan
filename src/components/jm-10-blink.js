export const blink = function(element){
   
   var count = 0;
   
   do {
        $('#' + element).fadeIn(500).fadeOut(500)
        count++
   }while(count < 10)
   
}  