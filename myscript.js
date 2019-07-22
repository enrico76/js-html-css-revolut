console.log("initial script");

$( document ).ready(function() {


  $(".container").click(
     function(){
    
          $(this).children('.drop').toggleClass('active');
          console.log($(this).children('.drop'));
     }
  );


});
