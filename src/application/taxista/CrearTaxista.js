class CrearTaxista {

    constructor(repo) {
        this.repo = repo;
    }

    async ejecutar(data) {
        if (!data.nombre) throw new Error("El nombre es obligatorio");
        if (!data.licencia) throw new Error("La licencia es obligatoria");

        return await this.repo.crear(data);
    }
    
}

module.exports = CrearTaxista;
