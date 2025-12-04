class ListarTaxi {

    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar() {
        return await this.taxiRepository.listar();
    }
}

module.exports = ListarTaxi;
