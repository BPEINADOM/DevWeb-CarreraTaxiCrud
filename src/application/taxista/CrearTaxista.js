const { v4: uuid } = require('uuid');
const Taxista = require('../../domain/entities/Taxista');

class CrearTaxista {
    constructor(TaxistaRepository) {
        this.TaxistaRepository = TaxistaRepository;
    }

    async ejecutar(data) {
        const taxista = new Taxista({
            idTaxista: uuid(),
            nombre: data.nombre,
            licencia: data.licencia
        });

        return await this.TaxistaRepository.crear(taxista);
    }
}

module.exports = CrearTaxista;
