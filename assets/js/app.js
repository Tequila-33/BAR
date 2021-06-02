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

})