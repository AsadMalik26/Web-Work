$(function () {
  $("#nextSlide").click(handleNext);
  $("#prevSlide").click(handlePrev);
  console.log("onload");

  // linked siblings
  /*$("#home").click(function(){
        $("#slide").addClass("d-none");
    console.log("Calling");

    })*/
});
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
  // const att = document.createAttribute("class");
  // att.value = "d-none";

    // x[i].style.display = "none";
    // x[i].setAttributeNode(att); it replaces all attritubtes (overwrite)
    x[i].classList.add("d-none");
  }
  // Create a class attribute:
  // const att = document.createAttribute("class");
  // Set the value of the class attribute:
  // att.value = "d-block";

  //const h1 = document.getElementsByTagName("H1")[0];
  //h1.setAttributeNode(att);
  // x[slideIndex - 1].style.display = "block";
  // x[slideIndex - 1].setAttributeNode(att);
  x[slideIndex - 1].classList.remove("d-none");
  // x[slideIndex - 1].classList.add("d-block");
  
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
