const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelcius = Math.round(((tempInFahrenheit - 32) / (9 / 5)) * 10) / 10;
  return tempInCelcius;
};

const convertToFahrenheit = function (tempInCelcius) {
  let tempInFahrenheit = Math.round((tempInCelcius * (9 / 5) + 32) * 10) / 10;
  return tempInFahrenheit;
};
console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
