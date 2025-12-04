const { v4: uuidv4 } = require('uuid');
const CarreraIniciada = require('../events/CarreraIniciada');
const CarreraFinalizada = require('../events/CarreraFinalizada');

class CarreraTaxi {

    constructor({
        idCarrera = uuidv4(),
        cliente,
        taxi,
        taxista,
        kilometros,
        barrioInicio,
        barrioLlegada,
        cantidadPasajeros,
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

        this.eventos = [];
    }

    iniciar() {
        const evento = new CarreraIniciada(this.idCarrera, new Date());
        this.eventos.push(evento);
    }

    finalizar(precioFinal, duracion) {
        this.precio = precioFinal;
        this.duracionMinutos = duracion;

        const evento = new CarreraFinalizada(
            this.idCarrera,
            new Date(),
            precioFinal
        );

        this.eventos.push(evento);
    }

    calcularPrecio(servicioCalculo) {
        if (!this.kilometros || !this.duracionMinutos) {
            throw new Error("Se requieren kilómetros y duración");
        }
        this.precio = servicioCalculo.calcular(
            this.kilometros,
            this.duracionMinutos
        );
    }
}

module.exports = CarreraTaxi;

