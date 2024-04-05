const hexValues = ['0xfa0', '0x1770', '0x1f40', '0x2710'];
// Randomly pick one value from the hexValues array
const randomIndex = Math.floor(Math.random() * hexValues.length);
const randomValue = hexValues[randomIndex];

// Store the random value in localStorage
localStorage.setItem('rand', randomValue);
