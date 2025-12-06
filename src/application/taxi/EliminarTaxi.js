class EliminarTaxi {
    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar(placa) {
        return await this.taxiRepository.eliminar(placa);
    }
}

module.exports = EliminarTaxi;