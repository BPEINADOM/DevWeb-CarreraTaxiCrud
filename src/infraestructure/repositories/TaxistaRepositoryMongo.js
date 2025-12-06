const TaxistaModel = require('../models/TaxistaModel');

class TaxistaRepositoryMongo {
    async crear(taxista) {
        const nuevo = new TaxistaModel(taxista);
        return await nuevo.save();
    }

    async listar() {
        return await TaxistaModel.find();
    }

    async buscarPorId(idTaxista) {
        return await TaxistaModel.findOne({ idTaxista });
    }

    async actualizar(idTaxista, data) {
        return await TaxistaModel.findOneAndUpdate(
            { idTaxista },
            data,
            { new: true }
        );
    }

    async eliminar(idTaxista) {
        return await TaxistaModel.findOneAndDelete({ idTaxista });
    }
}


module.exports = TaxistaRepositoryMongo;
