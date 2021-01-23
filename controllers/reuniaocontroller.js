let SalaReuniao = require('../models/salareuniao.model');

const getAll = (req,res) => {
    SalaReuniao.find()
        .then(salareuniaos => res.json(salareuniaos))
        .catch(err => res.status(400).json('Error: ' + err))
}

const getOne = (req,res) => {
    SalaReuniao.findById(req.params.id)
        .then(salareuniaos => res.json(salareuniaos))
        .catch(err => res.status(400).json('Error: ' + err))
}

const delOne = (req,res) => {
    SalaReuniao.findByIdAndDelete(req.params.id)
        .then(() => res.json("Sala de Reunião deletada."))
        .catch(err => res.status(400).json('Error: ' + err))
}

const updtOne = (req,res) => {
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
}

const createOne = (req,res) => {
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
}



module.exports = {
    getAll,
    getOne,
    createOne,
    updtOne,
    delOne,
}