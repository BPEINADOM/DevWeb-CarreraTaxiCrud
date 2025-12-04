class Ubicacion {

  constructor(direccion) {
    if (!direccion || direccion.trim() === "") {
      throw new Error("La ubicación no puede estar vacía.");
    }

    this.direccion = direccion;
  }
  
}

module.exports = Ubicacion;
