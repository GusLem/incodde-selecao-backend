let Usuario = require('../models/usuario.model');

const getAll = (req,res) => {
    Usuario.find()
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err))
}

const getOne = (req,res) => {
    Usuario.findById(req.params.id)
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err))
}

const delOne = (req,res) => {
    Usuario.findByIdAndDelete(req.params.id)
        .then(() => res.json("Usuário deletado."))
        .catch(err => res.status(400).json('Error: ' + err))
}

const updtOne = (req,res) => {
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
}

const createOne = (req,res) => {
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
}

const validateOne = (req,res) => {

    //Altera o booleano para true assim que o usuário clicar no link do E-mail
    Usuario.findById(req.params.id)
        .then(usuario => {
            usuario.emailConfirmado = true;

            usuario.save()
                .then(() => res.json('Usuario validado.'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));   
    }

const loginOne = (req,res) => {
    //Checa se email e senha correspondem com algum usuário do DB
    Usuario.findOne(
        {
            email: req.body.email,
            senha: req.body.senha
        }
    )
    .then(result => {
        if (result === null) {
            //Caso não corresponda retorna esta mensagem.
            res.json({status: "E-mail ou Senha Inválidos"})
        }
        else {
            res.json({
                status: "Logado", 
                adm: result.statusAdm,
                email: result.emailConfirmado,
                emailValue: result.email,
                nome: result.nome,
                id: result._id
            })
        }
    })
    .catch(err => res.status(400).json('Erro: ' + err))
}

module.exports = {
    getAll,
    getOne,
    createOne,
    updtOne,
    delOne,
    validateOne,
    loginOne
}