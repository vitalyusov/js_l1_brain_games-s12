// @flow

import readlineSync from 'readline-sync';

const brainEven = () => {
  const actual = readlineSync.question('May I have your name? ', { limit: /^(?!\s*$).+/, limitMessage: 'You can\'t play anonymously!\n' });
  console.log(`Hello, ${actual}`);
};

export default brainEven;
