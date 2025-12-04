const ClienteRepositoryMongo = require('../repositories/ClienteRepositoryMongo');
const CrearCliente = require('../../application/Cliente/CrearCliente');
const ListarClientes = require('../../application/Cliente/ListarCliente');

const repo = new ClienteRepositoryMongo();
const crearCU = new CrearCliente(repo);
const listarCU = new ListarClientes(repo);

module.exports = {
    crear: async (req, res) => {
        try {
            const cliente = await crearCU.ejecutar(req.body);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const clientes = await listarCU.ejecutar();
        res.json(clientes);
    }
};
