/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    const results = [];
    for (let i = 0; i < expression.length; i++) {
        if (["*", "-", "+", "/"].includes(expression[i])) {
            let left = diffWaysToCompute(expression.slice(0, i));
            let right = diffWaysToCompute(expression.slice(i + 1));
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    switch (expression[i]) {
                        case "*":
                            results.push(left[j] * right[k]);
                            break;
                        case "+":
                            results.push(left[j] + right[k]);
                            break;
                        case "-":
                            results.push(left[j] - right[k]);
                            break;
                    }
                }
            }
        }
    }
    if (results.length === 0) return [+expression];
    return results;
};