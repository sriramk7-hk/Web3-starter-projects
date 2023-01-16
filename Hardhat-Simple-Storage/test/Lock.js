const { ethers } = require("hardhat")
const {assert, expect} = require("chai")

describe("SimpleStorage", function() {
  let SimpleStorage, simpleStorage
  beforeEach(async function () {
    SimpleStorage  = await ethers.getContractFactory("SimpleStorage");

    simpleStorage = await SimpleStorage.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    assert.equal(currentValue.toString(), expectedValue)
    //expect(currentValue.toString()).to.equal(expectedValue)  Another Method
  })
  it("Should store 7", async function() {
    const expectedValue = "7";
    const transcationResponse = await simpleStorage.store(expectedValue);
    await transcationResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();

    expect(expectedValue).to.equal(updatedValue);
  })

})