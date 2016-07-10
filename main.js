$(document).on('ready', function() {

  console.log("JS linked");
  // $('button').hide();
  $('button').on('click', function(event) {
    event.preventDefault();
    $('.box').css({left:0});
    console.log("button clicked");
  });
  $(document).on('keypress', function handleKeyPress(event) {
    // animates box left
    if (event.which==100) {
      $('#finn').animate({left: "+=100"}, "fast");
    }
    if (event.which==107) {
      $('#jake').animate({left: "+=100"}, "fast");
    }
    detectWinner();

  });

  function detectWinner() {
    var rowWidth = $('.row').outerWidth;
    if (($('#finn').offset().left && $('#jake').offset().left) === rowWidth) {
      $('.target').text("It's a tie!");
    } else if ($('#finn').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Finn!");
      $('.button').show();
    } else if ($('#jake').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Jake!");
      $('.button').show();
    }
  }

});
