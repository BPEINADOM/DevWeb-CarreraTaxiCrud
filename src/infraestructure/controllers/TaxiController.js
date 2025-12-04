const TaxiRepositoryMongo = require('../repositories/TaxiRepositoryMongo');
const CrearTaxi = require('../../application/taxi/CrearTaxi');
const ListarTaxis = require('../../application/taxi/ListarTaxi');

const repo = new TaxiRepositoryMongo();
const crearTaxiCU = new CrearTaxi(repo);
const listarTaxisCU = new ListarTaxis(repo);

module.exports = {
    crear: async (req, res) => {
        try {
            const taxi = await crearTaxiCU.ejecutar(req.body);
            res.status(201).json(taxi);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const taxis = await listarTaxisCU.ejecutar();
        res.json(taxis);
    }
};
