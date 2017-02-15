$(function () {
  $('[data-toggle="popover"]').popover()
})

  $('.popover-dismiss').popover({
  trigger: 'focus'
})

function myCard() {
    document.getElementByClass("card-img").style.display = "inline";
}
