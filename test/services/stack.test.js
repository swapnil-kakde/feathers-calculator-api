//const assert = require('assert')

const chai = require('chai')
const expect = chai.expect

const { Stack } = require("../../src/services/calculator/stack")

//describe for each file
//context for each function
//it for each single test

describe("Stack Class", () => {

    let stackObj;
    before(() => {
        stackObj = new Stack()
        if(stackObj)
            console.log("stack object created")
    })

    context("stack class functions", () => {
        it("", () => {
            expect(stackObj.isEmpty()).to.be.true;

            stackObj.push(1);
            expect(stackObj.isEmpty()).to.be.false;


            expect(stackObj.top()).to.be.equal(1);

            expect(stackObj.pop()).to.be.equal(1);
            expect(stackObj.isEmpty()).to.be.true;
        })
    })
})



// describe("file to be tested", () => {
//     context("function1", () => {

//         //before and after 
//         before(() => {
//             console.log('========== before')
//         })

//         after(() => {
//             console.log('========== after')
//         })

//         //beforeEach and afterEach
//         beforeEach(() => {
//             console.log('========== beforeEach')
//         })

//         afterEach(() => {
//             console.log('========== afterEach')
//         })

//         it("some test", () => {
//             assert.equal(1, 1);
//         })

//         it("object comparison", () => {
//             assert.deepEqual({ name: "Swapnil" }, { name: "Swapnil" })
//         })

//         it("This is pending test")
//     })

//     //multiple contexts
//     context("function2", () => {
//         it("Another pending test")
//     })

//     //chai assertion library
//     context("function3", () => {
//         it("first chai test", () => {
//             expect(1).to.equal(1);
//         })

//         it("object deep equal test", () => {
//             expect({ name: "swapnil" }).to.deep.equal({ name: "swapnil" });
//         })

//         it("different methods", () => {
//             expect(3).to.be.a('number');
//             expect('foo').to.be.a('string');
//             expect(5>8).to.be.false;
//             expect({}).to.be.a('object');
//         })
//     })
// })