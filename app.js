/*-------------------------------- Constants --------------------------------*/
const choiceArr =['rock' , 'paper','scissor']
/*-------------------------------- Variables --------------------------------*/
let userChoice =''
let computerChoice =''


/*------------------------ Cached Element References ------------------------*/
const choices =document.querySelector('#choices')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const Scissor = document.querySelector('#Scissor')
const reset =document.querySelector('#reset')

/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(Event){

    userChoice = event.target.id

    //hide the choices are not user choice 
    if(userChoice === 'Rock'){
        rock.setAttribute('disabled', 'disabled')
        console.log('user chose rock')
    }if(userChoice === 'Paper'){
         paper.setAttribute('disabled', 'disabled')
        console.log('user chose paper ')
    }
    if(userChoice === 'Scissor'){
       Scissor.setAttribute('disabled', 'disabled')
        console.log('user chose Scissor ')
    }
    console.log('user choice: ' + userChoice)
    console.log(event.target.id)
    // when computer makes a choice 
     let randIndex = Math.floor(Math.random() *3)
    computerChoice = choiceArr[randIndex]
})

//reset button 
reset.addEventListener('click', function(){
   
    // paper.classList.remove('hidden')
    // rock.classList.remove('hidden')
    // Scissor.classList.remove('hidden')

    paper.removeAttribute('disabled')
    rock.removeAttribute('disabled')
    Scissor.removeAttribute('disabled')
})

/*-------------------------------- Functions --------------------------------*/