const express = require('express');
const router = express.Router();
const controller = require('../controllers/CarreraTaxiController');

router.post('/', controller.solicitar);
router.get('/', controller.listar);
router.get('/:id', controller.obtener);
router.put('/:id/iniciar', controller.iniciar);
router.put('/:id/finalizar', controller.finalizar);
router.put('/:id/cancelar', controller.cancelar);

module.exports = router;