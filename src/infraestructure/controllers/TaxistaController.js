const TaxistaRepositoryMongo = require('../repositories/TaxistaRepositoryMongo');
const CrearTaxista = require('../../application/taxista/CrearTaxista');
const ListarTaxistas = require('../../application/taxista/ListarTaxista');

const repo = new TaxistaRepositoryMongo();
const crearCU = new CrearTaxista(repo);
const listarCU = new ListarTaxistas(repo);

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
    }
};
