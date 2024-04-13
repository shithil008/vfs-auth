function runAfterDelay(functionToRun, delayInMs, additionalDelay = 0) {
  setTimeout(functionToRun, delayInMs + additionalDelay);
}
