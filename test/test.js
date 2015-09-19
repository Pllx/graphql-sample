var expect = chai.expect;
describe('#indexOf()', function(){
  it('should return -1', function() {
    expect([1,2,3].indexOf(5)).to.eq(-1);
    expect([1,2,3].indexOf(0)).to.eq(-1);
  });
});
