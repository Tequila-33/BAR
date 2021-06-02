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

    // 次のものはこの下からお願いします  
})