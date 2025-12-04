const TaxistaModel = require('../models/TaxistaModel');
const Taxista = require('../../domain/entities/Taxista');
const { v4: uuidv4 } = require('uuid');

class TaxistaRepositoryMongo {
    async crear(data) {
        
        // Asegurar que idTaxista exista
        if (!data.idTaxista) data.idTaxista = uuidv4();

        const taxista = new Taxista(data);
        const model = new TaxistaModel(taxista);
        return await model.save();
    }

    async listar() {
        return await TaxistaModel.find();
    }
}

module.exports = TaxistaRepositoryMongo;
