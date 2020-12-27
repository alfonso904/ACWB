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


