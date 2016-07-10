$(document).on('ready', function() {

  $('button').on('click', function(event) {
    event.preventDefault();
    $('.box').css({left:0});
    console.log("button clicked");
  });

  console.log("JS linked");
  $(document).on('keypress', function handleKeyPress(event) {
    // animates box left
    if (event.which==100) {
      $('#finn').animate({left: "+=100"}, "fast");
    }
    if (event.which==107) {
      $('#jake').animate({left: "+=100"}, "fast");
    }
    detectWinner();
    // alerting the winner


  });

  function detectWinner() {
    var rowWidth = $('.row').outerWidth();
    if ($('#finn').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Finn!");
    } else if ($('#jake').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Jake!");
    }
  }

});
