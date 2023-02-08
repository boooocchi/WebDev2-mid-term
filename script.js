const postTemplate = document.querySelector("template");
const increaseNumberInCart = function (exist, itemPrice) {
  exist.quantity = Number(exist.quantity) + 1;
  const listIndex = titles.indexOf(exist);
  document
    .querySelector(".list-items")
    .children[listIndex].querySelector(".item-quantity").textContent =
    exist.quantity;
  document
    .querySelector(".list-items")
    .children[listIndex].querySelector(".subtotalNum").textContent = (
    itemPrice * exist.quantity
  ).toFixed(2);
};
const increaseCircleNum = function () {
  let circleNum = 0;
  titles.forEach((q) => {
    circleNum += parseInt(q.quantity);
  });
  document.querySelector(".quantityCircle").textContent = circleNum;
  document.querySelector(".quantityCircle").classList.remove("hide");
};

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
});

const titles = [];

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

//adding items into a cart
$(".addCart").click(function (e) {
  e.preventDefault();
  document.querySelector(".emptyCart").classList.add("hide");

  const data = {
    title: $(e.target.parentElement).find(".menu-title").text(),
    price: e.target.previousElementSibling.children[1].children[0].textContent,
    img: $(e.target.parentElement).find(".menu-img").attr("src"),
    quantity: 1,
  };

  axios
    .post("https://run.mocky.io/v3/b2b2fbd3-f9fc-4932-bb6b-257dda4c5407", data)
    .then((response) => {
      const postListClone = document.importNode(postTemplate.content, true);
      const itemTitle = JSON.parse(response.config.data).title;
      const itemImg = JSON.parse(response.config.data).img;
      const itemPrice = JSON.parse(response.config.data).price;
      const itemQuantity = JSON.parse(response.config.data).quantity;
      const subTotal = itemQuantity * itemPrice;

      var exist = titles.find((e) => e.title === itemTitle);
      if (!exist) {
        titles.push(data);
        postListClone.querySelector(".price-number").textContent = itemPrice;
        postListClone.querySelector(".cartPic").src = itemImg;
        postListClone.querySelector(".item-name").innerHTML = itemTitle;
        postListClone.querySelector(".item-quantity").innerHTML = itemQuantity;
        postListClone.querySelector(".subtotalNum").textContent = subTotal;

        document.querySelector(".list-items").append(postListClone);
      } else {
        //increse the number of items thats already in a cart
        increaseNumberInCart(exist, itemPrice);
      }

      //the number of items in a cart
      increaseCircleNum();
    })
    .catch((error) => console.log(error));
});

//adding items into a cart
$(".special-addCart").click(function (e) {
  e.preventDefault();
  document.querySelector(".emptyCart").classList.add("hide");

  const data = {
    title: $(e.target.parentElement).find(".deal-title").text(),
    price: $(e.target.parentElement).find(".specialDeal-price").text(),
    img: $(e.target.parentElement).find(".right-pic>img").attr("src"),
    quantity: 1,
  };

  axios
    .post("https://run.mocky.io/v3/b2b2fbd3-f9fc-4932-bb6b-257dda4c5407", data)
    .then((response) => {
      const postListClone = document.importNode(postTemplate.content, true);
      const itemTitle = JSON.parse(response.config.data).title;
      const itemImg = JSON.parse(response.config.data).img;
      const itemPrice = JSON.parse(response.config.data).price;
      const itemQuantity = JSON.parse(response.config.data).quantity;
      const subTotal = (itemQuantity * itemPrice).toFixed(2);

      var exist = titles.find((e) => e.title === itemTitle);
      if (!exist) {
        titles.push(data);
        postListClone.querySelector(".price-number").textContent = itemPrice;
        postListClone.querySelector(".cartPic").src = itemImg;
        postListClone.querySelector(".item-name").innerHTML = itemTitle;
        postListClone.querySelector(".item-quantity").innerHTML = itemQuantity;
        postListClone.querySelector(".subtotalNum").textContent = subTotal;

        document.querySelector(".list-items").append(postListClone);
      } else {
        //increse the number of items thats already in a cart
        increaseNumberInCart(exist, itemPrice);
      }

      //the number of items in a cart
      increaseCircleNum();
    })
    .catch((error) => console.log(error));
});
