0// Array of hexadecimal values
const hexValues = ['0xfa0', '0x1770', '0x1f40'];

// Function to generate a random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Get a random hexadecimal value from the array
const randomHexValue = hexValues[getRandomIndex(hexValues.length)];

// Convert the hexadecimal value to a decimal integer
const randomDecimalValue = parseInt(randomHexValue, 16);

// Store the decimal value in localStorage
localStorage.setItem('rand', randomDecimalValue);
