$(".nav-link").click(function(){
    $(".nav-link").removeClass("act");
    $(this).addClass("act");
})
$(window).scroll(function(){
    //스크롤을 하면
    if($(window).scrollTop()>450){
        //스크롤의 위치가 ~보다 커지면
        $("body").addClass("scroll")
    }else{
        //body에 scroll 클래스 삽입
        $("body").removeClass("scroll")
    }
})
