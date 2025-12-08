const { v4: uuid } = require('uuid');
const Usuario = require('../../domain/entities/Usuario');
class CrearUsuario {
    
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(data) {
        // Crear el objeto completo que necesita la entidad
        const usuario = new Usuario({
            id: uuid(),
            nombre: data.nombre,
            clave: data.clave,
            rol: data.rol
        });

        return await this.usuarioRepository.crear(usuario);
    }
}

module.exports = CrearUsuario;
