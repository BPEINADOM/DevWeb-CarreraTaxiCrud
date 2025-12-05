const { v4: uuidv4 } = require('uuid');
const CarreraIniciada = require('../events/CarreraIniciada');
const CarreraFinalizada = require('../events/CarreraFinalizada');
const Kilometros = require('../vo/Kilometros');
const DuracionMinutos = require('../vo/DuracionMinutos');
const Precio = require('../vo/Precio');

class CarreraTaxi {
  constructor({
    idCarrera = uuidv4(),
    cliente,
    taxi,
    taxista,
    kilometros = null, 
    barrioInicio = null,
    barrioLlegada = null,
    cantidadPasajeros = null,
    precio = null, 
    duracionMinutos = null 
  }) {
    this.idCarrera = idCarrera;
    this.cliente = cliente;
    this.taxi = taxi;
    this.taxista = taxista;

    this.kilometros = kilometros;
    this.barrioInicio = barrioInicio;
    this.barrioLlegada = barrioLlegada;
    this.cantidadPasajeros = cantidadPasajeros;

    this.precio = precio;
    this.duracionMinutos = duracionMinutos;

    this.estado = 'SOLICITADA';
    this.fechaSolicitud = new Date();
    this.fechaInicio = null;
    this.fechaFin = null;

    this.eventos = [];
  }

  aceptar() {
    if (this.estado !== 'SOLICITADA') throw new Error('Solo puede aceptarse si está SOLICITADA');
    this.estado = 'ACEPTADA';
  }

  iniciar() {
    if (this.estado !== 'ACEPTADA') throw new Error('Solo puede iniciarse si está ACEPTADA');
    this.estado = 'EN_CURSO';
    this.fechaInicio = new Date();
    this.eventos.push(new CarreraIniciada(this.idCarrera, this.fechaInicio));
  }

  registrarDistancia(kmNumber) {
    if (this.estado !== 'EN_CURSO') throw new Error('Solo se puede registrar distancia EN_CURSO');
    const kms = new Kilometros(kmNumber);
    this.kilometros = kms;
  }

  finalizar(precioNumber, duracionNumber) {
    if (this.estado !== 'EN_CURSO') throw new Error('Solo se puede finalizar EN_CURSO');
    this.fechaFin = new Date();
    this.duracionMinutos = new DuracionMinutos(duracionNumber);
    this.precio = new Precio(precioNumber);
    this.estado = 'FINALIZADA';
    this.eventos.push(new CarreraFinalizada(this.idCarrera, this.fechaFin, this.precio.valor));
  }

  cancelar() {
    if (this.estado === 'FINALIZADA') throw new Error('No se puede cancelar una carrera finalizada');
    this.estado = 'CANCELADA';
  }

  calcularPrecio(servicioCalculo) {
    if (!this.kilometros || !this.duracionMinutos) throw new Error('Requiere kilometros y duracion para calcular precio');
    const valor = servicioCalculo.calcular(this.kilometros.valor, this.duracionMinutos.valor);
    this.precio = new Precio(valor);
    return this.precio;
  }
}

module.exports = CarreraTaxi;