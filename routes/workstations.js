const router = require('express').Router();
let Workstation = require('../models/workstation.model');

router.route('/').get((req,res) => {
    Workstation.find()
        .then(workstations => res.json(workstations))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
    Workstation.findById(req.params.id)
        .then(workstations => res.json(workstations))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/:id').delete((req,res) => {
    Workstation.findByIdAndDelete(req.params.id)
        .then(() => res.json("Workstation deletada."))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
    Workstation.findById(req.params.id)
        .then(workstation => {
            workstation.nome = req.body.nome;
            workstation.desc = req.body.desc;
            workstation.agendamentos = req.body.agendamentos

            workstation.save()
                .then(() => res.json('Workstation atualizada.'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));   
});

router.route('/add').post((req,res) => {
    const nome = req.body.nome;
    const desc = req.body.desc;
    const agendamentos = req.body.agendamentos

    const newWorkstation = new Workstation({
        nome,
        desc,
        agendamentos
    });

    newWorkstation.save()
        .then(() => res.json('Workstation adicionada.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;