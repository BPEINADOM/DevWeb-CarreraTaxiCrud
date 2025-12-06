const { v4: uuid } = require('uuid');
const Cliente = require('../../domain/entities/Cliente');

class CrearCliente {
    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(data) {
        const cliente = new Cliente(uuid(), data.nombre);
        return await this.repo.crear(cliente);
    }
}

module.exports = CrearCliente;
