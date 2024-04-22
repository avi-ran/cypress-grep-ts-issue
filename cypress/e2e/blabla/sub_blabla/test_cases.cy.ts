// Main test suite
describe("Dummy tests", () => {

  it('works as an array', { tags: ['config', 'some-other-tag'] }, () => {
    expect(true).to.be.true
  })
  
  it('works as a string', () => {
    // This test should not run!
    expect(true).to.be.true
  })

})