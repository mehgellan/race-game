$(document).on('ready', function() {

  $('button').on('click', function(event) {
    event.preventDefault();
    $('.box').css({left:0});
    console.log("button clicked");
  });

  console.log("JS linked");
  $(document).on('keypress', function handleKeyPress(event) {
    console.log("keys pressed");
    // animates box left
    if (event.which==100) {
      $('#blue').animate({left: "+=100"}, "fast");
    }
    if (event.which==107) {
      $('#green').animate({left: "+=100"}, "fast");
    }
    detectWinner();
    // alerting the winner


  });

  function detectWinner() {
    var rowWidth = $('.row').outerWidth();
    if ($('#blue').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Blue!");
    } else if ($('#green').offset().left >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Green!");
    }
  }

});
