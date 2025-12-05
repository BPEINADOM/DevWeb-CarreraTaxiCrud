class ListarUsuarios {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar() {
        return await this.usuarioRepository.listar();
    }
}

module.exports = ListarUsuarios;
