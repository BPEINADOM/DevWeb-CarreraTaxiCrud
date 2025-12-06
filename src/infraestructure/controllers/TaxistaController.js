const TaxistaRepositoryMongo = require('../repositories/TaxistaRepositoryMongo');
const CrearTaxista = require('../../application/taxista/CrearTaxista');
const ListarTaxistas = require('../../application/taxista/ListarTaxista');
const BuscarTaxistaPorId = require('../../application/taxista/BuscarTaxistaPorId');
const ActualizarTaxista = require('../../application/taxista/ActualizarTaxista');
const EliminarTaxista = require('../../application/taxista/EliminarTaxista');

const repo = new TaxistaRepositoryMongo();
const crearCU = new CrearTaxista(repo);
const listarCU = new ListarTaxistas(repo);
const buscarTaxistaCU = new BuscarTaxistaPorId(repo);
const actualizarCU = new ActualizarTaxista(repo);
const eliminarCU = new EliminarTaxista(repo);


module.exports = {
    crear: async (req, res) => {
        try {
            const taxista = await crearCU.ejecutar(req.body);
            res.status(201).json(taxista);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const taxistas = await listarCU.ejecutar();
        res.json(taxistas);
    },

    buscar: async (req, res) => {
        const taxista = await buscarTaxistaCU.ejecutar(req.params.placa);
        if (!taxista) {
            return res.status(404).json({ error: "Taxi no encontrado" });
        }

        res.json(taxi);
    },

    actualizar: async (req, res) => {
        const { idTaxista } = req.params;
        const data = await actualizarCU.ejecutar(idTaxista, req.body);
        res.json(data);
    },

    eliminar: async (req, res) => {
        const { idTaxista } = req.params;
        await eliminarCU.ejecutar(idTaxista);
        res.json({ mensaje: "Taxista eliminado" });
    }
};
