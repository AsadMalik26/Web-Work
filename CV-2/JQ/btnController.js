$(function () {
  $("#nextSlide").click(handleNext);
  $("#prevSlide").click(handlePrev);
  console.log("onload");

  // linked siblings
  $("#home").click(function () {
    // $(".slide").addClass("d-none");
    // console.log($(this));
    // $(this).removeClass("d-none");
    // x[this].classList.remove("d-none");
    console.log("Calling");
  });
  $(".contact").click(contactPage);

  // individual link buttons
  $(".home").click(homePage);
  $(".about").click(aboutPage);
  $(".edu").click(eduPage);
  $(".skills").click(skillsPage);
  $(".portfolio").click(portfolioPage);
  $(".services").click(servicesPage);
});
function contactPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("contact");
  c.classList.remove("d-none");
}
function homePage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("home");
  c.classList.remove("d-none");
}
function aboutPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("about");
  c.classList.remove("d-none");
}
function eduPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("education");
  c.classList.remove("d-none");
}
function skillsPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("skills");
  c.classList.remove("d-none");
}
function portfolioPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("portfolio");
  c.classList.remove("d-none");
}
function servicesPage() {
  $(".slide").addClass("d-none");
  var c = document.getElementById("services");
  c.classList.remove("d-none");
}


var slideIndex = 1;
showDivs(slideIndex);
// 0: button clicked -> 1: go to relaevant function (i.e. handleNext/handlePrev) -> 2: they will call plusDivs -> 3: it will call showDivs(n)
// 1  
function handleNext() {
  plusDivs(+1);
}
function handlePrev() {
  plusDivs(-1);
}
// 2
function plusDivs(n) {
  showDivs((slideIndex += n));
}
// 3
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("d-none");
  }
  x[slideIndex - 1].classList.remove("d-none");
}

/*
function home(){
    // $("#slide").addClass("d-none");
    // $("#home").addClass("d-block");
    // var s = $(".slide").siblings().css({"display" : "none"})
    console.log("Calling");
    //  s.addClass("d-none");
    //  $(this).removeClass("d-none")
    // $(this).addClass("rrrrrrrrrrrrrrrrrrrr");
    // $(this).removeClass("rrrrrrrrrrrrrrrrrrrr");
}


function siblings()
{

}
function handleNext()
{
   // showDivs(+1);

    console.log("Next button clicked");
    // $("#slide").addClass("d-none")
    // $(this).removeClass("d-none");
}
function handlePrev(n)
{
  //  showDivs(-1);

    console.log("Previous button clicked");
}

function showDivs(n) {
    var i;
    console.log("Val: "+n);
    var x = document.getElementsByClassName("slide");
    //$(".slide").addClass("d-none");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      console.log("in loop");
    }
    x[slideIndex-1].style.display = "block";
  }


  console.log("before load");*/
