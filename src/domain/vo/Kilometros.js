class Kilometros {

  constructor(valor) {
    if (valor <= 0) {
      throw new Error("Los kilómetros deben ser mayores a 0");
    }

    this.valor = valor;
    Object.freeze(this);

  }
  
}

module.exports = Kilometros;

