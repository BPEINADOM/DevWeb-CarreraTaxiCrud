const ClienteModel = require('../models/ClienteModel');

class ClienteRepositoryMongo {

    async crear(cliente) {
        const nuevo = new ClienteModel(cliente);
        return await nuevo.save();
    }

    async listar() {
        return await ClienteModel.find();
    }

    async buscarPorId(id) {
        return await ClienteModel.findOne({ idCliente: id });
    }

    async actualizar(id, data) {
        return await ClienteModel.findOneAndUpdate(
            { idCliente: id },
            data,
            { new: true }
        );
    }

    async eliminar(id) {
        return await ClienteModel.findOneAndDelete({ idCliente: id });
    }
}


module.exports = ClienteRepositoryMongo;
