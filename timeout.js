function executeFunctionWithDelay(functionToExecute, delay) {
    let additionalDelay = 0;
    if (functionToExecute.name === 'scheduleAppointment') {
        additionalDelay = 4000;
    }
    setTimeout(functionToExecute, delay + additionalDelay);
}
