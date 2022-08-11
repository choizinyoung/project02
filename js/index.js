$(function () {
    var firstmenu = $("nav>ul>li"),
    headerNav = $(".header_nav"),
    headerNavHeight=headerNav.height();

    firstmenu.mouseenter(function(){
        firstmenu.find("ul").hide();
        $(this).find("ul").show();
        var submenuHeight = $(this).find("ul").height();
        headerNav.stop().animate({height:submenuHeight+headerNavHeight},1000);
    });
});