const CarreraTaxiRepositoryMongo = require('../repositories/CarreraTaxiRepositoryMongo');
const ServicioCalculoPrecio = require('../../domain/services/ServicioCalculoPrecio');

const SolicitarCarrera = require('../../application/carrera/SolicitarCarrera');
const IniciarCarrera = require('../../application/carrera/IniciarCarrera');
const FinalizarCarrera = require('../../application/carrera/FinalizarCarrera');
const CancelarCarrera = require('../../application/carrera/CancelarCarrera');
const ListarCarreras = require('../../application/carrera/ListarCarreras');
const ObtenerCarreraPorId = require('../../application/carrera/ObtenerCarreraPorId');

const repo = new CarreraTaxiRepositoryMongo();
const servicioPrecio = new ServicioCalculoPrecio();

module.exports = {
    solicitar: async (req, res) => {
        try {
            const usecase = new SolicitarCarrera(repo, servicioPrecio);
            const result = await usecase.ejecutar(req.body);
            res.status(201).json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    listar: async (req, res) => {
        try {
            const usecase = new ListarCarreras(repo);
            const result = await usecase.ejecutar();
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    obtener: async (req, res) => {
        try {
            const usecase = new ObtenerCarreraPorId(repo);
            const result = await usecase.ejecutar(req.params.id);
            if (!result) return res.status(404).json({ error: 'No encontrada' });
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    iniciar: async (req, res) => {
        try {
            const usecase = new IniciarCarrera(repo);
            const result = await usecase.ejecutar(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    finalizar: async (req, res) => {
        try {
            const usecase = new FinalizarCarrera(repo, servicioPrecio);
            const { precio, duracionMinutos, kilometros } = req.body;
            const result = await usecase.ejecutar(req.params.id, { precio, duracionMinutos, kilometros });
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    cancelar: async (req, res) => {
        try {
            const usecase = new CancelarCarrera(repo);
            const result = await usecase.ejecutar(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
};