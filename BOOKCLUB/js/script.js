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


// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })