const chai = require('chai')
const expect = chai.expect
const { Tokenizer } = require('../../src/services/calculator/tokenizer');

describe("Tokenizer file", () => {

    let tokenizer;
    before(() => {
        console.log("============ Creating Tokenizer object ============")
        tokenizer = new Tokenizer()
        if(tokenizer)
            console.log("tokenizer object created")
    })

    context("isOperator function", () => {
        it("correct check for operators", () => {
            expect(tokenizer.isOperator('+')).to.be.true;
            expect(tokenizer.isOperator('-')).to.be.true;
            expect(tokenizer.isOperator('*')).to.be.true;
            expect(tokenizer.isOperator('/')).to.be.true;
            expect(tokenizer.isOperator('^')).to.be.true;
        })

        it("Wrong input to isOperator function", () => {
            expect(tokenizer.isOperator(1)).to.be.false;
            expect(tokenizer.isOperator("#")).to.be.false;
            expect(tokenizer.isOperator("'")).to.be.false;
        })
    })

    context("isNumber function tests", () => {
        it("correct inputs to isNumber function", () => {
            expect(tokenizer.isNumber(111)).to.be.true
            expect(tokenizer.isNumber(1)).to.be.true;
        })

        it("incorrect inputs to isNumber function", () => {
            expect(tokenizer.isNumber("+")).to.be.false
            expect(tokenizer.isNumber("-")).to.be.false;
        })
    })

    context("tokenize() fucntion test", () => {
        it("correct input", () => {
            expect(tokenizer.tokenize("100 * ( 2 + 12 ) / 11")).to.be.a('array')
            expect(tokenizer.tokenize).to.be.a('function');
            expect(tokenizer.tokenize("100 * ( 2 + 12 ) / 11")).to.be.deep.equal([100, '*', '(', 2, '+', 12, ')', '/', 11])
        })
    })

    after(() => {
        console.log("============ deleting Tokenizer object ============")
        // if (tokenizer)
        //     delete tokenizer
        // else
        //     console.log("did not get tokenizer obj")
    })
})
