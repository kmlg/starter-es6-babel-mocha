const { expect } = require('chai');

const entityTests = require('./lib/entity');

const { EntityModel } = require('../');


describe('Entity model', () => {

    it('should pass parent tests', () => {
        entityTests(EntityModel);
    });

    it('should create new instance with blank input and update the model afterwards', () => {
        const entityObject = new EntityModel();
        entityObject.update({
            name: 'Test'
        });
        expect(entityObject).to.be.an('object');
    });

    it('should create new instance with input and update the model afterwards', () => {
        const entityObject = new EntityModel({
            name: 'PreviousState'
        });
        entityObject.update({
            name: 'Test'
        });
        expect(entityObject).to.be.an('object');
    });

});