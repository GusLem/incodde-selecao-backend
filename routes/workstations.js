const router = require('express').Router();
const workController = require('../controllers/workcontroller')

router.route('/').get(workController.getAll);
router.route('/:id').get(workController.getOne);
router.route('/delete/:id').delete(workController.delOne);
router.route('/update/:id').post(workController.updtOne);
router.route('/add').post(workController.createOne);

module.exports = router;