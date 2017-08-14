/*导航栏置顶*/
$(function () {
    var nav=$(".nav");
    var win=$(window);
    var sc=$(document);
    win.scroll(function () {
        if(sc.scrollTop()>=0.1){
            nav.addClass("fixedNav");
        }
        else{
            nav.removeClass("fixedNav");

        }

        if(sc.scrollTop()<680)
        {
            $(".nav #navRight a").removeClass("aActive").addClass("aIni");
        }

        if(sc.scrollTop()>=680)
        {
            $(".nav #navRight a").removeClass("aActive").addClass("aIni").eq(2).addClass("aActive").removeClass("aIni");
        }

        if(sc.scrollTop()>=1360)
        {
            $(".nav #navRight a").removeClass("aActive").addClass("aIni").eq(1).addClass("aActive").removeClass("aIni");
        }

        if(sc.scrollTop()>=3260)
        {
            $(".nav #navRight a").removeClass("aActive").addClass("aIni").eq(0).addClass("aActive").removeClass("aIni");
        }

    });

    $("#aProject,#aDesign,#aAbout,#aHome,#btn1").click(function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
    });

    $(".pic1").hover(function() {
        $(this).attr("src",$(this).attr("src").replace("_out","_over"));
    },function() {
        $(this).attr("src",$(this).attr("src").replace("_over","_out"));
    });

});


