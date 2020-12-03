/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



anime
  .timeline({ loop: false })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  })
  .add({
    targets: ".ml5 .line",
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => -1.12 + 1.12 * 2 * i + "em"
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600"
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=300"
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600"
  })
  .add({
    targets: ".ml5"
  });

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navi") {
    x.className += " responsive";
  } else {
    x.className = "navi";
  }
}

function function1() {
  document.getElementById("hay").style.width = "120%";
}
function function2() {
  document.getElementById("hay").style.width = "100%";
}

function function3() {
  document.getElementById("house").style.width = "120%";
}
function function4() {
  document.getElementById("house").style.width = "100%";
}

function function5() {
  document.getElementById("cathedral").style.width = "120%";
}
function function6() {
  document.getElementById("cathedral").style.width = "100%";
}
function function7() {
  document.getElementById("station").style.width = "120%";
}
function function8() {
  document.getElementById("station").style.width = "100%";
}
function function9() {
  document.getElementById("bridge").style.width = "120%";
}
function function10() {
  document.getElementById("bridge").style.width = "100%";
}
function function11() {
  document.getElementById("poplars").style.width = "120%";
}
function function12() {
  document.getElementById("poplars").style.width = "100%";
}
function function13() {
  document.getElementById("lilies").style.width = "120%";
}
function function14() {
  document.getElementById("lilies").style.width = "100%";
}
function function15() {
  document.getElementById("others").style.width = "120%";
}
function function16() {
  document.getElementById("others").style.width = "100%";
}