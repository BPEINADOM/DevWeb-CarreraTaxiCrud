const express = require('express');
const router = express.Router();
const controller = require('../controllers/TaxistaController');

router.post('/', controller.crear);
router.get('/', controller.listar);
router.get('/:idTaxista', controller.buscar);
router.put('/:idTaxista', controller.actualizar);
router.delete('/:idTaxista', controller.eliminar);


module.exports = router;
