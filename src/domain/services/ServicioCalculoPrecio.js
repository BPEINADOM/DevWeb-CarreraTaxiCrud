class ServicioCalculoPrecio {

    constructor({ tarifaBase = 1500, porKilometro = 1000, porMinuto = 50 } = {}) {
      this.tarifaBase = tarifaBase;
      this.porKilometro = porKilometro;
      this.porMinuto = porMinuto;
    }

    calcular(kilometrosValor, duracionMinutosValor) {
      const total = this.tarifaBase + (kilometrosValor * this.porKilometro) + (duracionMinutosValor * this.porMinuto);
      return Math.round(total); // entero
    }

}

module.exports = ServicioCalculoPrecio;