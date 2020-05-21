import countries from './countries.json';
const OPTIONS = 4;

const getRandomOptions = (array) => {
  const result = new Array(OPTIONS);
  let length = array.length;
  const taken = new Array(length);
  let options = OPTIONS;
  while (options--) {
    const x = Math.floor(Math.random() * length);
    result[options] = {...array[x in taken ? taken[x] : x]};
    taken[x] = --length in taken ? taken[length] : length;
  }
  return result;
}

//these constants:
// - allows selecting the correct property in the country object
// - acts as a game type
export const FLAG = 'flag';
export const CAPITAL = 'capital';

export const getOptionsWithCorrect = (game) => {
  const countriesList = (game === CAPITAL)
    ? countries.filter(country => country[CAPITAL] !== '')
    : countries;
  const options = getRandomOptions(countriesList);
  const correctIndex = Math.floor(Math.random() * options.length);
  options[correctIndex].correct = true;
  return options;
}
