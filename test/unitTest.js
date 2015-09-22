var chai = require('chai'),
    Sandal = require('../sandal.js'),
    Schema = require('../data/schema.js');
var expect = chai.expect;

describe('convertSchema()', function() {
  it('Should convert to a sequelize schema', function() {
    expect(Sandal.convertSchema(['user'], Sandal.typeMap)[0][1].name.type.key).to.eq('STRING');
    expect(Sandal.convertSchema(['user'], Sandal.typeMap)[0][1].age.type.key).to.eq('INTEGER');
  });
});

describe('createGetters()', function() {
  it('should create a getter?', function() {
    expect().to.eq();
  });
});

// describe('createGetters()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
//     });
// });
//TODO CHANGE ALL THE IT('SHOULD')'S AND DESCRIBE'S

// describe('sequelizeSchemas()', function() {
//     it('should return all users with input age', function() {
//    expect().to.eq();
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
