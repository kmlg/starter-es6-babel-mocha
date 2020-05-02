const Entity = require('./entity');

class EntityModel extends Entity {

    constructor(...args) {
        super(...args);
    }

    update(data) {
        this.setData(data);
        this.updatedAt = new Date();
    }

}

module.exports = EntityModel;