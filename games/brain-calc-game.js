// @flow

import { getRandom } from '../index';

const getEvaluator = (op) => {
  switch (op) {
    case '+':
      return (a, b) => a + b;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    default:
      return () => NaN;
  }
};


const getAnswer = (expr, askFn) => {
  while (true) {
    const answer = Number(askFn(expr));
    if (!isNaN(answer)) {
      return answer;
    }
  }
};

const brainCalc = () =>
   ({
     description: 'What is the result of the expression?',
     turn: (params) => {
       const num1 = getRandom(params.maxNumber);
       const num2 = getRandom(params.maxNumber);
       const op = ['+', '-', '*'][getRandom(2)];
       const expected = getEvaluator(op)(num1, num2);
       const answer = getAnswer(`${num1} ${op} ${num2}`, params.askAnswer);
       return { result: expected === answer, msg: `${answer} answer was wrong ;( Correct answert is ${expected}` };
     },
   });
export default brainCalc;
