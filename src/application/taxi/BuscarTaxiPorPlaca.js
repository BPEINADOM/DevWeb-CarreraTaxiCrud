class BuscarTaxiPorPlaca {
    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar(placa) {
        return await this.taxiRepository.buscarPorPlaca(placa);
    }
}

module.exports = BuscarTaxiPorPlaca;