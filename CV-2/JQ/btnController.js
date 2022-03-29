$(function(){
    $("#nextSlide").click(handleNext)
    $("#prevSlide").click(handlePrev)
    handleNext();
} )

function handleNext()
{
    alert("Next button clicked")
}
function handlePrev()
{
    alert("Previous button clicked")
}