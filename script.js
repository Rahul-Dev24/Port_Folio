// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

(() => {
  var elem = document.querySelector(".element");
  var card_image = document.querySelector(".card");
  const elem1 = document.querySelectorAll(".elem");

  elem.addEventListener("mouseenter", (data) => {
    card_image.style.display = "block";
  });
  elem.addEventListener("mouseleave", (data) => {
    card_image.style.display = "none";
  });

  elem1.forEach((data) => {
    data.addEventListener("mouseenter", () => {
      var img = data.getAttribute("data-img");
      card_image.style.backgroundImage = `url(${img})`;
    });
  });
})();

const menuHandel = () => {
  var flag = 0;
  var h3 = document.querySelector("nav h3");
  var full_scr = document.querySelector("#full-screen");
  h3.addEventListener("click", () => {
    if (flag == 0) {
      full_scr.style.top = "12%";
      document.querySelector("#some").style.display = "flex";
      // document.querySelector("#some").style.marginTop = "180%";
      flag = 1;
    } else {
      full_scr.style.top = "-100%";
      document.querySelector("#some").style.display = "none";
      flag = 0;
    }
  });
};
menuHandel();

var lodder = document.querySelector("#lodder");
setTimeout(() => {
  lodder.style.top = "-100%";
}, 4000);

const navHandeler = () => {
  const navBar = document.querySelector("#some ul");
  navBar.addEventListener("click", () => {
    document.querySelector("#full-screen").style.top = "-100%";
  });
};
navHandeler();
