const UsuarioModel = require('../models/UsuarioModel');

class UsuarioRepositoryMongo {

    async crear(usuario) {
            const nuevo = new UsuarioModel(usuario);
            return await nuevo.save();
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
}

module.exports = UsuarioRepositoryMongo;
