const hexValues = ['0x9c4', '0xfa0', '0xbb8', '0x1388'];
// Randomly pick one value from the hexValues array
const randomIndex = Math.floor(Math.random() * hexValues.length);
const randomValue = hexValues[randomIndex];

// Store the random value in localStorage
localStorage.setItem('rand', randomValue);
