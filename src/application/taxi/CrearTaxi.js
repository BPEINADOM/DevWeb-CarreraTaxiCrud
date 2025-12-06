const Taxi = require('../../domain/entities/Taxi');

class CrearTaxi {
    constructor(taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    async ejecutar(data) {
        const taxi = new Taxi(
            data.placa,
            data.marca,
            data.modelo
        );

        return await this.taxiRepository.crear(taxi);
    }
}

module.exports = CrearTaxi;
