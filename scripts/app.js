function init() {
  // Elements
  
  
  const grid = document.querySelector('#grid')
  const lives =document.querySelector('#lives')
  // console.log(lives)
  const button = document.querySelector('#start-pause')
  // console.log(button)
  let livesRemaining = 3
  
  // Grid cretion
  const width = 10
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
    addNiulang(startPosition)
  }
  //  Character setup
  const niulangClass = 'niulang' 
  const startPosition = 75   
  let currentPosition = startPosition 
  // Executions
  function addNiulang(position){
    cells[position].classList.add(niulangClass)
  }
  function removeNiulang(position){
    cells[position].classList.remove(niulangClass)
  }

  // Movement function
  function handleKeyDown(event){
    const key = event.keyCode
    const left = 37 
    const right = 39
    const up = 38
    const down = 40
    // Remove cat whilst currentPosition matches the old cat position
    removeNiulang(currentPosition)


    console.log(currentPosition % width)
    if (key === left && currentPosition % width !== 0){
      console.log('MOVED LEFT')
      currentPosition-- // decrement currentPosition by 1 to move character left
    } else if (key === right && currentPosition % width !== width - 1){
      console.log('MOVED RIGHT')
      currentPosition++ // increment the currentPosition by 1 to move character right
    } else if (key === up && currentPosition >= width){
      console.log('MOVED UP')
      currentPosition -= width
    } else if (key === down && currentPosition + width < cellCount){
      console.log('MOVED DOWN')
      currentPosition += width
    } else {
      console.log('INVALID KEY')
    }

    // Add cat to new position
    addNiulang(currentPosition)
    

  }
 
  

  // Events
  document.addEventListener('keydown', handleKeyDown)
  //  start and pause button addEventListener as We want to know the frog shouldbe move or not.


  // Initial setup
 
  createGrid()

  // monster and addclasslist
  // 

  for (let i = 50; i < 60; i++) {
    if (i === 51 || i === 55 || i === 58){
      cells[i].classList.add('monster')
    } else if (i === 52 || i === 53 || i === 56 || i === 59) {
      cells[i].classList.add('road')
    } else {
      cells[i].classList.add('road2')
    }
      
  }
  // function autoMoveElements(){

  // } 
  function moveMonster(){
    for (let i = 50; i < 60; i++) {
      if (cells[i].classList.contains('monster')){
        cells[i].classList.remove('monster')
        cells[i].classList.add('road2')
      } else if (cells[i].classList.contains('road2')){
        cells[i].classList.remove('road2')
        cells[i].classList.add('road')

      } else if (cells[i].classList.contains('road')){
        cells[i].classList.remove('road')
        cells[i].classList.add('monster')

      }

    }

    
  }

  setInterval(moveMonster, 1000)

  // addclasslist for SNAKE that move to the right
  for (let i = 30; i < 40; i++) {
    if (i % 2 === 0){
      cells[i].classList.add('snake')
    }  else {
      cells[i].classList.add('road')
    }
      
  }

  function moveSnake(){
    for (let i = 30; i < 40; i++) {
      if (cells[i].classList.contains('road')){
        cells[i].classList.remove('road')
        cells[i].classList.add('snake')
      } else if (cells[i].classList.contains('snake')){
        cells[i].classList.remove('snake')
        cells[i].classList.add('road')

      } 

    }

    
  }
  setInterval(moveSnake, 500)

//  addmonster2
  for (let i = 20; i < 30; i++) {
    if (i % 2 !== 0){
      cells[i].classList.add('monster2')
    }  else {
      cells[i].classList.add('road')
    }
      
  }
  function moveMonster2Left(){
    for (let i = 20; i < 30; i++) {
      if (cells[i].classList.contains('road')){
        cells[i].classList.remove('road')
        cells[i].classList.add('monster2')
      } else if (cells[i].classList.contains('monster2')){
        cells[i].classList.remove('monster2')
        cells[i].classList.add('road')

      } 

    }

    
  }
  setInterval(moveMonster2Left, 200)

  // lose function

  // function lose() {
  //   for (let i = 0; i < 80; i++){
  //     if (
  //       (cells[i].classList.contains('monster') || cells[i].classList.contains('snake') || cells[i].classList.contains('monster2')) 
  //     && cells[i].classList.contains('niuland')) 
  //       livesRemaining <= 0 
      
  //     window.alert('You dead')
  //     document.removeEventListener('keydown')

  //   }
  // }

  // lose()

  // for (let i = 0; i < 10; i++) {
  //   cells[i].classList.add('finishLine')

  // }
  

  // function win() {
  //   for (let i = 0; i < 80; i++) {
  //     if (cells[i].classList.contains('finishLine')){
      
  //       window.alert('You Win')
  //       document.removeEventListener('keydown')

  //     }
  //   }
  // }

  


}


  

 
      
   

  

  
 


window.addEventListener('DOMContentLoaded', init)
