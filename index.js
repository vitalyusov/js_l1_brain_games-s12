import readlineSync from 'readline-sync';

const play = (game) => {

  const gameParams = { neededAnswers: 3, maxNumber: 100 };

  console.log('Welcome to the Brain Games!');
  
  const actual = readlineSync.question('May I have your name? ', { limit: /^(?!\s*$).+/, limitMessage: 'You can\'t play anonymously!\n' });
  console.log(`Hello, ${actual}!`);

  const gameItem = game();
  console.log(gameItem['description']);

  for (let i = 0; i < gameParams.neededAnswers; i++) {
    const res = gameItem.turn(gameParams);
    if (res['result']) {
      console.log('Correct!')
    } 
    else {
      console.log(res['msg']);
      console.log(`Let's try again, ${actual}`);
      return false;
    }
    
  }

  
   
  console.log(`Congratulations, ${actual}!`)
  return true;

}

export default play;