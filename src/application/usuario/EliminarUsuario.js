class EliminarUsuario {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(id) {
        return await this.usuarioRepository.eliminar(id);
    }
}

module.exports = EliminarUsuario;
