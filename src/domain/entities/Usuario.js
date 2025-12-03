class Usuario {
    constructor({ id, nombre, clave, rol }) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.rol = rol;

        this.validar();
    }

    validar() {
        if (!this.nombre) throw new Error("El nombre es obligatorio");
        if (!this.clave) throw new Error("La clave es obligatoria");
        if (!this.rol) throw new Error("El rol es obligatorio");

        const rolesValidos = ["ADMIN", "USER", "TAXISTA"];
        if (!rolesValidos.includes(this.rol)) {
            throw new Error(`Rol inválido. Debe ser uno de: ${rolesValidos.join(", ")}`);
        }
    }
}

module.exports = Usuario;
