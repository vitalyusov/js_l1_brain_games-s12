// @flow

import readlineSync from 'readline-sync';
import { answerTypeYN, reverseYNStr, answerToStr } from './brain-answers';

const isOdd = num => (num % 2 === 0);
const getAnswer = (number) => {
  while (true) {
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `).toLowerCase();
    switch (answer) {
      case 'yes':
        return true;
      case 'no':
        return false;
      default:  
    }
  }
}
const turn = (params) => {
  
    const number = Math.floor((Math.random() * params.maxNumber) + 1);
    const answer = getAnswer(number);
    
    switch (isOdd(number) === answer) {
      case true:
        return {result: true}
      case false:
      default:
        return {resul: false, msg: `'${answerToStr(answer)}' is wrong answer ;(. Correct answer was '${answerToStr(!answer)}'.\n`};
    }

  
};

const brainEven = () => {

  return {
    description: 'Answer "yes" if number odd otherwise answer "no".',
    turn: turn

  };
}

export default brainEven;
