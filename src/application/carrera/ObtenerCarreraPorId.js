class ObtenerCarreraPorId {
    constructor(repoCarrera) {
        this.repo = repoCarrera;
    }

    async ejecutar(idCarrera) {
        return await this.repo.findById(idCarrera);
    }
}

module.exports = ObtenerCarreraPorId;