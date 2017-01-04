const answerTypeYN = (answer, correctFn) => {
  if (!(typeof answer === 'boolean')) {
    return 'repeat';
  }
  if (correctFn()) {
    return 'correct';
  }
  return 'incorrect';
};

const reverseYNStr = answer => (answer ? 'no' : 'yes');
const answerToStr = answer => (answer ? 'yes' : 'no');
export { answerTypeYN, reverseYNStr, answerToStr };
