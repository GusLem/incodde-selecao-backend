const router = require('express').Router();
const emailController = require('../controllers/emailcontroller')

router.route('/').post(emailController.emailSender);

module.exports = router;