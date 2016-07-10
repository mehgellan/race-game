$(document).on('ready', function() {

  console.log("JS linked");
  var game = {
    winnerIs: '',
    jake: 0,
    finn: 0,
    audio: new Audio('img/flylo-glitc.mp3')
  };


  toggleReset();
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
      game.winnerIs = 'finn';
      $('.box').clearQueue().stop(true);
      game.finn++;
      console.log(game.finn);
    } else if (boxTwoOffset >= rowWidth) {
      game.winnerIs = 'jake';
      $('.box').clearQueue().stop(true);
      game.jake++;
    }
    toggleWinnerBanner();
    toggleReset();
  }

  function toggleReset() {
    if (game.winnerIs) {
      $('.reset').show();
    } else {
      $('.reset').hide();
    }
    $('.reset').on('click', function(event) {
      event.preventDefault();
      $('.box').css({left:0});
      $('.target').text('');
      game.winnerIs = '';
      $('.reset').hide();
      console.log(game.finn, game.jake, game.winnerIs);
    });
  }

  function startGame() {
    $('.start').click(function() {
      $(this).parent().fadeOut(500);
    });
    playAudio();
    stopAudio();
  }

  function playAudio() {
    $('.start').click(function() {
      game.audio.play();
    });
  }

  function stopAudio() {
    $('.stop').click(function() {
      game.audio.pause();
    });
  }

  function toggleWinnerBanner() {
    if (game.winnerIs==='finn') {
      $('.target').text('Finn!');
    } else if (game.winnerIs==='jake') {
      $('.target').text('Jake!');
    }
  }
});
