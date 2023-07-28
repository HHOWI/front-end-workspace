// 1. show, hide, toggle
$("#show").on("click", function () {
  $("#img").show(5000);
});
$("#hide").on("click", function () {
  $("#img").hide(5000);
});
$("#toggle").on("click", function () {
  $("#img").toggle(5000);
});

// 2. fadeIn, fadeOut, fadeToggle
$("#fadeIn").on("click", function () {
  $("#img").fadeIn(3000);
});
$("#fadeOut").on("click", function () {
  $("#img").fadeOut(3000);
});
$("#fadeToggle").on("click", function () {
  $("#img").fadeToggle(3000);
});

$("#img").hover(
  function () {
    $(this).fadeTo(1000, 0.5);
  },
  function () {
    $(this).fadeTo(1000, 1);
  }
);

$(".menu").on("click", function (e) {
  const content = $(e.target).next();
  // if(content.css('display') === 'none') {
  //     content.slideDown();
  // } else {
  //     content.slideUp();
  // }
  // content.slideToggle(500);
  $(".contents").slideUp();
  content.slideDown();
});
