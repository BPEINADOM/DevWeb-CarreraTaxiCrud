class FinalizarCarrera {
    constructor(repoCarrera, servicioCalculoPrecio) {
        this.repo = repoCarrera;
        this.servicioCalculo = servicioCalculoPrecio;
    }

    // precio opcional: si no viene, lo calculamos con servicio
    async ejecutar(idCarrera, { precio = null, duracionMinutos = 0, kilometros = null } = {}) {
        const carrera = await this.repo.findById(idCarrera);
        if (!carrera) throw new Error('Carrera no encontrada');

        // si no se pasa precio, intentar calcular (requiere kms y duracion)
        let precioFinal = precio;
        if (!precioFinal) {
            if (kilometros !== null && duracionMinutos !== null) {
                precioFinal = this.servicioCalculo.calcular(kilometros, duracionMinutos);
            } else if (carrera.kilometros !== null && carrera.duracionMinutos !== null) {
                precioFinal = this.servicioCalculo.calcular(carrera.kilometros.valor, carrera.duracionMinutos.valor);
            } else {
                throw new Error('No hay datos para calcular precio');
            }
        }

        carrera.finalizar(precioFinal, duracionMinutos);
        return await this.repo.update(idCarrera, carrera);
    }
}

module.exports = FinalizarCarrera;