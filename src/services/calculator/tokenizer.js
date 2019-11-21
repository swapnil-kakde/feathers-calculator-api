exports.Tokenizer = class Tokenizer {

    isOperator(char) {
        if (char === '*' || char === '/' || char === '-' || char === '+' || char === '(' || char === ')' || char === '^') {
            return true;
        } else {
            return false;
        }
    }

    isNumber(char) {
        if (isNaN(char) || char === ' ') {
            return false;
        } else {
            return true;
        }
    }

    tokenize(expression) {
        let tokens = [];
        for (var i = 0; i < expression.length; i++) {

            if (expression[i] === ' ')
                continue;

            //if operator
            if (this.isOperator(expression[i])) {
                tokens.push(expression[i]);
            } else if (this.isNumber(expression[i])) {
                //if number
                let value = 0;
                while (i < expression.length && this.isNumber(expression[i])) {
                    value = (value * 10) + (expression[i] - '0');
                    i++;
                }
                tokens.push(value);
            }
        }
        return tokens;
    }
};