var chai = require('chai'),
    Sandal = require('../sandal.js');
var expect = chai.expect;

describe('inc()', function() {
  it('should increment number by 1', function() {
    expect(Sandal.inc(2)).to.eq(3);
  });
});
// describe('createGetters()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//
// describe('sequelizeSchemas()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//
// describe('convertSchema()', function() {
//     it('should ', function() {
//       expect().to.eq();
//     });
// });
//
// describe('initSequelizeModels()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//
// describe('initSequelizeRelations()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//
// describe('graphQLHandler()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//
// describe('Sandal()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
