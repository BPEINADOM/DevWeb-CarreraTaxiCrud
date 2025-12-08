const ClienteRepositoryMongo = require('../repositories/ClienteRepositoryMongo');
const CrearCliente = require('../../application/Cliente/CrearCliente');
const ListarClientes = require('../../application/Cliente/ListarCliente');
const BuscarClientePorId = require('../../application/Cliente/BuscarClientePorId');
const ActualizarCliente = require('../../application/Cliente/ActualizarCliente');
const EliminarCliente = require('../../application/Cliente/EliminarCliente');

const repo = new ClienteRepositoryMongo();
const crearCU = new CrearCliente(repo);
const listarCU = new ListarClientes(repo);
const buscarCU = new BuscarClientePorId(repo);
const actualizarCU = new ActualizarCliente(repo);
const eliminarCU = new EliminarCliente(repo);

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
    },

    buscar: async (req, res) => {
        const cliente = await buscarCU.ejecutar(req.params.idCliente);

        if (!cliente) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json(cliente);
    },

    actualizar: async (req, res) => {
        const cliente = await actualizarCU.ejecutar(req.params.idCliente, req.body);
        res.json(cliente);
    },

    eliminar: async (req, res) => {
        await eliminarCU.ejecutar(req.params.idCliente);
        res.json({ mensaje: "Cliente eliminado correctamente" });
    }
};
