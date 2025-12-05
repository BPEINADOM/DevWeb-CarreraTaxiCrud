class ActualizarUsuario {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(id, data) {
        return await this.usuarioRepository.actualizar(id, data);
    }
}

module.exports = ActualizarUsuario;
