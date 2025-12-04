class CrearTaxi {

    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar(data) {
        if (!data.placa) throw new Error("La placa es obligatoria");
        return await this.taxiRepository.crear(data);
    }
}

module.exports = CrearTaxi;
