// Function to execute a function after a specified delay
function runAfterDelay(func, delay) {
  setTimeout(func, delay);
}

// Function to schedule an appointment with an additional delay
function scheduleAppointment(func, initialDelay, additionalDelay) {
  setTimeout(() => {
    func();
    setTimeout(func, additionalDelay);
  }, initialDelay);
}

// Export the functions
export { runAfterDelay, scheduleAppointment };
