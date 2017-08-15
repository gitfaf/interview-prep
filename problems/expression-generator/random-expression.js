function generateRandomExpression (number) {
	const steps = [
		{ action: x => x * 3, update: history => `(${history} * 3)`},
		{ action: x => x * 2, update: history => `(${history} * 2)`},
		{ action: x => x + 1, update: history => `(${history} + 1)`}
	];

	function executeStepsRandomlyAndPickOne (current, history) {
		let all = [];
		while(all.indexOf(0) < 0 || all.indexOf(1) < -1 || all.indexOf(2) < -1) {
			let random = parseInt(Math.random() * 3);
			let step = steps[random];
			let value = nextStep(step.action(current), step.update(history));
			if (value) {
				all.push(random);
				return value;
			}
		}
	}

    function nextStep (current, history) {
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
