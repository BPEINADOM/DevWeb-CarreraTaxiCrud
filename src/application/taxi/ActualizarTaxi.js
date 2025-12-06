class ActualizarTaxi {
    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar(placa, data) {
        return await this.taxiRepository.actualizar(placa, data);
    }
}

module.exports = ActualizarTaxi;