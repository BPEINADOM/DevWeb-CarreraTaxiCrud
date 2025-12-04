const TaxiModel = require('../models/TaxiModel');
const Taxi = require('../../domain/entities/Taxi');

class TaxiRepositoryMongo {

    async crear(data) {
        const taxi = new Taxi(data);
        const model = new TaxiModel(taxi);
        return await model.save();
    }

    async listar() {
        return await TaxiModel.find();
    }
    
}

module.exports = TaxiRepositoryMongo;
