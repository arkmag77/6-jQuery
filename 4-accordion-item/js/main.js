$(document).ready(function() {

    $('.accordion-item').click(function(){
      
        

        if($(this).hasClass('open')){
            
            $(this).find(`.accordion-content`).slideUp();
            $(this).removeClass('open');

        } else {

            $(this).find(`.accordion-content`).slideDown();
            $(this).addClass('open');
        }
      
    });

    /* $('.accordion-item').click(function(){
        console.log(`klik2`);
        
        $(this).find(`.accordion-content open`).slideUp();
      }); */
  

})