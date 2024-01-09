import * as c from './../actions/ActionTypes';
const fs = require('fs');
const MAX = 14854;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case c.SET_RANDOM_WORD:
      fs.readFile('./../../valid-wordle-words.txt', 'utf8', (err, data) => {
        if (err) throw err
        return data.split('\n')[Math.floor(Math.random() * MAX)];
      });
  }
}