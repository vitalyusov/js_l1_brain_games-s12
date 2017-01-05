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

const calcExpr = expr => getEvaluator(expr.op)(expr.num1, expr.num2);

const brainCalc = params =>
    ({
      getDescription: () => 'What is the result of the expression?',
      getQuestion: () => ({
        op: ['+', '-', '*'][getRandom(2)],
        num1: getRandom(params.maxNumber),
        num2: getRandom(params.maxNumber),
      }),
      stringifyQuestion: question => `${question.num1} ${question.op} ${question.num2}`,
      isAnswerValid: answer => !isNaN(Number(answer)),
      isAnswerCorrect: (answer, question) => Number(answer) === calcExpr(question),
      getCorrectAnswer: question => calcExpr(question),
    });

export default brainCalc;
