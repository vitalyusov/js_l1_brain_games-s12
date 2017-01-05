// @flow

import { getRandom } from '../index';

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

const brainEven = params =>
    ({
      getDescription: () => 'Find the greatest common divisor of given numbers.',
      getQuestion: () => ({
        num1: getRandom(params.maxNumber),
        num2: getRandom(params.maxNumber),
      }),
      stringifyQuestion: question => `${question.num1} ${question.num2}`,
      isAnswerValid: answer => !isNaN(Number(answer)),
      isAnswerCorrect: (answer, q) => Number(answer) === calcGcd(q.num1, q.num2),
      getErrorMsg: (answer, q) => `'${answer}' is wrong answer ;(. Correct answer was '${calcGcd(q.num1, q.num2)}'.\n`,
    });

export default brainEven;
