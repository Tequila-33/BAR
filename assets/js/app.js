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

    // galleryの画像にmouseoverしたら、大きくなる
  //   $(".gallery img").on("mouseover", function () {
  //     $(this).toggleClass("large-size");
  // });

    // 次のものはこの下からお願いします
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

})
    // TOP PAGE戻るボタン用
    $('.ToTop').on('click', function(){
      $('body, html').animate({scrollTop:0}, 500)
    });

