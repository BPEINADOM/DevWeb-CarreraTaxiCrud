const UsuarioRepositoryMongo = require('../repositories/UsuarioRepositoryMongo');
const CrearUsuario = require('../../application/usuario/CrearUsuario');

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
        const usuarios = await repo.listar();
        res.json(usuarios);
    }
};
