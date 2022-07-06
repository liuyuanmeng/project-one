## project-one

                                    Project One - Frog vs Mario
## Overview
 This was the first project for the Software Engineering Immersive course and also my first ever project using JavaScript. We were given a timeline of one week to delivery the final product.  Frog vs Mario is a grid-based game modelled on the 1981 arcade action game Frogger. The players must avoid falling into the water and getting hit by the obstacles to win. In Frog vs Mario, players has six lifes to reach the finish line. 

Link to the game
https://liuyuanmeng.github.io/project-one/

## Technologies used 

* HTML5 with HTML5 audio
* CSS3 with animation
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts




## JavaScript
The JavaScript is sectioned out as follows:
* createGrid() function for creating the starting grid
* KeyUp event to move the frog character 
* Create obstacles
* Lose and Win functions - update lives, clearnInterval and Audio effects
* EventListener for modal display
* OutComes Check
Click event to start the game - clearInterval / setInterval to move obstacles, check win and lose and reset lives. 

## Working Schedule :

Day 1 - Wireframe planning
Collecting thoughts and methods will be used for this project.

Day 2 - Create a grid + Set obstacles.
Added frog to a starting position and used a keyUp EventListener to move around. Added Mario to the grid. Used setInterval to move Mario at different speeds. 

Day 3 - Win /  Lose Functions + Start / Pause Button eventListener
Day 4 - Added static obstacles + Added checkOutcomes funnction
Day 5 - Sound effects + Modal Boxes +  update button.eventListener + final CSS polish

## Screenshot Walkthrough
* Main game page
<img width="600" alt="Screenshot 2022-07-05 at 13 12 45" src="https://user-images.githubusercontent.com/100864042/177324616-0f245c07-9ed5-4f5d-b162-bff0a1d371eb.png">
*  Moving obstacles
<img width="600" alt="Screenshot 2022-07-05 at 13 13 09" src="https://user-images.githubusercontent.com/100864042/177324679-2f73c02f-a426-4adf-90fc-f337adff2539.png">
*  Model box pop up for result 
<img width="600" alt="Screenshot 2022-07-05 at 13 14 45" src="https://user-images.githubusercontent.com/100864042/177324940-a0f913e8-dbaa-4f31-abb8-51a157e297cb.png">

## Featured Code
* To first create the grid, I used a for loop which creates HTML divs and then appends cell to the parent grid. creates an 10 by 8 grid.
```const width = 10
  const height = 8
  const cellCount = width * height
  const cells = []
 
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)

    }
    addFrog(startPosition)
  }
  ```
  * Displayed here is the logic which allows the player move around "obstacles"
  ```function handleKeyDown(event){
    const key = event.keyCode
    const left = 37 
    const right = 39
    const up = 38
    const down = 40
    
    removeFrog(currentPosition)
    if (key === left && currentPosition % width !== 0 && !(cells[currentPosition - 1].classList.contains('obstacles')) ){
    
      currentPosition--
    } else if (key === right && currentPosition % width !== width - 1 && !(cells[currentPosition + 1].classList.contains('obstacles'))){
    
      currentPosition++ 
    } else if (key === up && currentPosition >= width && !(cells[currentPosition - width].classList.contains('obstacles'))){
      
      currentPosition -= width
    } else if (key === down && currentPosition + width < cellCount && !(cells[currentPosition + width].classList.contains('obstacles'))){
    
      currentPosition += width
    } else {
      // console.log('INVALID KEY')
    }

    // Add frog to new position
    addFrog(currentPosition)
    

  }
  ```
  



## Key Learnings:
* How to create the grid and set non-moving obstacles in the grid.
* Control flow 
* How to create the modal box.
* How to use play() and pause() functions to control the audio (loop background music)
* SetInterval() method

## Challenges:

Create moving obstacles running smoothly in the grid.

## Future Improvements:
* Set multiple characters 
* Increase speed after each round.
* Add more sound effects and collision effects.
* Rewrite functions with arguments to reduce the amount of code.


