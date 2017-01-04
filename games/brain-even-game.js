// @flow

import { getRandom } from '../index';

const isOdd = num => (num % 2 === 0);
const answerToStr = answer => (answer ? 'yes' : 'no');
const getAnswer = (number, askFn) => {
  while (true) {
    const answer = askFn(number);
    switch (answer) {
      case 'yes':
        return true;
      case 'no':
        return false;
      default:
    }
  }
};
const brainEven = () =>
    ({
      description: 'Answer "yes" if number odd otherwise answer "no".',
      turn: (params) => {
        const number = getRandom(params.maxNumber);
        const answer = getAnswer(number, params.askAnswer);
        return { result: isOdd(number) === answer, msg: `'${answerToStr(answer)}' is wrong answer ;(. Correct answer was '${answerToStr(!answer)}'.\n` };
      },
    });

export default brainEven;
