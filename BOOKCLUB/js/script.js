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



// scroll down XXXpx from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("up-btn").style.display = "block";
    } else {
        document.getElementById("up-btn").style.display = "none";
    }
}

// click on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// ****** YOUTUBE video in modal - playback stop with modal closing *****

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $(".cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#PrinceVideoModal").on('hide.bs.modal', function(){
        $(".cartoonVideo").attr('src', '');
    });

    $("#KlykVideoModal").on('hide.bs.modal', function(){
        $(".cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#PrinceVideoModal").on('show.bs.modal', function(){
        $(".cartoonVideo").attr('src', url);
    });

     $("#KlykVideoModal").on('show.bs.modal', function(){
        $(".cartoonVideo").attr('src', url);
    });  
});


$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $(".cartoonAudio").attr('src');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#KlykAudioModal").on('hide.bs.modal', function(){
        $(".cartoonAudio").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */   

      $("#KlykAudioModal").on('show.bs.modal', function(){
        $(".cartoonAudio").attr('src', url);
    });

});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $(".cartoonAudio_eng").attr('src');
   
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#KlykAudioModal_eng").on('hide.bs.modal', function(){
        $(".cartoonAudio_eng").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */    
    $("#KlykAudioModal_eng").on('show.bs.modal', function(){
        $(".cartoonAudio_eng").attr('src', url);
    });

});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $(".cartoonReview").attr('src');
   
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#KlykReviewModal").on('hide.bs.modal', function(){
        $(".cartoonReview").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */    
    $("#KlykReviewModal").on('show.bs.modal', function(){
        $(".cartoonReview").attr('src', url);
    });

});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $(".EseninVideo").attr('src');
   
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#EseninWorkModal").on('hide.bs.modal', function(){
        $(".EseninVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */    
    $("#EseninWorkModal").on('show.bs.modal', function(){
        $(".EseninVideo").attr('src', url);
    });

});


