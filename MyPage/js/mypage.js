// function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

// /* Open overlay */
// function openOverlay() {
//   document.getElementById("NatureOverlay").style.height = "100%";
// }

// /* Close overlay */
// function closeOverlay() {
//   document.getElementById("NatureOverlay").style.height = "0%";
// }

 function onN() {
   document.getElementById("NatureOverlay").style.display = "block";
 }

 function offN() {
   document.getElementById("NatureOverlay").style.display = "none";
 }

 function onP() {
   document.getElementById("PeopleOverlay").style.display = "block";
 }

 function offP() {
   document.getElementById("PeopleOverlay").style.display = "none";
 }

 function onA() {
   document.getElementById("AnimalsOverlay").style.display = "block";
 }

 function offA() {
   document.getElementById("AnimalsOverlay").style.display = "none";
 }