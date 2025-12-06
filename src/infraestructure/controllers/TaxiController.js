const TaxiRepositoryMongo = require('../repositories/TaxiRepositoryMongo');
const CrearTaxi = require('../../application/taxi/CrearTaxi');
const ListarTaxis = require('../../application/taxi/ListarTaxi');
const BuscarTaxiPorPlaca = require('../../application/taxi/BuscarTaxiPorPlaca');
const ActualizarTaxi = require('../../application/taxi/ActualizarTaxi');
const EliminarTaxi = require('../../application/taxi/EliminarTaxi');

const repo = new TaxiRepositoryMongo();
const crearTaxiCU = new CrearTaxi(repo);
const listarTaxisCU = new ListarTaxis(repo);
const buscarTaxiCU = new BuscarTaxiPorPlaca(repo);
const actualizarTaxiCU = new ActualizarTaxi(repo);
const eliminarTaxiCU = new EliminarTaxi(repo);


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
    },

    buscar: async (req, res) => {
        const taxi = await buscarTaxiCU.ejecutar(req.params.placa);
        if (!taxi) {
            return res.status(404).json({ error: "Taxi no encontrado" });
        }

        res.json(taxi);
    },

    actualizar: async (req, res) => {
        const taxi = await actualizarTaxiCU.ejecutar(req.params.placa, req.body);
        res.json(taxi);
    },

    eliminar: async (req, res) => {
        await eliminarTaxiCU.ejecutar(req.params.placa);
        res.json({ mensaje: "Taxi eliminado correctamente" });
    }

};
