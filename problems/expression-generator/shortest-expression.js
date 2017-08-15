function shortestExpression(target) {
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

    function nextStep(current, history) {
        if (current > target) {
            return null;
        }
        if (current === target) {
            return history;
        }
        return steps.reduce((acc, step) => acc || nextStep(step.action(current), step.update(history)), null);
    }
    return nextStep(1, `1`);
}
