const form = document.getElementById('user-form');
    const gameSection = document.getElementById('game');
    const userNameSpan = document.getElementById('user-name');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const guessResult = document.getElementById('guess-result');
    const diceImages = document.getElementById('dice-images');
    const dice1Image = document.getElementById('dice1');
    const dice2Image = document.getElementById('dice2');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      
      
      
      startGame(name);
    });
    
    guessButton.addEventListener('click', () => {
      const guess = parseInt(guessInput.value);
      
      
      if (isNaN(guess) || guess < 2 || guess > 12) {
        guessResult.textContent = 'Invalid guess! Please enter a number between 2 and 12.';
        return;
      }
      
      
      playGame(guess);
    });
    
    function startGame(name) {
      userNameSpan.textContent = name;
      form.style.display = 'none';
      gameSection.style.display = 'block';
    }
    
    function playGame(guess) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;
      
      dice1Image.src = `dice${dice1}.png`; 
      dice2Image.src = `dice${dice2}.png`; 
      
      diceImages.style.display = 'block';
      
      if (guess === sum) {
        guessResult.textContent = 'Congratulations! You guessed correctly!';
        disableGame();
      } else {
        guessResult.textContent = `Wrong guess! The sum was ${sum}.`;
        guessInput.value = '';
      }
      const remainingAttempts = parseInt(guessButton.getAttribute('data-attempts')) - 1;
      guessButton.setAttribute('data-attempts', remainingAttempts);
      
      if (remainingAttempts === 0) {
        guessResult.textContent += ' Game over!';
        disableGame();
      }
    }
    
    function disableGame() {
      guessInput.disabled = true;
      guessButton.disabled = true;
    }