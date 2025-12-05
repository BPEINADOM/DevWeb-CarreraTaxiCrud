const UsuarioModel = require('../models/UsuarioModel');
const Usuario = require('../../domain/entities/usuario');

class UsuarioRepositoryMongo {

    async crear({ nombre, clave, rol }) {
        const usuario = await UsuarioModel.create({ nombre, clave, rol });
        return new Usuario({
            id: usuario._id.toString(),
            nombre: usuario.nombre,
            clave: usuario.clave,
            rol: usuario.rol
        });
    }

    async listar() {
        return await UsuarioModel.find();
    }

    async buscarPorId(id) {
        return await UsuarioModel.findOne({ idUsuario: id });
    }

    async actualizar(id, data) {
        return await UsuarioModel.findOneAndUpdate(
            { idUsuario: id },
            data,
            { new: true }
        );
    }

    async eliminar(id) {
        return await UsuarioModel.findOneAndDelete({ idUsuario: id });
    }

    // async buscarPorId(id) {
    //     const usuario = await UsuarioModel.findById(id);
    //     if (!usuario) return null;

    //     return new Usuario({
    //         id: usuario._id.toString(),
    //         nombre: usuario.nombre,
    //         clave: usuario.clave,
    //         rol: usuario.rol
    //     });
    // }

    // async listar() {
    //     const usuarios = await UsuarioModel.find();
    //     return usuarios.map(u => new Usuario({
    //         id: u._id.toString(),
    //         nombre: u.nombre,
    //         clave: u.clave,
    //         rol: u.rol
    //     }));
    // }
}

module.exports = UsuarioRepositoryMongo;
