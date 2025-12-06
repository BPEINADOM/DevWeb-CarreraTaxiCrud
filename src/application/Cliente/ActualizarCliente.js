class ActualizarCliente {
    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(id, data) {
        return await this.repo.actualizar(id, data);
    }
}

module.exports = ActualizarCliente;
