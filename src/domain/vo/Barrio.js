class Barrio {

  constructor(nombre) {
    if (!nombre || nombre.length < 2) {
      throw new Error("Barrio inválido");
    }
    this.nombre = nombre;
    Object.freeze(this);
  }
  
}

module.exports = Barrio;


