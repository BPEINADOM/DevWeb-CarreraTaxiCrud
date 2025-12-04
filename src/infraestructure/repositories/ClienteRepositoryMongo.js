const ClienteModel = require('../models/ClienteModel');
const Cliente = require('../../domain/entities/Cliente');
const { v4: uuidv4 } = require('uuid');

class ClienteRepositoryMongo {
    async crear(data) {
        if (!data.idCliente) data.idCliente = uuidv4();

        const cliente = new Cliente(data);
        const model = new ClienteModel(cliente);
        return await model.save();
    }

    async listar() {
        return await ClienteModel.find();
    }
}

module.exports = ClienteRepositoryMongo;
