// timeout.js
function runAfterDelay(func, delay) {
  setTimeout(func, delay);
}

function scheduleAppointment(func, initialDelay, additionalDelay) {
  setTimeout(() => {
    func();
    setTimeout(func, additionalDelay);
  }, initialDelay);
}

// Export the functions
export { runAfterDelay, scheduleAppointment };
