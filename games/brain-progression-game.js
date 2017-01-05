// @flow

import { getRandom } from '../index';

const range = (start, size) => [...Array(size).keys()].map(item => item + start);
const genProgression = (start, step, size) =>
  range(start, size * step).filter((_, idx) => idx % step === 0);

const brainProgression = params =>
    ({
      getDescription: () => 'What number is missing in this progression?',
      getQuestion: () => {
        const size = 10;
        const start = getRandom(params.maxNumber);
        const step = getRandom(params.maxNumber);
        const hiddenIdx = getRandom(size - 1);
        const arr = genProgression(start, step, 10);
        return ({ prog: arr, idx: hiddenIdx });
      },
      stringifyQuestion: (question) => {
        const res = question.prog.slice();
        res[question.idx] = '..';
        return res.join(' ');
      },
      isAnswerValid: answer => !isNaN(Number(answer)),
      isAnswerCorrect: (answer, q) => Number(answer) === q.prog[q.idx],
      getCorrectAnswer: question => question.prog[question.idx],
    });

export default brainProgression;
