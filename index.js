import readlineSync from 'readline-sync';

const play = (game) => {
  //return readlineSync.question(`Question: ${question}\nYour answer: `).toLowerCase();
  const gameParams = { neededAnswers: 3, maxNumber: 100 };

  const gameItem = game(gameParams);

  console.log('Welcome to the Brain Games!');
  
  const actual = readlineSync.question('May I have your name? ', { limit: /^(?!\s*$).+/, limitMessage: 'You can\'t play anonymously!\n' });
  console.log(`Hello, ${actual}!`);

  console.log(gameItem.getDescription());

  for (let i = 0; i < gameParams.neededAnswers; i++) {
    const question = gameItem.getQuestion();
    const questionStr = gameItem.stringifyQuestion(question);
    
    let answer;

    while(!gameItem.isAnswerValid((answer = readlineSync.question(`Question: ${questionStr}\nYour answer: `).toLowerCase()))) {}

    if (gameItem.isAnswerCorrect(answer, question)) {
      console.log('Correct!')
    } 
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameItem.getCorrectAnswer(question)}'.\n`);
      console.log(`Let's try again, ${actual}`);
      return false;
    }
    
  }
  console.log(`Congratulations, ${actual}!`)
  return true;
}


const getRandom = (maxNumber) => Math.floor((Math.random() * maxNumber) + 1);

export {getRandom};
export default play;