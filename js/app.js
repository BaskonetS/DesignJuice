$ (function() {

  let reviews__slider = $("#reviews__slider");

  reviews__slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,     
      //fade:true,

      responsive: [
        {
          breakpoint: 1700,
          settings: {  
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {  
            slidesToShow: 1,
            fade:true,            
          }
        },
        
      ]
  }); 

  $('.header-burger').click(function(event) {
    $('.header-burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__nav').click(function(){
    $('.header-burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });  

  /* smooth scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId= $(this).data('scroll');
    let elementOffset= $(elementId).offset().top;
    

    $("html, body").animate({
      scrollTop: elementOffset- 70 
    }, 700);

  });


});