$(".header-title__btn").click(function(t) {
    t.preventDefault(); 
    $("#overlay").fadeIn(400, function() {
    	console.log('click');
        $("#modal-form").css("display", "block").animate({
            opacity: 1,
            top: "30%"
        }, 200), $(".top__line").css("z-index", "100000"), $(".header-title__text, .header-title__btn").css("z-index", "10")
    })
}), $("#modal-close, #overlay").click(function() {
    $("#modal-form").animate({
        opacity: 0,
        top: "45%"
    }, 200, function() {
        $(this).css("display", "none"), $("#overlay").fadeOut(400), $(".top__line").css("z-index", "1000000")
    })
});