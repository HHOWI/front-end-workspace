const regExp = /^[a-zA-z0-9!-/:-@[-`{-~]{8,32}$/;

$("#password").on("click", function () {
  $(".password").text("영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자");
});
