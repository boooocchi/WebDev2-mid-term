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

// $(".quantityCircle").click(function () {
//   $(".inside-cart").removeClass("viewCart");
//   $(".fukidashi").removeClass("viewFukidashi");

//menu
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var menuDirection1 = document.getElementById("menu-direction1");
    var menuDirection2 = document.getElementById("menu-direction2");
    var menuDirection3 = document.getElementById("menu-direction3");

    var menuImg1 = document.getElementById("menu-img1");
    var menuImg2 = document.getElementById("menu-img2");
    var menuImg3 = document.getElementById("menu-img3");
    var menuImg4 = document.getElementById("menu-img4");
    var menuImg5 = document.getElementById("menu-img5");
    var menuImg6 = document.getElementById("menu-img6");

    var menuTitle1 = document.getElementById("menu-title1");
    var menuTitle2 = document.getElementById("menu-title2");
    var menuTitle3 = document.getElementById("menu-title3");
    var menuTitle4 = document.getElementById("menu-title4");
    var menuTitle5 = document.getElementById("menu-title5");
    var menuTitle6 = document.getElementById("menu-title6");

    var menuPrice1 = document.getElementById("menu-price1");
    var menuPrice2 = document.getElementById("menu-price2");
    var menuPrice3 = document.getElementById("menu-price3");
    var menuPrice4 = document.getElementById("menu-price4");
    var menuPrice5 = document.getElementById("menu-price5");
    var menuPrice6 = document.getElementById("menu-price6");

    menuDirection1.addEventListener("click", function () {
      this.style.opacity = "1";
      menuDirection2.style.opacity = "0.5";
      menuDirection3.style.opacity = "0.5";
      //images change
      menuImg1.src =
        "/img/menu-img/Burger/special-combo Background Removed.png";
      menuImg2.src = "/img/menu-img/Burger/bbq-barger Background Removed.png";
      menuImg3.src = "/img/menu-img/Burger/hawaiian.png";
      menuImg4.src =
        "/img/menu-img/Burger/englishfirst-barger Background Removed.png";
      menuImg5.src = "/img/menu-img/Burger/bacon-conbo Background Removed.png";
      menuImg6.src =
        "/img/menu-img/Burger/spicyChicken-barger Background Removed.png";

      //title
      menuTitle1.innerHTML = "Special Combo";
      menuTitle2.innerHTML = "BBQ Burger";
      menuTitle3.innerHTML = "Hawaii Combo";
      menuTitle4.innerHTML = "Bacon, Egg Croissant";
      menuTitle5.innerHTML = "Double BLT Combo";
      menuTitle6.innerHTML = "Spicy Chicken";

      //price
      menuPrice1.innerHTML = "$10.77";
      menuPrice2.innerHTML = "$7.77";
      menuPrice3.innerHTML = "$12.77";
      menuPrice4.innerHTML = "$$5.77";
      menuPrice5.innerHTML = "$13.77";
      menuPrice6.innerHTML = "$8.77";
    });

    menuDirection2.addEventListener("click", function () {
      this.style.opacity = "1";
      menuDirection1.style.opacity = "0.5";
      menuDirection3.style.opacity = "0.5";

      //images change
      menuImg1.src = "/img/menu-img/Side/naget.png";
      menuImg2.src = "/img/menu-img/Side/salada.png";
      menuImg3.src = "/img/menu-img/Side/sande Background Removed.png";
      menuImg4.src = "/img/menu-img/Side/flurry.png";
      menuImg5.src = "/img/menu-img/Side/softcream.png";
      menuImg6.src = "/img/menu-img/Side/applepie Background Removed.png";

      //title
      menuTitle1.innerHTML = "Chicken Nuggets";
      menuTitle2.innerHTML = "Salada";
      menuTitle3.innerHTML = "Chocolate Sandey";
      menuTitle4.innerHTML = "Colorful Flurry";
      menuTitle5.innerHTML = "Soft Serve";
      menuTitle6.innerHTML = "Apple Pie";

      //price
      menuPrice1.innerHTML = "$5.30";
      menuPrice2.innerHTML = "$5.30";
      menuPrice3.innerHTML = "$4.30";
      menuPrice4.innerHTML = "$4.30";
      menuPrice5.innerHTML = "$2.30";
      menuPrice6.innerHTML = "$3.30";
    });

    menuDirection3.addEventListener("click", function () {
      this.style.opacity = "1";
      menuDirection1.style.opacity = "0.5";
      menuDirection2.style.opacity = "0.5";
      //images change
      menuImg1.src = "/img/menu-img/Drink/apple-juice.png";
      menuImg2.src = "/img/menu-img/Drink/root-beer.png";
      menuImg3.src = "/img/menu-img/Drink/milk.png";
      menuImg4.src = "/img/menu-img/Drink/sprite.png";
      menuImg5.src = "/img/menu-img/Drink/orange-juice.png";
      menuImg6.src = "/img/menu-img/Drink/wate.png";

      //title
      menuTitle1.innerHTML = "Apple Juice";
      menuTitle2.innerHTML = "Root Beer";
      menuTitle3.innerHTML = "Milk";
      menuTitle4.innerHTML = "Sprite";
      menuTitle5.innerHTML = "Orenge Juice";
      menuTitle6.innerHTML = "Water";

      //price

      // const price=[3.50,3.50,3.50,3.50,3.50,2.50]
      // for(let i = 0; i < price.length; i++){
      //   const itemprice=parseFloat.Math.round((price[i])/100)
      //   document.getElementById(`menu-price${i+1}`).innerHTML = `<p><span>$</span><span>${itemprice}</span></p>`
      // }

      menuPrice1.innerHTML = "$3.50";
      menuPrice2.innerHTML = "$3.50";
      menuPrice3.innerHTML = "$3.50";
      menuPrice4.innerHTML = "$3.50";
      menuPrice5.innerHTML = "$3.50";
      menuPrice6.innerHTML = "$2.50";
    });

    // const deleteBtn = document.getElementById("delete-btn")
    // console.log(deleteBtn);
    // deleteBtn.addEventListener('click', function(){
    //   const deleteItem = $(this).parentNode();
    //   deleteItem.fadeOut(1000, function(){
    //     deleteItem.remove();
    //   });
    // });
  },
  false
);

//cart quantity number function

// $(".addCart").submit(function (e) {
//   e.preventDefault();
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
        postListClone
          .querySelector("#delete-btn")
          .addEventListener("click", function () {
            const deleteItem = $(this).parent().parent();
            deleteItem.fadeOut(1000, function () {
              deleteItem.remove();
            });
          });

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
        postListClone
          .querySelector("#delete-btn")
          .addEventListener("click", function () {
            const deleteItem = $(this).parent().parent();
            deleteItem.fadeOut(1000, function () {
              deleteItem.remove();
            });
          });

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

//hi

// const clearAll = document.getElementsByClassName("clearAll");
// clearAll.addEventListener('click', function(){

// })
