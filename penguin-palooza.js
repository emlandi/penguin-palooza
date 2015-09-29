$(document).ready(function(){
  alert("Caution: Penguins Ahead");

  $("body").css("background-color", "lightblue")
  .append("These are my penguin friends!")
  .css("color", "white")
  .css("font-size", 30)
  .css("text-align", "center");

  $("button").css("color", "darkorange")
 .css("font-family", "Georgia")
 .css("margin", 5)
 .css("padding", 20);

  $(window).on("resize", function() {
    var imgWidth = $(window).width() / 4.0;
    var imgHeight = imgWidth * 0.8;
    $("li img").width(imgWidth)
    .height(imgHeight);
  });

  $("ul").on("click", "li", function() {
    $ul = $(this).parent();
    $(this).remove()
    .appendTo($ul);
  });

});


