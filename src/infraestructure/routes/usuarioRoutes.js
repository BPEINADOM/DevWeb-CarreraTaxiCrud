const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

router.post('/', controller.crear);
router.get('/', controller.listar);
router.get('/:id', controller.buscar);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

module.exports = router;

