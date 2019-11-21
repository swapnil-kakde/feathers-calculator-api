const { Tokenizer } = require('./tokenizer');
const { Evaluator } = require('./evaluator');

exports.Calculator = class Calculator {

    async create(input) {
        let tokenizer = new Tokenizer();
        const tokens = tokenizer.tokenize(input.expression);
        let resp;
        if (tokens.length > 0) {
            //Todo validate the expression

            //evaluate the valid expression
            let evaluator = new Evaluator();
            resp = evaluator.evaluate(tokens)
        } else {
            return "Invalid expression"
        }
        return resp;
    }
};
