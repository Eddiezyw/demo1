
$(function(){
    $(".main-nav>ul>li").mouseenter(function(){
        $(this).find("ol").stop(false,true).slideDown(300);
        $(this).children("a").addClass("chosen");
    }).mouseleave(function(){
        $(this).find("ol").stop(false,true).slideUp(300);
        $(this).children("a").removeClass("chosen");
    });
});
$(function(){
    $(".tab-head li").on("click",function(){
        var num = parseInt($(".tab-head li").index(this));
        event.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content").eq(num).fadeIn(100).siblings().fadeOut(100);
    });
});

//顶部菜单	
$(window).scroll(function(){
if ($(window).scrollTop()>145){
$("#head-nav").css("position","fixed");
$("#head-nav").css("top","0px");
//$("#head-nav").css("border-bottom-width","2px");
//$("#head-nav").css("border-bottom-color","#BC0303");
//$("#head-nav").css("border-bottom-style","solid");
$("#head-nav").css("box-shadow","0 3px 6px #666");
$("#kong_55").show();
}
else
{
$("#head-nav").css("position","inherit");
$("#head-nav").css("top","");
//$("#head-nav").css("border-bottom-width","0px");
$("#head-nav").css("box-shadow","none");
$("#kong_55").hide();
}
});
