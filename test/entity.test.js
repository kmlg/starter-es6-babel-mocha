const { Entity } = require('../');
const entityTests = require('./lib/entity');

describe('Entity object', () => {

    it(`should pass entity tests for ${process.env.MODULE_NAME}`, () => {
        entityTests(Entity);
    });

});
