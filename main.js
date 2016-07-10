$(document).on('ready', function() {

  console.log("JS linked");
  var audio = new Audio('img/flylo-glitc.mp3');

  toggleReset();

  playAudio();
  stopAudio();

  startGame();

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
    var rowWidth = $('.row').outerWidth();
    var boxOneOffset = $('#finn').offset().left;
    var boxTwoOffset = $('#jake').offset().left;
      if (boxOneOffset >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Finn!");
    } else if (boxTwoOffset >= rowWidth) {
      $('.box').clearQueue().stop(true);
      $('.target').text("Jake!");
    }
  }

  function toggleReset() {
    $('.reset').on('click', function(event) {
      event.preventDefault();
      $('.box').css({left:0});
      console.log("button clicked");
    });
  }

  function startGame() {
    $('.start').click(function() {
      $(this).parent().fadeOut(500);
    });
  }

  function playAudio() {
    $('.start').click(function() {
      audio.play();
    });
  }

  function stopAudio() {
    $('.stop').click(function() {
      audio.pause();
    });
  }

  function toggleWinnerBanner() {
    if ($('#finn')) {

    }
  }



});
