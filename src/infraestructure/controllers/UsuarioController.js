const UsuarioRepositoryMongo = require('../repositories/UsuarioRepositoryMongo');
const CrearUsuario = require('../../application/usuario/CrearUsuario');
const BuscarUsuarioPorId = require('../../application/usuario/BuscarUsuarioPorId');
const ActualizarUsuario = require('../../application/usuario/ActualizarUsuario');
const EliminarUsuario = require('../../application/usuario/EliminarUsuario');
const ListarUsuarios = require('../../application/usuario/ListarUsuarios');

const repo = new UsuarioRepositoryMongo();
const crearUsuarioCU = new CrearUsuario(repo);

module.exports = {
    crear: async (req, res) => {
        try {
            const usuario = await crearUsuarioCU.ejecutar(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    listar: async (req, res) => {
        const usecase = new ListarUsuarios(repo);
        const usuarios = await usecase.ejecutar();
        res.json(usuarios);
    },

    buscar: async (req, res) => {
        const usecase = new BuscarUsuarioPorId(repo);
        const usuario = await usecase.ejecutar(req.params.id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.json(usuario);
    },

    actualizar: async (req, res) => {
        const usecase = new ActualizarUsuario(repo);
        const usuario = await usecase.ejecutar(req.params.id, req.body);
        res.json(usuario);
    },

    eliminar: async (req, res) => {
        const usecase = new EliminarUsuario(repo);
        await usecase.ejecutar(req.params.id);
        res.json({ mensaje: "Usuario eliminado correctamente" });
    }
};
