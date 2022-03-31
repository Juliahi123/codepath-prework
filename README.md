# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Rui (Rena) Wu**

Time spent: **8** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)
https://glitch.com/edit/#!/incandescent-eastern-bacon?path=script.js%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!

Image on the button will change when click the button and change back when release the button. 
Show the number of mistake user have on the screen and alert every time the user make an mistake. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![lost game](https://github.com/Juliahi123/codepath-prework/blob/main/gamelost.gif)
![firstmistake](https://github.com/Juliahi123/codepath-prework/blob/main/mistake1.gif)
![second mistake](https://github.com/Juliahi123/codepath-prework/blob/main/mistake2.gif)
![third mistake](https://github.com/Juliahi123/codepath-prework/blob/main/mistake3.gif)
![win game part 1](https://github.com/Juliahi123/codepath-prework/blob/main/win1.gif)
![win game part 2](https://github.com/Juliahi123/codepath-prework/blob/main/win2.gif)
![win game part 3](https://github.com/Juliahi123/codepath-prework/blob/main/win3.gif)
![Click each button](https://github.com/Juliahi123/codepath-prework/blob/main/showSound.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[
    add gif in README: https://stackoverflow.com/questions/34341808/is-there-a-way-to-add-a-gif-to-a-markdown-file
    setInterval/setTimeout: 
        https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
        https://www.w3schools.com/jsref/met_win_setinterval.asp
    innerHTML: 
        https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    addAudio:
        https://www.w3schools.com/tags/tag_audio.asp
]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[
    The biggest challenge I encountered in creating this submission is when I tried to add a ticking clock. I was able to use setInterval to decrease the time t by one every second, but I spent a long time trying to figure out when to use the function setInterval as the clock is not supposed to be ticking when the computer is playClueSequence. 
    By testing different places to use the setInterval function, I noticed ‌I need to consider the delay(clueHoldTime and cluuePauseTime) to make sure the time is not decreasing when the user did not start to click the button. Therefore, I realized the setInterval function is not enough for me to implement this function, so I did some research and noticed that the setTimeout function can help me solve this problem. 
    Now, I could make the clock ticking after the play the clue sequence. But I noticed the time of the clock ticking became slower and slower, which made me realize the total delay time is increasing. Therefore, I used the clearTimeout() function to help to clear the delay time so the delay time will not get bigger and bigger. 
    At the end, the clock can tick at the right time with the right speed. And the player will lose the game if they can not get the right answer in 10 second and the player has to restart the game in that case.
    By solving this problem, I noticed that it is important to have a clear idea in the mind about what to do before implement the code. Next time when I wrote something new, I will make a draft about the implement process to make sure everything can be implement smoothly. 
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[
    I am wondering does web developement all about HTML, CSS and Javascript? Do I need any other coding skills to do the web development in the real world industry? 
    When I implement the clock ticking feature for this prework, I noticed the website is very slow as the it is processing the setInterval function, I am wondering is there a way to make the website run faster but still have the clock ticking feature? 
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[
    Right now, when the player did not answer in the 10 second, the player will lose the game. If I have a few more hours to work, I will make it count as 1 mistake and allow the player continues playing. 
    Also, I want to make the speed of the game faster and faster. For example, the clueHoldtime will decrease as the games going and user will have less time to submit their answer. The can submit the answer for the first round in 10 second, 9 second for second round and so on. 
    When the player win or lose the game, instead of popping out an alert, there is a image of happy/sad face and tell player their result. 
    As the game going, the image and the audio of the button can change as well to confused the player. 
    I may make infinite round of game and the player pass more round they will get a higher score instead of win/lose the game. 
]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Rui Wu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
