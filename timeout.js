unction runAfterDelay(functionToRun, delayInMs) {
  const additionalDelay = functionToRun === scheduleAppointment ? 4000 : 0;
  setTimeout(functionToRun, delayInMs + additionalDelay);
}
