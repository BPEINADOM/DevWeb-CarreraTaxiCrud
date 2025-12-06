class EliminarTaxista {
    constructor(TaxistaRepository) {
        this.TaxistaRepository = TaxistaRepository;
    }

    async ejecutar(idTaxista) {
        return await this.TaxistaRepository.eliminar(idTaxista);
    }
}

module.exports = EliminarTaxista;
