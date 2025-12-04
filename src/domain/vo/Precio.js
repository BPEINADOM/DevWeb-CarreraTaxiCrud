class Precio {

  constructor(valor) {
    if (typeof valor !== "number" || valor < 0) {
      throw new Error("El precio debe ser un número mayor o igual que 0.");
    }

    this.valor = valor;
  }
  
}

module.exports = Precio;
