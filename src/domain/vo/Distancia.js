class Distancia {

  constructor(km) {
    if (typeof km !== "number" || km <= 0) {
      throw new Error("La distancia debe ser un número mayor a 0.");
    }

    this.km = km;
  }
  
}

module.exports = Distancia;
