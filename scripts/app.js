function init() {
  
  const grid = document.querySelector('#grid')
  const startButton = document.querySelector('#start')
  const audio = document.querySelector('#backgroundSong')
  const livesDisplay = document.querySelector('.lives-display')
  const modal = document.querySelector('#myModal')
  const modal2 = document.querySelector('#myModal2')
  
  console.log(modal)
  const spansClose = document.querySelectorAll('.close')
 
  const winSound = document.querySelector('#win')
  const gameOver = document.querySelector('#gameOver')
  
  let timerId
  let secondTimerId
  let thirdTimerId
  let outcomeTimerId
  let lives = 6 
  
  // Grid cretion
  const width = 10
  const height = 8
  const cellCount = width * height
  const cells = []
 
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      const cell = document.createElement('div')
//       Add cell index as data-index attribute
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
  function handleKeyDown(event){
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
 
  // Initial setup
  createGrid()
  // obstacles  setup
  cells[40].classList.add('obstacles')
  cells[44].classList.add('obstacles')
  cells[45].classList.add('obstacles')
  cells[49].classList.add('obstacles')
  cells[22].classList.add('obstacles')
  cells[27].classList.add('obstacles')

  // water setup
  cells[20].classList.add('water')
  cells[21].classList.add('water')
  cells[28].classList.add('water')
  cells[29].classList.add('water')
  cells[52].classList.add('water')
  cells[53].classList.add('water')
  cells[57].classList.add('water')
  cells[58].classList.add('water')

  // create mario
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
    fromMario.forEach(cell => cell.classList.remove('mario'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario'))
  }
  //create mario2


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
    fromMario.forEach(cell => cell.classList.remove('mario2'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario2'))
  }

  // create mario3
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
    fromMario.forEach(cell => cell.classList.remove('mario3'))
    fromMario.forEach(cell => cell.classList.add('road'))
    goMarioIndex.forEach(id => cells[id].classList.remove('road'))
    goMarioIndex.forEach(id => cells[id].classList.add('mario3'))

  }

  

  function loseLife() {
    if (cells[currentPosition].classList.contains('frog') && (cells[currentPosition].classList.contains('mario') || cells[currentPosition].classList.contains('mario2') || cells[currentPosition].classList.contains('mario3') || cells[currentPosition].classList.contains('water')) ) {
      
      removeFrog(currentPosition)
      currentPosition = startPosition
      addFrog(startPosition)
      
      lives-- 
      livesDisplay.innerHTML = 'Lives Remaining:' + ' ' + lives
      if (lives === 0){
        audio.pause()
        gameOver.play()
        modal.style.display = 'block'
        lives = 6
        livesDisplay.innerHTML = 'Lives Remaining:' + ' ' + lives
        document.removeEventListener('keyup', handleKeyDown)
        
      
        clearInterval(timerId)
        clearInterval(secondTimerId)
        clearInterval(thirdTimerId)
        
      } 
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
        winSound.play()
        audio.pause()
        modal2.style.display = 'block'
        
        document.removeEventListener('keyup', handleKeyDown)
      
       
        clearInterval(timerId)
        clearInterval(secondTimerId)
        clearInterval(thirdTimerId)
        
      }
    }

  }

  spansClose.forEach(span => span.addEventListener('click', () => modal.style.display = 'none'))
  spansClose.forEach(span => span.addEventListener('click', () => modal2.style.display = 'none'))


 

  function outComes() { 
    win()
    loseLife()


  }
  
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
      audio.pause()
      document.removeEventListener('keyup', handleKeyDown)
    } else {
      timerId = setInterval(replaceMario2, 1000)
      secondTimerId = setInterval(replaceMario, 200)
      thirdTimerId = setInterval(replaceMario3,500)
      outcomeTimerId = setInterval(outComes, 100)
      audio.play()
      lives = 6
      livesDisplay.innerHTML = 'Lives Remaining:' + ' ' + lives
      document.addEventListener('keyup', handleKeyDown)

    }
  })
}

window.addEventListener('DOMContentLoaded', init)



  



  





  





  

 
      
   

  

  
 



