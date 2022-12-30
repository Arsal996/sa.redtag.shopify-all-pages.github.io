// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest("[data-dropdown]")
//         currentDropdown.classList.toggle("active")
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove("active")
//     })
// })

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
