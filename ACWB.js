$('.nav__trigger',).on('click', function(e){

  // prevent default behavior
  e.preventDefault(); 

  // add nav--active class to nav icon
  $(this).parent().toggleClass('nav--active').show(); 

  // disable scroll behind nav
  $('body').toggleClass('no-scroll'); 

});


$('.nav li, .nav').on('click', function(){
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
  $('body').removeClass('no-scroll');
});


// Accordian Action
var action = 'click';
var speed = "100";


$(document).ready(function(){

// Question handler
  $('li.question').on(action, function(){

    // gets next element
    // opens .answer of selected question
    $(this).next().slideToggle(speed)
    
    // selects all other answers and slides up any open answer
    .siblings('li.answer').slideUp();
  
    // Grab img from clicked question
    var img = $(this).children('img');

    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');

    // toggle rotate class
    img.toggleClass('rotate');


  });

});


