const TaxiModel = require('../models/TaxiModel');

class TaxiRepositoryMongo {

    async crear(taxi) {
        const nuevo = new TaxiModel(taxi);
        return await nuevo.save();
    }

    async listar() {
        return await TaxiModel.find();
    }

    async buscarPorPlaca(placa) {
        return await TaxiModel.findOne({ placa });
    }

    async actualizar(placa, data) {
        return await TaxiModel.findOneAndUpdate(
            { placa },
            data,
            { new: true }
        );
    }

    async eliminar(placa) {
        return await TaxiModel.findOneAndDelete({ placa });
    }
}

module.exports = TaxiRepositoryMongo;
