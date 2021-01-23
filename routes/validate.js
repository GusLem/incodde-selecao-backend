const router = require('express').Router();
const usuarioController = require('../controllers/usuariocontroller')

router.route('/:id').post(usuarioController.validateOne);

module.exports = router;