// let body = document.querySelector(".inactive")
// if(body.classList.contains("inactive")){
//   const week = prompt("How much week we completed till now")
//   let date1 = new Date("05/07/2021");
//   let date2 = new Date()
//   let difference_in_time = date2.getTime() - date1.getTime();
//   var difference_in_days = difference_in_time / (1000 * 3600 * 24);
//   // console.log(date1);
//   // console.log(date2);
//   let completed_weeks = Math.floor(difference_in_days / 7)
//   if(week == completed_weeks){
//     body.classList.remove("inactive")
//     alert("You remembered 🥰")
//   }
//   else{
//     alert("You forgot the count 😭. Try again correctly or else be ready for 🍑")
//   }
// }

function expandOrConcate(){
    var remainingPara = document.querySelector(".hidden");
    var handleContentBtn  = document.querySelector(".btnView")

    if(remainingPara.classList.contains("inactive")){
        remainingPara.classList.remove("inactive")
        remainingPara.classList.add("active")
        handleContentBtn.innerHTML = "View Less"
    }
    else if(remainingPara.classList.contains("active")){
        remainingPara.classList.remove("active")
        remainingPara.classList.add("inactive")
        handleContentBtn.innerHTML = "View More"
    }
}
// -------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}