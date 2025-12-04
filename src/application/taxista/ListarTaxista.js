class ListarTaxistas {

    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar() {
        return await this.repo.listar();
    }
    
}

module.exports = ListarTaxistas;
