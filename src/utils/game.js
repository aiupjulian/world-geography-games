import countries from './countries.json';
const OPTIONS = 4;

const getRandomOptions = (array) => {
  let result = new Array(OPTIONS),
      len = array.length,
      taken = new Array(len),
      options = OPTIONS;
  while (options--) {
      const x = Math.floor(Math.random() * len);
      result[options] = array[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
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
  return [options, correctIndex];
}
