const router = require('express').Router();
const usuarioController = require('../controllers/usuariocontroller')

router.route('/').post(usuarioController.loginOne)

module.exports = router;