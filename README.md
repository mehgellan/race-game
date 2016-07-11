# Adventure Time Race

A simple start-finish racing game involving two players, where the first one to the finish line wins. The project was built for General Assembly WDI program, and it uses JavaScript, jQuery, & HTML/CSS. 

### Technologies Used

- jQuery: event handlers, image/text-appending, audio
- JavaScript: animation, score-keeping, coountdown, and winner detection
- HTML/CSS: game architecture, styling
- Bootstrap: grid system, responsive styling, buttons
- Google fonts: 'Bangers', cursive
- 

### Existing Features

- Audio track: "A Glitch is a Glitch" - Flying Lotus (https://www.youtube.com/watch?v=hsCTRHr9zuc)
- Many click event listeners e.g., 'start', 'reset', 'stop'
- Start button handles audio play and starts countdown
- Simple 3-2-1 countdown timer with setInterval()/clearInterval()
- Jumbotron (loader) splashpage using fadeIn()/fadeOut()
- Keypress event listener to handle player animation
- Winner detection using comparison to width of parent element
- JS 'game' object to keep track of score and current winner
- Reset button that puts players back at start and increases score
- Header logo click handler to bring back splashpage
- Stop button pauses audio track should annoyance occur
- Images used:
  * Finn head - ![alt-text](http://d1x7zurbps6occ.cloudfront.net/product/xlarge/232071-86042.jpg "Player Finn Head")
  * Finn gif - ![alt-text](http://giphy.com/gifs/happy-excited-adventure-time-rOTGSPxvJJY7m "Finn Winner Gif)
  * Jake head - ![alt-text](http://adventuretimeforum.com/jakehead.png "Player Jake Head")
  * Jake gif - ![alt-text](http://giphy.com/gifs/adventure-time-cartoon-network-8Ry7iAVwKBQpG "Jake Winner Gif")
  * Adventure Time logo - ![alt-text](https://upload.wikimedia.org/wikipedia/en/6/6f/Adventure_Time_logo.png "Adventure Time Logo")

### Planned Features

- Find a more precise way of detecting a winner, not affected by window size
- Have countdown start again once reset button is clicked
- Spruce up styling/positioning/layout of game page
- Turn off keypress event once a winner is detected and back on once reset is clicked

##### Screenshots

Splashpage:
![alt-text](http://imgur.com/TDGxC6t "Screenshot Splashpage")

Game page:
![alt-text](http://imgur.com/WsbGKbs "Screenshot Game page) 







