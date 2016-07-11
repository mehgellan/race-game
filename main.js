$(document).on('ready', function() {

// variables
  var game = {
    winnerIs: '',
    jakeWins: 0,
    finnWins: 0,
    audio: new Audio('img/flylo-glitc.mp3')
  };

// initiate start button click
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
// set 3-2-1 timer
  function countDown() {
    var count = 3,
        counter = setInterval(timer, 1000);
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
// animate player boxes with keypress F, J
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
    if ((boxOneOffset >= rowWidth) && (boxTwoOffset >= rowWidth)) {
      game.winnerIs = 'tie';
      $('.box').clearQueue().stop(true);
    }
    else if (boxOneOffset >= rowWidth) {
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
    if (game.winnerIs==='tie') {
      $('.target-text').text("It's a tie!");
      $('.target').append('<img src="img/tie.gifs">');
    }
    else if (game.winnerIs==='finn') {
      $('.target-text').text('Finn the Human!');
      $('.target').append('<img src="img/finn.gif">').addClass('img-fluid');
    } else if (game.winnerIs==='jake') {
      $('.target-text').text('Jake the Dog!');
      $('.target').append('<img src="img/jake.gif">').addClass('img-fluid');
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
        game.finnWins++;
      } else if (game.winnerIs==='jake') {
        game.jakeWins++;
      }
      $('.finn-score').text("Finn's score: " + game.finnWins);
      $('.jake-score').text("Jake's score: " + game.jakeWins);
      $('.box').css({left:0});
      $('.target-text').text('');
      $('.target').html('');
      game.winnerIs = '';
      $('.reset').hide();
    });
  }

  fadeInJumbotron();
  function fadeInJumbotron() {
    $('.reset').click(function() {
      $('.jumbotron').fadeIn(1000);
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
