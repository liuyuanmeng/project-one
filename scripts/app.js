function init() {
  // Elements
  
  
  const grid = document.querySelector('#grid')
  
  const startButton = document.querySelector('#start')
  let timerId
  let secondTimerId
  let thirdTimerId
  let outcomeTimerId
  
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
    addFrog(startPosition)
  }
  //  Character setup
  const frogClass = 'frog' 
  const startPosition = 75   
  let currentPosition = startPosition 
  // Executions
  function addFrog(position){
    cells[position].classList.add(frogClass)
  }
  function removeFrog(position){
    cells[position].classList.remove(frogClass)
  }

  // Movement function
  function handleKeyDown(event){
    const key = event.keyCode
    const left = 37 
    const right = 39
    const up = 38
    const down = 40
    // Remove frog whilst currentPosition matches the old frog position
    removeFrog(currentPosition)


    // console.log(currentPosition % width)
    if (key === left && currentPosition % width !== 0){
      // console.log('MOVED LEFT')
      currentPosition-- // decrement currentPosition by 1 to move character left
    } else if (key === right && currentPosition % width !== width - 1){
      // console.log('MOVED RIGHT')
      currentPosition++ // increment the currentPosition by 1 to move character right
    } else if (key === up && currentPosition >= width){
      // console.log('MOVED UP')
      currentPosition -= width
    } else if (key === down && currentPosition + width < cellCount){
      // console.log('MOVED DOWN')
      currentPosition += width
    } else {
      // console.log('INVALID KEY')
    }

    // Add frog to new position
    addFrog(currentPosition)
    

  }
 
  

  // Events
  // document.addEventListener('keyup', handleKeyDown)
  //  start and pause button addEventListener as We want to know the frog shouldbe move or not.


  // Initial setup
 
  createGrid()


  // creat mario
  cells[10].classList.add('mario')

  for (let i = 11; i < 20; i++) {
    cells[i].classList.add('road')
  }
  function findMario() {
    return cells.slice(10,20).filter(cell => cell.classList.contains('mario'))
  }

  function replaceMario(){
    const fromMario = findMario() 
    const goMarioIndex = fromMario.map(cell => Number(cell.id) < 19 ? Number(cell.id) + 1 : 10)
    console.log(goMarioIndex)
    fromMario.forEach(cell => cell.classList.remove('mario'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario'))
  }
  //creat mario2

  cells[61].classList.add('mario2')
  cells[65].classList.add('mario2')
  cells[68].classList.add('mario2')

  for (let i = 60; i < 70; i++) {
    cells[i].classList.add('road')
  }
  function findMario2 () {
    return cells.slice(60,70).filter(cell => cell.classList.contains('mario2'))
  }
  function replaceMario2() {

    const fromMario = findMario2()
    const goMarioIndex = fromMario.map(cell => Number(cell.id) < 69 ? Number(cell.id) + 1 : 60) 
    console.log(goMarioIndex)
    fromMario.forEach(cell => cell.classList.remove('mario2'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario2'))
  }

  // creat mario3
  cells[31].classList.add('mario3')
  cells[35].classList.add('mario3')
  cells[38].classList.add('mario3')

  for (let i = 30; i < 40; i++) {
    cells[i].classList.add('road')
  }
  function findMario3 () {
    return cells.slice(30,40).filter(cell => cell.classList.contains('mario3'))
  }
  function replaceMario3() {
    const fromMario = findMario3()
    const goMarioIndex = fromMario.map(cell => Number(cell.id) > 30 ? Number(cell.id) - 1 : 39)
    console.log(goMarioIndex)
    fromMario.forEach(cell => cell.classList.remove('mario3'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario3'))

  }

  

  function loseLife() {
    console.log(cells[currentPosition])
    if (cells[currentPosition].classList.contains('frog') && (cells[currentPosition].classList.contains('mario') || cells[currentPosition].classList.contains('mario2') || cells[currentPosition].classList.contains('mario3')) ) {
      
      
      
      removeFrog(currentPosition)
      currentPosition = startPosition
      addFrog(startPosition)
      window.alert('Game Over')

    }

  }

  for (let i = 0; i < 10; i++) {
    cells[i].classList.add('finishLine')

  }
  function win() {
    for (let i = 0; i < 10; i++) {
      if (cells[currentPosition].classList.contains('finishLine')  && cells[currentPosition].classList.contains('frog')) {
        removeFrog(currentPosition)
        currentPosition = startPosition
        addFrog(startPosition)
        window.alert('You Win')
        
      }
    }

  }

  function outComes() { 
    win()
    loseLife()


  }
  // function moveAll() {
  //   setInterval(replaceMario2, 1000)
  //   setInterval(replaceMario, 100)
  
  // }
  startButton.addEventListener('click',  () => {
    if (timerId) {
      clearInterval(timerId)
      clearInterval(secondTimerId)
      clearInterval(thirdTimerId)
      clearInterval(outcomeTimerId)
      timerId = null
      secondTimerId = null
      thirdTimerId = null
      outcomeTimerId = null
      document.removeEventListener('keyup', handleKeyDown)
    } else {
      timerId = setInterval(replaceMario2, 1000)
      secondTimerId = setInterval(replaceMario, 200)
      thirdTimerId = setInterval(replaceMario3,500)
      outcomeTimerId = setInterval(outComes, 100)
      document.addEventListener('keyup', handleKeyDown)

    }
  })

  

  
  
 

  
 
  
  



}

window.addEventListener('DOMContentLoaded', init)



  



  





  





  

 
      
   

  

  
 



