// 穴埋め形式です。空いている個所を埋めて実装してください

$(function () {
  
  /*-----------------------------------------
                スライド
  ------------------------------------------*/
  $(".slider-item").slick({
    
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    
  
  });



  /*-----------------------------------------
           スムーススクロール
  ------------------------------------------*/
    let pagetop = $(".top-btn");

    pagetop.hide();

  $(window).scroll(function () {

      if ($(window).scrollTop() >800 ) {
      
        pagetop.fadeIn();
    } else {
      
        pagetop.fadeOut();
    }
  });

    pagetop.click(function () {

    $("body,html").animate({ scrollTop: 0 },500 );
    return false;
  });

/*=================================================
  ハンバーガーメニュー
  ===================================================*/

   
      $(".hamburger").on("click", function () {

      if ($("header").hasClass("open")) {

        $("header").removeClass("open");
      }else{
      
        $("header").addClass("open");

      }
    });

     $("#mask").on("click", function () {

        $("header").removeClass("open");

    });

    $("#nav").on("click", function () {

        $("header").removeClass("open");

    });



});
