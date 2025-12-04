class CrearCliente {

    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(data) {
        if (!data.nombre) throw new Error("El nombre es obligatorio");

        return await this.repo.crear(data);
    }
    
}

module.exports = CrearCliente;
