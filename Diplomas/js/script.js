

/* Spinner */

$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} 
  else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} 
    else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

/* tooltip */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// $(function(){
//     $('body').tooltip({ selector: '[data-toggle="tooltip"]' });
// });

/* popover */

$(function () {
  $('[data-toggle="popover"]').popover()
})

/** MODAL/Lightbox *********************************************/

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*************************************************************/

function registerName() {
 var x = document.getElementById("InputContactInfo2").value;
 document.getElementById("InputContactInfo1").innerHTML = x;
}






