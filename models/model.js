const { connect } = require('../config');

async function postCar(car) {
    const db = await connect();
    let collection = db.collection('Info');
    return collection.insertOne(car);
}

async function getAllCars() {
    const db = await connect();
    let collection = db.collection('Info');
    return collection.find().toArray();
}

module.exports = {
    postCar,
    getAllCars
};
