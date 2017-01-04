$("#myDiv").addClass("highlight");
$("li:last").addClass("highlight");
$("p:not(:contains('specified'))").removeClass("highlight");
$("#fiveSeconds").hide(5000);
$("#clickMe").click(function () {
    $("#clickMe").text("You clicked me");
});
$("#clickMeUsingThis").click(function () {
    $("#clickMeUsingThis").text("You clicked me and text is changed using \"this\"");
});

