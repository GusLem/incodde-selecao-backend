const router = require('express').Router();
const Usuario = require("../models/usuario.model")

router.route('/').post((req,res) => {
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
})

module.exports = router;