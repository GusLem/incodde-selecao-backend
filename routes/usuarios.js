const router = require('express').Router();
let Usuario = require('../models/usuario.model');

router.route('/').get((req,res) => {
    Usuario.find()
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
    Usuario.findById(req.params.id)
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req,res) => {
    Usuario.findByIdAndDelete(req.params.id)
        .then(() => res.json("Usuário deletado."))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
    Usuario.findById(req.params.id)
        .then(usuario => {
            usuario.nome = req.body.nome;
            usuario.desc = req.body.desc;
            usuario.agendamentos = req.body.agendamentos
            usuario.nome = req.body.nome;
            usuario.aniv = req.body.aniv;
            usuario.cpf = req.body.cpf;
            usuario.ende = req.body.ende;
            usuario.bio = req.body.bio;
            usuario.email = req.body.email;
            usuario.senha = req.body.senha;
            usuario.statusAdm = req.body.statusAdm;
            usuario.emailConfirmado = req.body.emailConfirmado;

            usuario.save()
                .then(() => res.json('Usuário atualizado.'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));   
});

router.route('/add').post((req,res) => {
    const nome = req.body.nome;
    const aniv = req.body.aniv;
    const cpf = req.body.cpf;
    const ende = req.body.ende;
    const bio = req.body.bio;
    const email = req.body.email;
    const senha = req.body.senha;
    const statusAdm = req.body.statusAdm;
    const emailConfirmado = req.body.emailConfirmado;

    const newUsuario = new Usuario({
        nome,
        aniv,
        cpf,
        ende,
        bio,
        email,
        senha,
        statusAdm,
        emailConfirmado
    });

    newUsuario.save()
        .then(user => res.json(user._id))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;