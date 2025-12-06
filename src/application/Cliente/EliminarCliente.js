class EliminarCliente {
    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(id) {
        return await this.repo.eliminar(id);
    }
}

module.exports = EliminarCliente;
