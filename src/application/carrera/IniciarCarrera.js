class IniciarCarrera {
    constructor(repoCarrera) {
        this.repo = repoCarrera;
    }

    async ejecutar(idCarrera) {
        const carrera = await this.repo.findById(idCarrera);
        if (!carrera) throw new Error('Carrera no encontrada');

        // aplicar regla de dominio
        carrera.aceptar(); // si quieres que acepte antes de iniciar; si no, omite
        carrera.iniciar();

        return await this.repo.update(idCarrera, carrera);
    }
}

module.exports = IniciarCarrera;