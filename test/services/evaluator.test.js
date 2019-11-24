const chai = require('chai')
const expect = chai.expect

const { Evaluator } = require("../../src/services/calculator/evaluator")

describe("Evaluator class", () => {

    let evaluatorObj;
    before(() => {
        console.log("============ Creating Evaluator object ============")
        evaluatorObj = new Evaluator()
        if(evaluatorObj)
            console.log("Evaluator object created")
    })

    context("precedence function", () => {
        it("", () => {
            expect(evaluatorObj.precedence).to.be.a('function');
            expect(evaluatorObj.precedence('^')).to.be.equal(3);
            expect(evaluatorObj.precedence('+')).to.be.equal(1);
            expect(evaluatorObj.precedence('-')).to.be.equal(1);
            expect(evaluatorObj.precedence('*')).to.be.equal(2);
            expect(evaluatorObj.precedence('&')).to.be.equal(-1);
        })
    })

    context("infixToPostfix function", () => {
        it("", () => {
            expect(evaluatorObj.infixToPostfix).to.be.a('function');
            expect(evaluatorObj.infixToPostfix([100, '*', '(', 2, '+', 12, ')', '/', 11])).to.be.deep.equal([100,  2,  12, '+', '*', 11, '/']);
        })
    })

    context("doOperation function", () => {
        it("", () => {
            expect(evaluatorObj.doOperation).to.be.a('function');
            expect(evaluatorObj.doOperation('^', 2, 3)).to.be.equal(8);
            expect(evaluatorObj.doOperation('+', 7, 5)).to.be.equal(12);
            expect(evaluatorObj.doOperation('-', -3, 7)).to.be.equal(-10);
        })
    })

    context("evaluatePostfixExpression function", () => {
        it("", () => {
            expect(evaluatorObj.evaluatePostfixExpression).to.be.a('function');
            expect(evaluatorObj.evaluatePostfixExpression([100,  2,  12, '+', '*', 10, '/'])).to.be.equal(140);
        })
    })

    context("evaluate function", () => {
        it("", () => {
            expect(evaluatorObj.evaluate).to.be.a('function');
            expect(evaluatorObj.evaluate([100, '*', '(', 2, '+', 12, ')', '/', 10])).to.be.equal(140);
        })
    })
})
