function generateRandomExpression(number) {
    const steps = [{
            action: x => x * 3,
            update: history => `(${history} * 3)`
        },
        {
            action: x => x * 2,
            update: history => `(${history} * 2)`
        },
        {
            action: x => x + 1,
            update: history => `(${history} + 1)`
        }
    ];

    function executeStepsRandomlyAndPickOne(current, history) {
        let value = null;
        do {
            let step = steps[Math.floor(Math.random() * steps.length)];
            value = nextStep(step.action(current), step.update(history));
        } while (!value);
        return value;
    }

    function nextStep(current, history) {
        if (current > number) {
            return null;
        }
        if (current === number) {
            return history;
        }
        return executeStepsRandomlyAndPickOne(current, history);
    }
    return nextStep(1, `1`);
}
