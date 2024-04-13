unction runAfterDelay(functionToRun, delayInMs) {
  const additionalDelay = functionToRun === scheduleAppointment ? 12000 : 0;
  setTimeout(functionToRun, delayInMs + additionalDelay);
}
