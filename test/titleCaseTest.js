const assert = require('chai').assert;
const titleCase = require('../titleCase.js');

describe("#titleCase", () => {
  it("should return SUPERcalifragilisticexpialiDOCIOUS", () => {
    const input = titleCase("supercalifragilisticexpialidocious");
    const output = "Supercalifragilisticexpialidocious";
    assert.equal(input, output);
  });
  it("", () => {
    const input = titleCase("test");
    const output = "Test";
    assert.equal(input, output);
  });
  it("", () => {
    const input = titleCase("");
    assert.equal(input, "");
  });

});