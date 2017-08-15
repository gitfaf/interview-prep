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
		let values = steps
			.filter(step => step.action(current) <= number)
			.map(step => nextStep(step.action(current), step.update(history)));
        return values[Math.floor(Math.random() * values.length)];
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
