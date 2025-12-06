class BuscarTaxistaPorId {
    constructor(TaxistaRepository) {
        this.TaxistaRepository = TaxistaRepository;
    }

    async ejecutar(id) {
        return await this.TaxistaRepository.buscarPorId(id);
    }
}

module.exports = BuscarTaxistaPorId;