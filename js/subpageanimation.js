$(".progress-bar").css("width", "0px");

$(function () {
    $(".progress-bar").each(function () {
        var finalwidth = parseInt($(this).attr("aria-valuenow"));
        $(this).css("width", "0px").animate({ width: finalwidth + "%" }, 2500, "swing");
    })
})

// $(".btn").click(function(){
//     $(this).toggle(1000);
//     $(this).toggle(1000);
//     // if($(".btn").css("display") === "none"){
//     //     $(".btn").css("display","flex"); 
//     // }
// })

var clipboard = new ClipboardJS('.btn');