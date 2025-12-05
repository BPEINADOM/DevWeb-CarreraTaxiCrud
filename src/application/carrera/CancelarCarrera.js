class CancelarCarrera {
    constructor(repoCarrera) {
        this.repo = repoCarrera;
    }

    async ejecutar(idCarrera) {
        const carrera = await this.repo.findById(idCarrera);
        if (!carrera) throw new Error('Carrera no encontrada');

        carrera.cancelar();
        return await this.repo.update(idCarrera, carrera);
    }
}

module.exports = CancelarCarrera;