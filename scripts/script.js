fs = require('fs');
const flags = JSON.parse(fs.readFileSync('./flags.json').toString());
const countriesInfo = JSON.parse(fs.readFileSync('./countriesInfo.json').toString());
const finalJson = [];
flags.forEach((flag) => {
  const { capital = '', continent = '' } =
    countriesInfo.find((country) => country.countryName === flag.name) || {};
  if (capital === '') {
    console.error("We don't have capital city for this country: ", flag.name);
  }
  if (continent === '') {
    console.error("We don't have continent for this country: ", flag.name);
  }
  finalJson.push({
    name: flag.name,
    flag: flag.flag,
    capital,
    continent,
  });
});
fs.writeFile('../src/countries.json', JSON.stringify(finalJson), () =>
  console.log('Countries JSON created')
);
