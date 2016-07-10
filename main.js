$(document).on('ready', function() {

  console.log("JS linked");
  var audio = new Audio('img/flylo-glitc.mp3');
  var winnerIs;

  toggleReset();
  playAudio();
  stopAudio();

  startGame();

  $(document).on('keypress', function handleKeyPress(event) {
    // animates box left
    if (event.which==100) {
      $('#finn').animate({left: "+=50"}, "fast");
    }
    if (event.which==107) {
      $('#jake').animate({left: "+=50"}, "fast");
    }
    detectWinner();
  });

  function detectWinner() {
    var rowWidth = $('.row').outerWidth();
    var boxOneOffset = $('#finn').offset().left;
    var boxTwoOffset = $('#jake').offset().left;
      if (boxOneOffset >= rowWidth) {
      $('.box').clearQueue().stop(true);
      winnerIs = 'finn';
      console.log(winnerIs);
      toggleWinnerBanner();
      toggleReset();
    } else if (boxTwoOffset >= rowWidth) {
      winnerIs = 'jake';
      console.log(winnerIs);
      $('.box').clearQueue().stop(true);
      toggleWinnerBanner();
      toggleReset();
    }
  }

  function toggleReset() {
    if (winnerIs) {
      $('.reset').show();
    } else {
      $('.reset').hide();
    }
    $('.reset').on('click', function(event) {
      event.preventDefault();
      $('.box').css({left:0});
      $('.target').text('');
      winnerIs = 0;
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
    if (winnerIs==='finn') {
      $('.target').text('Finn!');
    } else if (winnerIs==='jake') {
      $('.target').text('Jake!');
    }
  }
});
