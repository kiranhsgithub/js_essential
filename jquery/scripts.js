$("#myDiv").addClass("highlight");
$("li:last").addClass("highlight");
$("p:not(:contains('specified'))").removeClass("highlight");
$("#clickMe").click(function () {
    $("#clickMe").text("You clicked me");
});
$("#clickMeUsingThis").click(function () {
    $("#clickMeUsingThis").text("You clicked me and text is changed using \"this\"");
});
$("#fiveSeconds").hide(5000);
$("#fiveSecondsFadeout").click(function() {
    $(this).fadeOut(5000);
});

