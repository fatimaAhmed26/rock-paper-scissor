/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice =''

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
        rock.classList.add('hidden')
        console.log('user chose rock')
    }if(userChoice === 'Paper'){
         paper.classList.add('hidden')
        console.log('user chose paper ')
    }
    if(userChoice === 'Scissor'){
        Scissor.classList.add('hidden')
        console.log('user chose Scissor ')
    }
    console.log('user choice: ' + userChoice)
    console.log(event.target.id)
})

//reset button 
reset.addEventListener('click', function(){
    paper.classList.remove('hidden')
    rock.classList.remove('hidden')
    Scissor.classList.remove('hidden')

})

/*-------------------------------- Functions --------------------------------*/