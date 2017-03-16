$(function () {
  $('[data-toggle="popover"]').popover()
})

  $('.popover-dismiss').popover({
  trigger: 'focus'
})

function myCard() {
    document.getElementByClass("card-img").style.display = "inline";
}

// $('#zag').hover(
// function(){$(this).toggleClass(‘animated hinge’);}
// );


// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggleClass("main");
//     });
// });