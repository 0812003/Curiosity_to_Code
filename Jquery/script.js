$("h1").addClass("big-title");

$("h1").text("bye");

$("h1").html("<em>bye<em>");

$("h1").click(function(){
    $("h1").css("color","red");
})

$("button").click(function(){
    $("h1").css("color","red");
})

console.log($("h1").attr("class"));

$(document).keydown(function(event){
    var key=(event.key);
    $("h1").text(key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})

$("h1").before("<button>new<button>");
$("h1").after("<button>new<button>");
$("h1").prepend("<button>new<button>");
$("h1").append("<button>new<button>");

$("button").click(function(){
    $("h1").hide(); //.show() - for showing hide element;
})

$("button").click(function(){
    $("h1").toggle(); 
})

$("button").click(function(){
    $("h1").fadeOut(); //.fadeIn() - for showing hide element;
})

$("button").click(function(){
    $("h1").fadeToggle(); 
})

$("button").click(function(){
    $("h1").slideUp(); //.slideDown() - for showing hide element;
})

$("button").click(function(){
    $("h1").slideToggle(); 
})

$("h1").click(function(){
    $("h1").animate({opacity:0.5});
})

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})