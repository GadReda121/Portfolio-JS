// start j.s Codes
$(document).ready(function(){

    // Start Animate
    $(".Front").hover(function(){
        $(".Front img").css({
           "transform":"rotate(10deg)",
           "transition":"all .3s ease-in-out"
        });
        },function(){
        $(".Front img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s ease-in-out"
        });
    });
    $(".ui-ux").hover(function(){
        $(".ui-ux img").css({
           "transform":"rotate(10deg)",
           "transition":"all .3s ease-in-out"
        });
        },function(){
        $(".ui-ux img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s ease-in-out"
        });
    });
    $(".youtube").hover(function(){
        $(".youtube img").css({
           "transform":"rotate(10deg)",
           "transition":"all .3s ease-in-out"
        });
        },function(){
        $(".youtube img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s ease-in-out"
        });
    });
    // End Animate

    // Start Scroll color
    $(window).scroll(function(){
        if( this.scrollY < 1300){
            $(".About").addClass("active");
        }else if (this.scrollY < 1980){
            $(".services h3").addClass("active");
            $(".Skills h3").addClass("active");
        }else if (this.scrollY < 2400){
            $(".Teams h3").addClass("active");
        }else{
            $(".Contact h3").addClass("active");
        }
    });
    // End Scroll color

    // Start Social-Team
    //Bassam
    $(".Bassam").hover(function(){
        $(".social-bassam").css({
        "display":"flex",
        "transtion":"all .5s ease-in"
        });
    },function(){
        $(".social-bassam").css({
        "display":"none",
        "transtion":"all .5s ease-out"
        });
    });
    //Mahmoud
    $(".mahmoud").hover(function(){
        $(".social-mahmoud").css({
        "display":"flex",
        "transtion":"all .5s ease-in"
        });
    },function(){
        $(".social-mahmoud").css({
        "display":"none",
        "transtion":"all .5s ease-out"
        });
    });
    //AhmedTarek
    $(".ahmed-Tarek").hover(function(){
        $(".social-ahmed").css({
        "display":"flex",
        "transtion":"all .5s ease-in"
        });
    },function(){
        $(".social-ahmed").css({
        "display":"none",
        "transtion":"all .5s ease-out"
        });
    });
    //Abbas
    $(".abbas").hover(function(){
        $(".social-abbas").css({
        "display":"flex",
        "transtion":"all .5s ease-in"
        });
    },function(){
        $(".social-abbas").css({
        "display":"none",
        "transtion":"all .5s ease-out"
        });
    });
    // End Social-Team

    // Start Mobil 

    // Start Menu Mobile

    // when click exit => menu appear
    $(".img-mob").click(function(){
        $(".navbar-mob ul").css({
            "display":"flex",
            "transition":"all .5s ease-in"
        });
        $(".img-mob-exit").css("display","flex");
        $(".img-mob").css("display","none");
    });
    // When click navbar ul li a => navbar disappear
    $(".navbar-mob ul li a").click(function(){
        $(".navbar-mob ul").css("display","none");
        $(".img-mob").css("display","flex");
        $(".img-mob-exit").css("display","none");
    });
    // when click exit => menu disappear
    $(".img-mob-exit").click(function(){
        $(".navbar-mob ul").css({
            "display":"none",
            "transition":"all .5s ease-out"
        });
        $(".img-mob").css("display","flex");
        $(".img-mob-exit").css("display","none");
    });

    // End Menu Mobile

    // Covert Hover => Focus 
    $(".contain").click(function(){
        $("section .contain").css({
            "border":"3px solid goldenrod",
            "border-right":"transparent",
            "border-left":"transparent",
            "transition":"all .3s ease",
            "border-radius":"10px",
            "cursor":"pointer"
        });
        $(".contain img").css({
            "transform":"scale(1.1,1.1)",
            "transition":"all .3s ease-in-out",
            "cursor":"pointer"
        });
    });
    // End Mobile
    
});

// End J.S Codes