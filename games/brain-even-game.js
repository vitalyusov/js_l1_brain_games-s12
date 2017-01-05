// @flow

import { getRandom } from '../index';

const isOdd = num => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = params =>
    ({
      getDescription: () => 'Answer "yes" if number odd otherwise answer "no".',
      getQuestion: () => getRandom(params.maxNumber),
      stringifyQuestion: question => question,
      isAnswerValid: answer => answer === 'yes' || answer === 'no',
      isAnswerCorrect: (answer, question) => isOdd(question) === answer,
      getCorrectAnswer: question => isOdd(question),
    });

export default brainEven;
