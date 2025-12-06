class BuscarClientePorId {
    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(id) {
        return await this.repo.buscarPorId(id);
    }
}

module.exports = BuscarClientePorId;
