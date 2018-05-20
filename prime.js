var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("bug");
  var dots = document.getElementsByClassName("bug_in");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" in", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " in";
}


var countDownDate = new Date("Oct 10, 2018 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

var clicks = 186380;
    function clickME() {
        clicks += 5;
        document.getElementById("clicks").innerHTML = clicks + (" Kn");
 }

var clicks = 186380;
    function clickMEd() {
        clicks -= 5;
        document.getElementById("clicks").innerHTML = clicks + (" Kn");
 }