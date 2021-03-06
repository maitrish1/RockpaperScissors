const computerChoiceDisplay=document.getElementById('computer-choice')
        const userChoiceDisplay=document.getElementById('user-choice')
        const resultDisplay=document.getElementById('result')
        let possibleChoices=document.querySelectorAll('button')

        let userScoreDisplay=document.getElementById('user-score')
        let computerScoreDisplay=document.getElementById('computer-score')

        let computerChoice
        let userChoice
        let result
        let userScore=0, computerScore=0
        let ultScoreDisplay=document.getElementById('ult-score')
        
        function userPlay(){
            possibleChoices.forEach(button=>button.addEventListener('click',(e)=>{
            userChoice=e.target.id
            userChoiceDisplay.innerHTML= userChoice
            computerPlay()
            getResult()
        }))
        }
      userPlay()


    function computerPlay(){
        let arr=['rock','paper','scissor'] 
        computerChoice=arr[Math.floor(Math.random()*3)]
        computerChoiceDisplay.innerHTML=computerChoice
        }


    function getResult(){
        if(computerChoice===userChoice){
            result='its a draw'
        }
        if(computerChoice==='rock' && userChoice==='paper'){
            result='  You win'
            userScore++
        }
        if(computerChoice==='rock' && userChoice==='scissor'){
            result=' You lose'
            computerScore++
        }
        if(computerChoice==='paper' && userChoice==='scissor'){
            result='  You win'
            userScore++
        }
        if(computerChoice==='paper' && userChoice==='rock'){
            result='  You lose'
            computerScore++
        }
        if(computerChoice==='scissor' && userChoice==='rock'){
            result='  You win'
            userScore++
        }
        if(computerChoice==='scissor' && userChoice==='paper'){
            result='  You lose'
            computerScore++
        }
            resultDisplay.innerHTML=result
            userScoreDisplay.innerHTML=userScore
            computerScoreDisplay.innerHTML=computerScore
        // return userScore
        // return computerScore
        if(userScore===10){
          disableButtons()
            ultScoreDisplay.innerHTML='Player wins'
        }
        if(computerScore===10){
          disableButtons()
            ultScoreDisplay.innerHTML='Computer wins'
    }
    }

   function disableButtons(){
    possibleChoices.forEach(button=>{
        button.disabled=true
    })
   }