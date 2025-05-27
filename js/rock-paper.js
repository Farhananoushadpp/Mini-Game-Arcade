function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  document.getElementById('result').innerHTML = `
    You chose <b>${playerChoice}</b><br>
    Computer chose <b>${computerChoice}</b><br>
    <strong>${result}</strong>
  `;
}

function restartGame() {
  document.getElementById('result').innerHTML = '';
}
