const product = document.querySelector(".products");
const share = document.querySelector(".products-share");
const container = document.querySelector(".container");
product.addEventListener("mouseover", display);
product.addEventListener("mouseout", displaynone);
share.addEventListener("mouseout", displaynone);

var activeState = false;

function display() {
  if (!activeState) {
    share.style.display = "flex";
  } 
  
}

function displaynone() {
  share.style.display = "none";
  
}


$(document).ready(function () {
  $(".container").css("display", "flex");
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 275) {
      console.log('test');
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
  });
});