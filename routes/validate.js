const router = require('express').Router();
let Usuario = require('../models/usuario.model');

router.route('/:id').post((req,res) => {

    //Altera o booleano para true assim que o usuário clicar no link do E-mail
    Usuario.findById(req.params.id)
        .then(usuario => {
            usuario.emailConfirmado = true;

            usuario.save()
                .then(() => res.json('Usuario validado.'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));   
    });

module.exports = router;