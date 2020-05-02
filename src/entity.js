const uuid = require('./uuid');

class Entity {

    constructor(data = {}) {
        this.id = uuid();

        this.setData(data);
        this.createdAt = new Date();
    }

    setData(data) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

}

module.exports = Entity;