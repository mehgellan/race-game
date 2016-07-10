$(document).on('ready', function() {

  console.log("JS linked");
  var game = {
    winnerIs: '',
    jake: 0,
    finn: 0,
    audio: new Audio('img/flylo-glitc.mp3'),
  };

  startGame();

  function startGame() {
    $('.start').click(function() {
      countDown();
    });
    stopAudio();
    handleKeyPress();
  }

  function countDown() {
    var count = 3;
    var counter = setInterval(timer, 1000);
    function timer() {
      count--;
      if (count > 0) {
        $('.countdown').html(count);
      } else {
        $('.countdown').html("GO!");
        clearInterval(counter);
        playAudio();
        $('.countdown').parent().fadeOut(500);
      }
    }
  }

  function handleKeyPress() {
    $(document).on('keypress', function(event) {
      // animates box left
      if (event.which==100) {
        $('#finn').animate({left: "+=50"}, "fast");
      }
      if (event.which==107) {
        $('#jake').animate({left: "+=50"}, "fast");
      }
      detectWinner();
    });
  }

  function detectWinner() {
    var rowWidth = $('.row').outerWidth(),
        boxOneOffset = $('#finn').offset().left,
        boxTwoOffset = $('#jake').offset().left
    ;
    if (boxOneOffset >= rowWidth) {
      game.winnerIs = 'finn';
      $('.box').clearQueue().stop(true);
      // game.finn++;
      console.log(game.finn);
      // game.keyOff();
    } else if (boxTwoOffset >= rowWidth) {
      game.winnerIs = 'jake';
      $('.box').clearQueue().stop(true);
      // game.jake++;
    }
    toggleWinnerBanner();
    toggleReset();
  }

  function toggleWinnerBanner() {
    if (game.winnerIs==='finn') {
      $('.target').text('Finn!');
    } else if (game.winnerIs==='jake') {
      $('.target').text('Jake!');
    }
  }

  function toggleReset() {
    if (game.winnerIs) {
      $('.reset').show();
    } else {
      $('.reset').hide();
    }
    $('.reset').on('click', function(event) {
      if (game.winnerIs==='finn') {
        game.finn++;
      } else if (game.winnerIs==='jake') {
        game.jake++;
      }
      // event.preventDefault();
      $('.box').css({left:0});
      $('.target').text('');
      game.winnerIs = '';
      $('.reset').hide();
      console.log(game.finn, game.jake, game.winnerIs);
    });
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

});
