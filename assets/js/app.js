$(function(){

    // headerのメニュー固定用
    $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 0) {
            $('header').css('opacity', 0.8);
          } else {
            $('header').css('opacity', 1);
          }
        });
      });

    //スクロールしたら横から出す  
    $(".main img").hide();
    $(window).on("scroll",function(){
      let photo1 =$(".main").offset().top;
      let photo2 =$("#photo1").offset().top;
      let photo3 =$(".gallery").offset().top;
      let wh = $(window).height();
     


      if(photo1 <= $(window).scrollTop()+ wh){
      $("#photo1").fadeIn(5000);
      
    }
      if(photo2 <= $(window).scrollTop()+ wh){
      $("#photo2").fadeIn(5000);
      
    }
      if(photo3 <= $(window).scrollTop()+ wh){
      $("#photo3").fadeIn(5000);
      
    }
     
    })

    // Galleryの写真をフリップさせながら出現させる
    function fadeAnime(){
      // flipLeft
      $('.gallery li').each(function(){ 
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
              $(this).addClass('flipLeft');
          }else{
              $(this).removeClass('flipLeft');
          }
      });
      }

    // TOP PAGE戻るボタン用
    $('.ToTop').on('click', function(){
      $('body, html').animate({scrollTop:0}, 500)
    });
})

