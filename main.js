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
      $('.countdown').css('visibility', 'visible');
      countDown();
      playAudio();
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
        // playAudio();
        $('.countdown').parent().fadeOut(300);
      }
    }
  }

  function handleKeyPress() {
    $(document).on('keypress', function(event) {
      // animates box left
      if (event.which==102) {
        $('#finn').animate({left: "+=20"}, "fast");
      }
      if (event.which==106) {
        $('#jake').animate({left: "+=20"}, "fast");
      }
      detectWinner();
    });
  }

  function detectWinner() {
    var rowWidth = $('.length').width(),
        boxOneOffset = $('#finn').offset().left,
        boxTwoOffset = $('#jake').offset().left
    ;
    if (boxOneOffset >= rowWidth) {
      game.winnerIs = 'finn';
      $('.box').clearQueue().stop(true);
    } else if (boxTwoOffset >= rowWidth) {
      game.winnerIs = 'jake';
      $('.box').clearQueue().stop(true);
    }
    setWinnerBannerText();
    toggleReset();
  }

  function setWinnerBannerText() {
    if (game.winnerIs==='finn') {
      $('.target').text('Finn the Human!');
      $('.target').append('<img src="img/finn.gif">');
    } else if (game.winnerIs==='jake') {
      $('.target').text('Jake the Dog!');
      $('.target').append('<img src="img/jake.gif">');
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
      $('.finn-score').text("Finn's score: " + game.finn);
      $('.jake-score').text("Jake's score: " + game.jake);
      // event.preventDefault();
      $('.box').css({left:0});
      $('.target').text('');
      game.winnerIs = '';
      $('.reset').hide();
    });
  }

  function playAudio() {
      game.audio.play();
  }

  function stopAudio() {
    $('.stop').click(function() {
      game.audio.pause();
    });
  }

});
