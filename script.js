$(document).ready(function() {
  function animateText() {
    $('p').addClass('fade-text');
  }

  function animateUnderscore() {
    if($('.underscore').hasClass("hide")) {
      $('.underscore').removeClass("hide");
    } else {
      $('.underscore').addClass("hide");
    }
  }

  function animateBorders(border) {
    $('.border').addClass(border);
  }

  const borders = ["border-top", "border-right", "border-bottom", "border-left"];
  let time = 300;

  for(let i of borders) {
    setTimeout(() => animateBorders(i), time);
    time += 300;
  }
  
  setTimeout(animateText, 2000);
  let underscoreInterval = setInterval(animateUnderscore, 800);
  setTimeout(() => clearInterval(underscoreInterval), 5000);
});