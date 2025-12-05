class SolicitarCarrera {

    constructor(repoCarrera, servicioCalculoPrecio) {
        this.repo = repoCarrera;
        this.servicioCalculo = servicioCalculoPrecio;
    }

    async ejecutar(dto) {
        if (!dto.cliente) throw new Error("Cliente es requerido");
        if (!dto.taxi) throw new Error("Taxi es requerido");
        if (!dto.origen || !dto.destino)
            throw new Error("Origen y destino requeridos");

        const carrera = await this.repo.save({
            cliente: dto.cliente,
            taxi: dto.taxi,
            taxista: dto.taxista || null,
            barrioInicio: dto.origen,
            barrioLlegada: dto.destino,
            cantidadPasajeros: dto.cantidadPasajeros || null,
        });

        return carrera;
    }
}

module.exports = SolicitarCarrera;
