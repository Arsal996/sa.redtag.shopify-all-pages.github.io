//   // dropdowm navbar js 

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -150 : 150;
    handleIcons(scrollWidth);
});
});

allTabs.forEach(tab => {
tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
});
});

const dragging = (e) => {
if (!isDragging) return;
tabsBox.classList.add("dragging");
tabsBox.scrollLeft -= e.movementX;
handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
isDragging = false;
tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// nav dropdown menu 

window.onclick = function(event){
if(!event.target.matches('.tab'))
var dd = document.getElementsByClassName('container');

for(var i = 0; i < dd.length; i++){
  var x = dd[i];

  if(x.style.display = "block"){
    x.style.display = "none";
  }
}
}


function myNewIn() {
let dropdown = document.getElementById("newIn");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myBestSeller() {
let dropdown = document.getElementById("best-seller");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}


function myClothing() {
let dropdown = document.getElementById("clothing");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myWinter() {
let dropdown = document.getElementById("winter");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myBedroom() {
let dropdown = document.getElementById("bedroom");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myDinKit() {
let dropdown = document.getElementById("dinning-kitchen");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myDecor() {
let dropdown = document.getElementById("decor");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myBathroom() {
let dropdown = document.getElementById("bathroom");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myTravel() {
let dropdown = document.getElementById("travel");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myLingeria() {
let dropdown = document.getElementById("ling-kint");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myPremium() {
let dropdown = document.getElementById("premium");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myPlusSize() {
let dropdown = document.getElementById("plus-size");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myBaby() {
let dropdown = document.getElementById("baby");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myJunior() {
let dropdown = document.getElementById("junior");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function mySenior() {
let dropdown = document.getElementById("senior");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myCollection() {
let dropdown = document.getElementById("collection");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}


function myShoes() {
let dropdown = document.getElementById("shoes");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myAccessories() {
let dropdown = document.getElementById("accessories");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myFragrance() {
let dropdown = document.getElementById("fragrance");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

function myHotOffer() {
let dropdown = document.getElementById("hotOffer");
if (dropdown.style.display === "block") {
  dropdown.style.display = "none";
} else {
  dropdown.style.display = "block";
}
}

// delivey and return js 

function myDescription() {
    let mdp = document.getElementById("desc-content");
    if (mdp.style.display === "block") {
      mdp.style.display = "none";
    } else {
      mdp.style.display = "block";
    }
    }

function myDelivery() {
    let md = document.getElementById("delv-content");
    if (md.style.display === "block") {
      md.style.display = "none";
    } else {
      md.style.display = "block";
    }
    }

// mobile screen slider 

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

// for slider change images
  
 var bigImg1 = document.getElementById('big-img');
 var smallImg1 = document.getElementsByClassName('small-img');

 smallImg1[0].onclick = function(){
    bigImg1.src = smallImg1[0].src;
    smallImg1.style.display = "none";
 }
 smallImg1[1].onclick = function(){
    bigImg1.src = smallImg1[1].src;
 }
 smallImg1[2].onclick = function(){
    bigImg1.src = smallImg1[2].src;
 }
 smallImg1[3].onclick = function(){
    bigImg1.src = smallImg1[3].src;
 }

//  delivery policy section js 

function closeFunction() {
  let delv = document.getElementById("delivery-policy");
  let sc = document.getElementById("size-chart");
  if (delv.style.display = "block") {
    delv.style.display = "none";
  }
  if (sc.style.display = "block") {
    sc.style.display = "none";
  }
}

function deliveryPolicy() {
  let sf = document.getElementById("delivery-policy");
  if (sf.style.display === "block") {
    sf.style.display = "none";
  } else {
    sf.style.display = "block";
  }
}

function sizeChart() {
  let sizeChart = document.getElementById("size-chart");
  if (sizeChart.style.display === "block") {
    sizeChart.style.display = "none";
  } else {
    sizeChart.style.display = "block";
  }
}

