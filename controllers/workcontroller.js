let Workstation = require('../models/workstation.model');

const getAll = (req,res) => {
    Workstation.find()
        .then(workstations => res.json(workstations))
        .catch(err => res.status(400).json('Error: ' + err))
}

const getOne = (req,res) => {
    Workstation.findById(req.params.id)
        .then(workstations => res.json(workstations))
        .catch(err => res.status(400).json('Error: ' + err))
}

const delOne = (req,res) => {
    Workstation.findByIdAndDelete(req.params.id)
        .then(() => res.json("Workstation deletada."))
        .catch(err => res.status(400).json('Error: ' + err))
}

const updtOne = (req,res) => {
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
}

const createOne = (req,res) => {
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
}



module.exports = {
    getAll,
    getOne,
    createOne,
    updtOne,
    delOne,
}