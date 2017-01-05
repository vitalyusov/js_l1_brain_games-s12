// @flow

import { getRandom } from '../index';

const numToDigits = num => String(num).split('').map(item => Number(item));
const balanceArr = (digits) => {
  const sorted = digits.slice().sort();
  const first = sorted.shift();
  const last = sorted.pop();
  if (digits.length === 1 || last - first <= 1) {
    return Number(sorted.concat(first, last).sort().join(''));
  }
  return balanceArr(sorted.concat(first + 1, last - 1));
};

const balance = num => balanceArr(numToDigits(num));

const brainBalance = () =>
    ({
      getDescription: () => 'Balance the given number.',
      getQuestion: () => getRandom(9999),
      stringifyQuestion: question => question,
      isAnswerValid: answer => !isNaN(Number(answer)),
      isAnswerCorrect: (answer, question) => Number(answer) === balance(question),
      getCorrectAnswer: question => balance(question),
    });

export default brainBalance;
