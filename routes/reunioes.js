const router = require('express').Router();
const reuniaoController = require('../controllers/reuniaocontroller')

router.route('/').get(reuniaoController.getAll);
router.route('/:id').get(reuniaoController.getOne);
router.route('/delete/:id').delete(reuniaoController.delOne);
router.route('/update/:id').post(reuniaoController.updtOne);
router.route('/add').post(reuniaoController.createOne);

module.exports = router;