const { expect } = require('chai');

const entityTests = (Entity) => {
    
    const { name } = Entity;

    describe(`Entity tests with ${name}`, () => {

        it('should create new instance', () => {
            const entityObject = new Entity();
            expect(entityObject).to.be.an('object');
        });

        it('should create new instance with data', () => {
            const entityObject = new Entity({
                name: 'Test'
            });
            expect(entityObject).to.be.an('object');
        });

        it('should create new instance with input data as an array', () => {
            const entityObject = new Entity([1,2,3]);
            expect(entityObject).to.be.an('object');
        });

        it('should create new instance with input data as a string', () => {
            const entityObject = new Entity('string');
            expect(entityObject).to.be.an('object');
        });

        it('should create new instance with input data as an integer', () => {
            const entityObject = new Entity(11);
            expect(entityObject).to.be.an('object');
        });
    });

};

module.exports = entityTests;