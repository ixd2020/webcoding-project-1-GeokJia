
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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
    translateY: (el, i) => -1.17 + 1.17 * 2 * i + "em"
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

function h1() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstacks at Giverny, sunset. (1888–1889) <br>Medium: Oil on canvas";
}

function h2() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystacks. (1890) <br> Medium: Oil on canvas.<br>This painting was sold for $110.7 million on Sotheby's May 14, 2019.";
}

function h3() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstacks, Snow Effect (1891)";
}

function h4() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystack, Morning Snow Effect (1891) Medium: Oil on canas.";
}

function h5() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstack. (Sunset) (1890-1891) <br>Medium: Oil on canvas";
}

function h6() {
  document.getElementById("haystack").innerHTML =
    "Title: Wheatstacks (End of Summer). (1890-1891) <br>Medium: Oil on canvas";
}

function h7() {
  document.getElementById("haystack").innerHTML =
    "Title: Monet – Wildenstein 1996, 1272";
}

function h8() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstacks, Snow Effect (1890-1891)";
}

function h9() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystacks at sunset, frosty weather";
}

function h10() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstack in Sunshine. (1891) <br>Medium: Oil on canvas";
}

function h11() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstack at Giverny. (1888–1889) <br>Medium: Oil on canvas";
}

function h12() {
  document.getElementById("haystack").innerHTML =
    "Title: Wheatstacks. (1890-1891) <br>Medium: Oil on canvas";
}
function h13() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystacks, (Midday). (1890–1891) <br>Medium: Oil on canvas";
}
function h14() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystacks (Effect of Snow and Sun). <br>Medium: Oil on canvas";
}
function h15() {
  document.getElementById("haystack").innerHTML =
    "Title: Wheatstack (Sun in the Mist). (1891) <br>Medium: Oil on canvas";
}

function h16() {
  document.getElementById("haystack").innerHTML =
    "Title: Haystacks, (Midday). (1890–91) <br>Medium: Oil on canvas";
}

function h17() {
  document.getElementById("haystack").innerHTML =
    "Title: Grainstacks, White Frost Effect. (1889) <br>Medium: Oil on canvas";
}
function h18() {
  document.getElementById("haystack").innerHTML =
    "Title: Stacks, End of Summer. (1891) <br>Medium: Oil on canvas";
}

function h19() {
  document.getElementById("haystack").innerHTML =
    "Title: Wheatstacks (Sunset, Snow Effect). (1890–91) <br>Medium: Oil on canvas";
}

function h20() {
  document.getElementById("haystack").innerHTML =
    "Title: Wheatstack (Snow Effect, Overcast day). (1890–91) <br>Medium: Oil on canvas";
}

$(document).ready(function(){
  $("button").hover(function(){
    $("#div1").toggle(200);

  });
});