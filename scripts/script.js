fs = require('fs');
const flags = JSON.parse(fs.readFileSync('./flags.json').toString());
const countriesInfo = JSON.parse(fs.readFileSync('./countriesInfo.json').toString());
const finalJson = [];
flags.forEach((flag) => {
  const { capital = "" } = countriesInfo.find(country => country.countryName === flag.name) || {};
  if (capital === "") {
    console.error("We don't have info about this country: ", flag.name);
  }
  finalJson.push({
    name: flag.name,
    flag: flag.flag,
    capital,
  });
});
fs.writeFile(
  '../src/countries.json',
  JSON.stringify(finalJson),
  () => console.log('Countries JSON created')
);