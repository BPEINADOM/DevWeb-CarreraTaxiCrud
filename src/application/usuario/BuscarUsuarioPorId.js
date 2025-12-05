class BuscarUsuarioPorId {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(id) {
        return await this.usuarioRepository.buscarPorId(id);
    }
}

module.exports = BuscarUsuarioPorId;