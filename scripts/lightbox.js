function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  $('.mySlides').each(function(i1,obj) {
    if(i1 == (n -1 )){
       $(this).fadeIn();
    
      var nextWidth =  $('.next').outerWidth()/2;
      var prevWidth =   $('.prev').outerWidth()/2;
      $w = $(this).find('img').width();
      var $right = $(this).find('img').offset().left +  $w ;
      var $left = $(this).find('img').offset().left  ;
      $('.prev').offset({left: $left - prevWidth });
      $('.next').offset({left: $right - nextWidth });
 
    }
  }); 


  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  $('.modal-content').width($(window).width()-125);
  $('.modal-content').height($(window).height()-65);
    // $('.mySlides img').height($(window).height()-200);
   $('.mySlides img').css( "maxWidth", ($('.modal-content').width()  + "px" ));
   $('.mySlides img').css( "maxHeight", ($('.modal-content').height()-125  + "px" ));

   

  // console.log($(document).width());
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  
//   console.log((dots[slideIndex-1]);
//   captionText.innerHTML = dots[slideIndex-1].attr("data-text");
}