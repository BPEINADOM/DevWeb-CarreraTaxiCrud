const { v4: uuid } = require('uuid');
const Usuario = require('../../domain/entities/Usuario');
class CrearUsuario {
    
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(data) {
        const usuario = new Usuario(uuid(), data.nombre);
        return await this.repo.crear(usuario);
    }
}

module.exports = CrearUsuario;
