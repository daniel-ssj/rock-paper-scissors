const game = () => {
    let pScore = 0
    let cScore = 0

    const startGame = () => {
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const computerOptions = ['rock', 'paper', 'scissors']
        
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                
                compareChoice(this.textContent, computerChoice)
            })
        })    
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareChoice = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')
        if(playerChoice === compareChoice){
            winner.textContent == 'Tie!'
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!'
                pScore++
                updateScore();
                return
            }else{
                winner.textContent = 'Computer wins!'
                cScore++
                updateScore();
                return
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!'
                cScore++
                updateScore();
                return
            }else{
                winner.textContent = 'Player wins!'
                pScore++
                updateScore();
                return
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!'
                cScore++
                updateScore();
                return
            }else{
                winner.textContent = 'Player wins!'
                pScore++
                updateScore();
                return
            }
        }
        
    }

    startGame();
    playMatch();
}

game()
