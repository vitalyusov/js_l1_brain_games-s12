// @flow

import readlineSync from 'readline-sync';
import { answerTypeYN, reverseYNStr, answerToStr } from './brain-answers';

const isOdd = num => (num % 2 === 0);
const playGame = (name) => {
  const gameParams = { neededAnswers: 3, maxNumber: 100 };
  const iter = (correctCnt, definedNum) => {
    if (correctCnt === gameParams.neededAnswers) {
      return true;
    }

    const number = definedNum || Math.floor((Math.random() * gameParams.maxNumber) + 1);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `, { trueValue: 'yes', falseValue: 'no' });
    const answerType = answerTypeYN(answer, () => isOdd(number) === answer);
    switch (answerType) {
      case 'repeat':
        return iter(correctCnt, number);
      case 'correct':
        console.log('Correct!');
        return iter(correctCnt + 1);
      case 'incorrect':
      default:
        console.log(`'${answerToStr(answer)}' is wrong answer ;(. Correct answer was '${reverseYNStr(answer)}'.\n Let's try again, ${name}!`);
        return iter(correctCnt);
    }
  };
  return iter(0);
};

const brainEven = () => {
  console.log('Answer "yes" if number odd otherwise answer "no".');
  const actual = readlineSync.question('May I have your name? ', { limit: /^(?!\s*$).+/, limitMessage: 'You can\'t play anonymously!\n' });
  console.log(`Hello, ${actual}!`);
  playGame(actual);
  console.log(`Congratulations, ${actual}!`);
};

export default brainEven;
