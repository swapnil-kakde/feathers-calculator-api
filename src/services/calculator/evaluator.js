// This class is helper class to evaluate the expression
const { Stack } = require('./stack')

exports.Evaluator = class Evaluator {

    precedence(operator) {
        if (operator === '^')
            return 3;
        else if (operator === '*' || operator === '/')
            return 2;
        else if (operator === '+' || operator === '-')
            return 1;
        else
            return -1;
    }

    infixToPostfix(tokenArray) {
        let stack = new Stack();
        let postfixTokenArr = [];
        for (let i = 0; i < tokenArray.length; i++) {
            const token = tokenArray[i];

            if (!isNaN(token)) {
                postfixTokenArr.push(token);
            }
            else if (token === '(') {
                stack.push('(');
            }
            else if (token === ')') {
                while (stack.top() !== '(') {
                    postfixTokenArr.push(stack.pop());
                }
                if (stack.top() === '(') {
                    stack.pop();
                }
            } else {
                //in case of operator
                while (!stack.isEmpty() && this.precedence(token) <= this.precedence(stack.top())) {
                    postfixTokenArr.push(stack.pop());
                }
                stack.push(token);
            }
        }

        while (!stack.isEmpty()) {
            postfixTokenArr.push(stack.pop());
        }

        return postfixTokenArr;
    }

    doOperation(operator, operand1, operand2) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            case '^':
                return Math.pow(operand1, operand2);
        }
    }

    evaluatePostfixExpression(postfixTokenArr) {
        let valueStack = new Stack();
        postfixTokenArr.forEach(token => {
            if (!isNaN(token)) {
                valueStack.push(token);
            } else {
                //in case of operator
                let op2 = valueStack.pop();
                let op1 = valueStack.pop();
                valueStack.push(this.doOperation(token, op1, op2));
            }
        });
        return valueStack.pop();
    }

    evaluate(tokens) {
        //first convert the expression(token array) to postfix expression
        const postfixTokenArr = this.infixToPostfix(tokens);

        //evaluate the postfix expression
        return this.evaluatePostfixExpression(postfixTokenArr);
    }
}