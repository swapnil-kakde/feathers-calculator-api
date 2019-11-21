const assert = require('assert')

//describe for each file
//context for each function
//it for each single test

describe("file to be tested", () => {
    context("function1", () => {

        //before and after 
        before(() => {
            console.log('========== before')
        })

        after(() => {
            console.log('========== after')
        })

        //beforeEach and afterEach
        beforeEach(() => {
            console.log('========== beforeEach')
        })

        afterEach(() => {
            console.log('========== afterEach')
        })

        it("some test", () => {
            assert.equal(1, 1);
        })

        it("object comparison", () => {
            assert.deepEqual({ name: "Swapnil" }, { name: "Swapnil" })
        })

        it("This is pending test")
    })

    //multiple contexts
    context("function2", () => {
        it("Another pending test")
    })

    //chai assertion library
})