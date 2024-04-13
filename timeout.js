function executeFunctionWithDelay(functionName, delay) {
    let additionalDelay = 0;
    if (functionName === 'scheduleAppointment') {
        additionalDelay = 4000;
    }
    setTimeout(window[functionName], delay + additionalDelay);
}
