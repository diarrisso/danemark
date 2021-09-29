




$(document).ready(function(){
  $(".hamburger a").click(function(){
      $(".menu-overlay").fadeToggle(200);
     $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
});
$('.menu-overlay').on('click', function(){
  $(".menu-overlay").fadeToggle(200);   
  $(".hamburger a").toggleClass('btn-open').toggleClass('btn-close');
  open = false;
});




