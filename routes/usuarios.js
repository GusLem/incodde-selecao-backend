const router = require('express').Router();
const usuarioController = require('../controllers/usuariocontroller')

router.route('/').get(usuarioController.getAll);
router.route('/:id').get(usuarioController.getOne);
router.route('/delete/:id').delete(usuarioController.delOne);
router.route('/update/:id').post(usuarioController.updtOne);
router.route('/add').post(usuarioController.createOne);

module.exports = router;