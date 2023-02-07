const postTemplate = document.querySelector("template");

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

  for (let i = 1; i <= 4; i++) {
    if ($(`.card${i}`).hasClass("current")) {
      $(`.card${i}`).removeClass("current").addClass("left");
    } else if ($(`.card${i}`).hasClass("third")) {
      $(`.card${i}`).removeClass("third").addClass("next");
    } else if ($(`.card${i}`).hasClass("next")) {
      $(`.card${i}`).removeClass("next").addClass("current");
    } else if ($(`.card${i}`).hasClass("left")) {
      $(`.card${i}`).removeClass("left").addClass("third");
    }
  }
  // if ($(".card1").hasClass("current")) {
  //   $(".card1").removeClass("current").addClass("left");
  // } else if ($(".card1").hasClass("third")) {
  //   $(".card1").removeClass("third").addClass("next");
  // } else if ($(".card1").hasClass("next")) {
  //   $(".card1").removeClass("next").addClass("current");
  // } else if ($(".card1").hasClass("left")) {
  //   $(".card1").removeClass("left").addClass("third");
  // }

  // if ($(".card2").hasClass("current")) {
  //   $(".card2").removeClass("current").addClass("left");
  // } else if ($(".card2").hasClass("third")) {
  //   $(".card2").removeClass("third").addClass("next");
  // } else if ($(".card2").hasClass("next")) {
  //   $(".card2").removeClass("next").addClass("current");
  // } else if ($(".card2").hasClass("left")) {
  //   $(".card2").removeClass("left").addClass("third");
  // }
  // if ($(".card3").hasClass("current")) {
  //   $(".card3").removeClass("current").addClass("left");
  // } else if ($(".card3").hasClass("third")) {
  //   $(".card3").removeClass("third").addClass("next");
  // } else if ($(".card3").hasClass("next")) {
  //   $(".card3").removeClass("next").addClass("current");
  // } else if ($(".card3").hasClass("left")) {
  //   $(".card3").removeClass("left").addClass("third");
  // }

  // if ($(".card4").hasClass("current")) {
  //   $(".card4").removeClass("current").addClass("left");
  // } else if ($(".card4").hasClass("third")) {
  //   $(".card4").removeClass("third").addClass("next");
  // } else if ($(".card4").hasClass("next")) {
  //   $(".card4").removeClass("next").addClass("current");
  // } else if ($(".card4").hasClass("left")) {
  //   $(".card4").removeClass("left").addClass("third");
  // }
});

//view cart or remove card window
$(document).click(function (e) {
  if (
    !e.target.closest(".inside-cart") &&
    !e.target.closest(".cart") &&
    !e.target.closest(".quantityCircle")
  ) {
    $(".inside-cart").removeClass("viewCart");
    $(".fukidashi").removeClass("viewFukidashi");
  }
});

$(".cart, .quantityCircle").click(function () {
  $(".inside-cart").toggleClass("viewCart");
  $(".fukidashi").toggleClass("viewFukidashi");
});

//cart quantity number function

// $(".addCart").submit(function (e) {
//   e.preventDefault();
$(".addCart").click(function (e) {
  e.preventDefault();
  const data = {
    title: $(e.target.parentElement).find(".menu-title").text(),
    price: e.target.previousElementSibling.children[1].children[0].textContent,
    img: $(e.target.parentElement).find(".menu-img").attr("src"),
    quantity: e.detail,
  };

  axios
    .post("https://run.mocky.io/v3/b2b2fbd3-f9fc-4932-bb6b-257dda4c5407", data)
    .then((response) => {
      document.querySelector(".emptyCart").classList.add("hide");

      const postListClone = document.importNode(postTemplate.content, true);
      const itemTitle = JSON.parse(response.config.data).title;
      const itemImg = JSON.parse(response.config.data).img;
      const itemPrice = JSON.parse(response.config.data).price;
      const itemQuantity = JSON.parse(response.config.data).quantity;
      const subTotal=itemQuantity*itemPrice

      if(e.detail===1){

      
      postListClone.querySelector(".price-number").textContent = itemPrice;
      postListClone.querySelector(".cartPic").src = itemImg;
      postListClone.querySelector(".item-name").innerHTML = itemTitle;
      postListClone.querySelector(".item-quantity").innerHTML = itemQuantity;
      postListClone.querySelector(".subtotalNum").textContent=subTotal

      document.querySelector(".list-items").append(postListClone);
    }else{
      Number(document.querySelector(".itemTitle").querySelector(".item-quantity").textContent)++





    }
    })
    .catch((error) => console.log(error));
});
// function submitData(e){
//   e.preventDefault()
//   const productData={
//     title=document.
//   }
