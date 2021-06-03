const cpuNumberCalculator = () => {

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  
  let randomSign;

    if (randomNumber === 1) {
      randomSign = 'rock';
    }
    if (randomNumber === 2) {
      randomSign = 'paper';
    }
    if (randomNumber === 3) {
      randomSign = 'scissors';
    }
    return randomSign;
  }



module.exports = cpuNumberCalculator;
