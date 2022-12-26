
$(function(){

    $( '.banner-wrapper' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:".left",
        nextArrow:".right",
        pauseOnHover: true
      });

    $( '.service-main-wrapper' ).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,        
        prevArrow:".service-top",
        nextArrow:".service-bottom",
        pauseOnHover: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          }
        ]
      });

    $( '.main-review-slider' ).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,        
        prevArrow:".review-top",
        nextArrow:".review-bottom",
        pauseOnHover: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.main-text',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false
            }
          }
        ]
      });

    $( '.main-text' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,        
        pauseOnHover: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.main-review-slider',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false     
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,  
              vertical: false   
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,  
              vertical: false   
            }
          }
        ]
      });

    $( '.counter' ).counterUp({
        delay: 10,
        time: 1000
    });

    $( '.icon-wrap' ).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,        
      pauseOnHover: true,
      vertical: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,     
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,     
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,     
          }
        }
      ]
    });

    $( window ).on('scroll', function(){
      let scroll = $( this ).scrollTop()
      if( scroll > 200 ){
        $( '#btt' ).fadeIn(100)
      }

      else{
        $( '#btt' ).fadeOut(100)        
      }
    })

    $('.btt').on('click', function(){
      $('html,body').animate({scrollTop: 0},1000)
    })
});

$( window ).on('scroll', function(){
  let sticky= $( this ).scrollTop()
  if( sticky > 200 ){
    $( '.navbar' ).addClass( 'navbar-sticky' )
  }

  else{
    $( '.navbar' ).removeClass( 'navbar-sticky' )
  }
})

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'circle'
});

