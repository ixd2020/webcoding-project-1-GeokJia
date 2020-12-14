function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
  $(".giverny").click(function() {
    $("#panel").slideToggle("200");
  });
});

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
    "Title: Haystack, Morning Snow Effect (1891) Medium: Oil on canvas.";
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

function p1() {
  document.getElementById("parliament").innerHTML =
    "Title: The Houses of Parliament (Effect of Fog) (1903–1904)";
}
function p2() {
  document.getElementById("parliament").innerHTML =
    "Title: Houses of Parliament, stormy sky, (1904)";
}
function p3() {
  document.getElementById("parliament").innerHTML =
    "Title: Le Parlement, Effet de Brouillard (1903)";
}
function p4() {
  document.getElementById("parliament").innerHTML =
    "Title: Parlement, coucher du soleil (sunset) (1902)";
}
function p5() {
  document.getElementById("parliament").innerHTML =
    "Title: Houses of Parliament, London (1900–1901)";
}
function p6() {
  document.getElementById("parliament").innerHTML =
    "Title: Houses of Parliament, London (1904)";
}
function p7() {
  document.getElementById("parliament").innerHTML =
    "Title: London, Sun Breaking Through the Fog (1904)";
}
function p8() {
  document.getElementById("parliament").innerHTML =
    "Title: Houses of Parliament Sunlight Effect (1903)";
}
function p9() {
  document.getElementById("parliament").innerHTML =
    "Title: The Houses of Parliament, Seagulls (1903)";
}
function p10() {
  document.getElementById("parliament").innerHTML =
    "Title: Seagulls, the River Thames and the Houses of Parliament (1904)";
}
function p11() {
  document.getElementById("parliament").innerHTML =
    "Title: The Houses of Parliament, Sunset, 1903 (1903)";
}
function p12() {
  document.getElementById("parliament").innerHTML =
    "Title:  Houses of Parliament, London (1905)";
}

function c1() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral- Setting Sun, (Symphony in Grey and Pink),(1894)";
}
function c2() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, West Facade (1894)";
}
function c3() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, Facade and the Tour d'Albane. Grey Weather (1894)";
}
function c4() {
  document.getElementById("rouen").innerHTML =
    "Title: La Cathédrale de Rouen. Le portail et la tour Saint-Romain, effet du matin harmonie blanche (1892-1893)";
}
function c5() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, the West Portal, Dull Weather (1892)";
}
function c6() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, Facade 1 (1892-1894)";
}
function c7() {
  document.getElementById("rouen").innerHTML =
    "Title: La Cathédrale de Rouen. Le portail et la tour Saint-Romain, plein soleil; harmonie bleue et or (1892-1893)";
}
function c8() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, The Façade in Sunlight (1894)";
}
function c9() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, West Facade, Sunlight (1894)";
}
function c10() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, Facade (Morning effect) (1892-1894)";
}
function c11() {
  document.getElementById("rouen").innerHTML =
    "Title: The portal and the tower of the saint-romain at morning sun, Harmony in Blue (1893)";
}
function c12() {
  document.getElementById("rouen").innerHTML =
    "Title: Rouen Cathedral, Facade and Tour d'AlbaneI, dull day (1892-1894)";
}

function g1() {
  document.getElementById("station").innerHTML =
    "Title: Monet La Tranchée des Batignolles";
}

function g2() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare, arrivée d'un train";
}

function g3() {
  document.getElementById("station").innerHTML = "Title: La Gare Saint-Lazare";
}

function g4() {
  document.getElementById("station").innerHTML =
    "Title: Extérieur de la gare Saint-Lazare, effet de soleil";
}

function g5() {
  document.getElementById("station").innerHTML =
    "Title: La Tranchée des Batignolles";
}

function g6() {
  document.getElementById("station").innerHTML =
    "Title: Extérieur de la gare Saint-Lazare, arrivée d'un train";
}

function g7() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare, vue extérieure";
}

function g8() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare, les signaux";
}

function g9() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare <br>This painting is one of four surviving canvases representing the interior of the station.";
}

function g10() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare, vue extérieure";
}

function g11() {
  document.getElementById("station").innerHTML =
    "Title: La Gare Saint-Lazare, le train de Normandie";
}

function g12() {
  document.getElementById("station").innerHTML =
    "Title: Le Pont de l'Europe, gare Saint-Lazare";
}

function b1() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge, Fog (1902)";
}

function b2() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge (1900)";
}

function b3() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge (1899)";
}

function b4() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing-Cross Bridge in London (1902)";
}

function b5() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge, London (1901)";
}

function b6() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge (1899–1901)";
}

function b7() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge (1903)";
}
function b8() {
  document.getElementById("bridge").innerHTML =
    "Title: Charing Cross Bridge, London (1899–1901)";
}

function pop1() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars (Wind effect), (1891)";
}
function pop2() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars in the Sunc(1887)";
}
function pop3() {
  document.getElementById("poplars").innerHTML =
    "Title: Three Trees in Grey Weather (1891)";
}
function pop4() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars (Autumn), 1891";
}
function pop5() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars on the Epte (1900)";
}
function pop6() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars at the River Epte (1891)";
}
function pop7() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars at Giverny, Sunrise (1888)";
}
function pop8() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars in the Sun (1891)";
}
function pop9() {
  document.getElementById("poplars").innerHTML =
    "Title: Poplars (Autumn), (1891)";
}

function wl1() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies, (1897-1899)";
}
function wl2() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies, (1907)";
}
function wl3() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies – Evening Effect, (1897-1898)";
}
function wl4() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies, (1907)";
}
function wl5() {
  document.getElementById("lilies").innerHTML =
    "Title: White Water Lilies, (1895)";
}
function wl6() {
  document.getElementById("lilies").innerHTML =
    "Title: The Japanese Bridge or The Lily Pond (1900)";
}
function wl7() {
  document.getElementById("lilies").innerHTML =
    "Title: The Bridge over the Water-Lily Pond (1900)";
}
function wl8() {
  document.getElementById("lilies").innerHTML =
    "Title: Water-Lily Pond, Symphony in Rose (1900)";
}
function wl9() {
  document.getElementById("lilies").innerHTML =
    "Title: Japanese Bridge and Water Lily Pond (1899)";
}
function wl10() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies (1914-1917)";
}
function wl11() {
  document.getElementById("lilies").innerHTML =
    "Title: The Water Lily Pond (1917-1919)";
}
function wl12() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies (1915)";
}
function wl13() {
  document.getElementById("lilies").innerHTML =
    "Title: Water-Lilies (1914-1917)";
}
function wl14() {
  document.getElementById("lilies").innerHTML =
    "Title: Water-Lily Pond and Weeping Willow, (1916-1919)";
}
function wl15() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies (1904)";
}
function wl16() {
  document.getElementById("lilies").innerHTML =
    "Title: Water Lilies (1897-1899)";
}
