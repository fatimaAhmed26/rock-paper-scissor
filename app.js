/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice =''

/*------------------------ Cached Element References ------------------------*/
const choices =document.querySelector('#choices')


/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(Event){
    userChoice = event.target.id
    console.log('user choice: ' + userChoice)
    console.log(event.target.id)
    
})

/*-------------------------------- Functions --------------------------------*/