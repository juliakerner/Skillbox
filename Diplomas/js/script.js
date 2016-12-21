
/* Spinner */

$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

/* tooltip */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function(){
    $('body').tooltip({ selector: '[data-toggle="tooltip"]' });
});

/* popover */

$(function () {
  $('[data-toggle="popover"]').popover()
})







