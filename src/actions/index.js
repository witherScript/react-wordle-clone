import * as c from './ActionTypes';

export const setRandomWord = () => ({
  type: c.SET_RANDOM_WORD
});

export const makeGuess = (guess) => ({
  type: c.MAKE_GUESS
  
});