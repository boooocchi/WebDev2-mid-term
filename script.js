//caroussel

$(".fa-chevron-right").click(function () {
  if ($(".tag1").hasClass("active")) {
    $(".tag1").removeClass("active");
    $(".tag2").addClass("active");
  } else if ($(".tag2").hasClass("active")) {
    $(".tag2").removeClass("active");
    $(".tag3").addClass("active");
  } else if ($(".tag3").hasClass("active")) {
    $(".tag3").removeClass("active");
    $(".tag4").addClass("active");
  } else if ($(".tag4").hasClass("active")) {
    $(".tag4").removeClass("active");
    $(".tag1").addClass("active");
  }

  if ($(".card1").hasClass("current")) {
    $(".card1").removeClass("current").addClass("left");
  } else if ($(".card1").hasClass("third")) {
    $(".card1").removeClass("third").addClass("next");
  } else if ($(".card1").hasClass("next")) {
    $(".card1").removeClass("next").addClass("current");
  } else if ($(".card1").hasClass("left")) {
    $(".card1").removeClass("left").addClass("third");
  }

  if ($(".card2").hasClass("current")) {
    $(".card2").removeClass("current").addClass("left");
  } else if ($(".card2").hasClass("third")) {
    $(".card2").removeClass("third").addClass("next");
  } else if ($(".card2").hasClass("next")) {
    $(".card2").removeClass("next").addClass("current");
  } else if ($(".card2").hasClass("left")) {
    $(".card2").removeClass("left").addClass("third");
  }
  if ($(".card3").hasClass("current")) {
    $(".card3").removeClass("current").addClass("left");
  } else if ($(".card3").hasClass("third")) {
    $(".card3").removeClass("third").addClass("next");
  } else if ($(".card3").hasClass("next")) {
    $(".card3").removeClass("next").addClass("current");
  } else if ($(".card3").hasClass("left")) {
    $(".card3").removeClass("left").addClass("third");
  }

  if ($(".card4").hasClass("current")) {
    $(".card4").removeClass("current").addClass("left");
  } else if ($(".card4").hasClass("third")) {
    $(".card4").removeClass("third").addClass("next");
  } else if ($(".card4").hasClass("next")) {
    $(".card4").removeClass("next").addClass("current");
  } else if ($(".card4").hasClass("left")) {
    $(".card4").removeClass("left").addClass("third");
  }
});

$(document).click(function (e) {
  if (!e.target.closest(".inside-cart") && !e.target.closest(".cart")) {
    $(".inside-cart").removeClass("viewCart");
    $(".fukidashi").removeClass("viewFukidashi");
  }
});

$(".cart").click(function () {
  $(".inside-cart").toggleClass("viewCart");
  $(".fukidashi").toggleClass("viewFukidashi");
});
