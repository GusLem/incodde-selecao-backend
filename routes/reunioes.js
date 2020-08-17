const router = require('express').Router();
let SalaReuniao = require('../models/salareuniao.model');

router.route('/').get((req,res) => {
    SalaReuniao.find()
        .then(salareuniaos => res.json(salareuniaos))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
    SalaReuniao.findById(req.params.id)
        .then(salareuniaos => res.json(salareuniaos))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req,res) => {
    SalaReuniao.findByIdAndDelete(req.params.id)
        .then(() => res.json("Sala de Reunião deletada."))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
    SalaReuniao.findById(req.params.id)
        .then(salareuniao => {
            salareuniao.nome = req.body.nome;
            salareuniao.desc = req.body.desc;
            salareuniao.agendamentos = req.body.agendamentos

            salareuniao.save()
                .then(() => res.json('Sala de Reunião atualizada.'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));   
});

router.route('/add').post((req,res) => {
    const nome = req.body.nome;
    const desc = req.body.desc;
    const agendamentos = req.body.agendamentos

    const newSalaReuniao = new SalaReuniao({
        nome,
        desc,
        agendamentos
    });

    newSalaReuniao.save()
        .then(() => res.json('Sala de Reunião adicionada.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;