class CrearUsuario {
    
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async ejecutar(data) {
        return await this.usuarioRepository.crear(data);
    }
}

module.exports = CrearUsuario;
