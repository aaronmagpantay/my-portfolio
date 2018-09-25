// Loader

//$(window).load(function() {
// 		// Animate loader off screen
// 	$(".se-pre-con").fadeOut("slow");;
// });	






//Scroll to Top 
$("#scrlBtn").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrlBtn").style.display = "block";
    } else {
        document.getElementById("scrlBtn").style.display = "none";
    }
}


function toggleLoader(show){
     if(show == true){
        $(".pre-load").show();
        $(".page-content").fadeOut();
     }
     else{
        $(".page-content").show();
        $(".pre-load").fadeOut();

     }
}
