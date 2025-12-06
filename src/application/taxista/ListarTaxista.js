class ListarTaxistas {

    constructor(TaxistaRepository) {
        this.TaxistaRepository = TaxistaRepository;
    }


    async ejecutar() {
        return await this.TaxistaRepository.listar();
    }

}

module.exports = ListarTaxistas;
