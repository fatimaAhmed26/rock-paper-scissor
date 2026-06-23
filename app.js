/*-------------------------------- Constants --------------------------------*/
const choiceArr = ['rock', 'paper', 'scissor']
/*-------------------------------- Variables --------------------------------*/
let userChoice = ''
let computerChoice = ''
let winner = ''

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const Scissor = document.querySelector('#scissor')
const reset = document.querySelector('#reset')
const resetDisplay = document.querySelector('#resetDisplay')

/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function (Event) {
  userChoice = event.target.id

  //hide the choices are not user choice
  if (userChoice === 'Rock') {
    paper.setAttribute('disabled', 'disabled')
    Scissor.setAttribute('disabled', 'disabled')
    console.log('user chose rock')
  } else if (userChoice === 'Paper') {
    rock.setAttribute('disabled', 'disabled')
    Scissor.setAttribute('disabled', 'disabled')
    console.log('user chose paper ')
  } else if (userChoice === 'Scissor') {
    rock.setAttribute('disabled', 'disabled')
    paper.setAttribute('disabled', 'disabled')
    console.log('user chose Scissor ')
  }
  console.log('user choice: ' + userChoice)
  console.log(event.target.id)
  // when computer makes a choice
  let randIndex = Math.floor(Math.random() * 3)
  computerChoice = choiceArr[randIndex]
  if (userChoice === computerChoice) {
    winner = 'tie'
  } else if (
    (userChoice === 'rock' && computerChoice === 'Scissor') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    winner = 'user'
  } else {
    winner = 'computer'
  }
  resetDisplay.textContent = `Computer chose ${computerChoice}. You chose ${userChoice}. Winner is ${winner}`
})

//winner results

//reset button
reset.addEventListener('click', function () {
  // paper.classList.remove('hidden')
  // rock.classList.remove('hidden')
  // Scissor.classList.remove('hidden')

  paper.removeAttribute('disabled')
  rock.removeAttribute('disabled')
  Scissor.removeAttribute('disabled')
})

/*-------------------------------- Functions --------------------------------*/