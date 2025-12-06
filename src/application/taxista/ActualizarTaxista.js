class ActualizarTaxista {
    constructor(TaxistaRepository) {
        this.TaxistaRepository = TaxistaRepository;
    }

    async ejecutar(idTaxista, data) {
        return await this.TaxistaRepository.actualizar(idTaxista, data);
    }
}

module.exports = ActualizarTaxista;