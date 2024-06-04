const { postCar, getAllCars } = require('../models/model');
const { client } = require('../config');

async function createCar(req, res) {
    try {
        let car = req.body;
        let result = await postCar(car);
        res.json({ statusCode: 201, message: 'success', data: result });
    } finally {
        await client.close();
    }
}

async function fetchAllCars(req, res) {
    try {
        let result = await getAllCars();
        res.json({ statusCode: 201, message: 'success', data: result });
    } finally {
        await client.close();
    }
}

module.exports = {
    createCar,
    fetchAllCars
};
