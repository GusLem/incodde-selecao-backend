const router = require('express').Router();
const nodemailer = require('nodemailer');



router.route('/').post((req, res) => {

    //Conteúdo do Email
    const output = `
      <h1>Obrigado por se registrar no Coworking da Incodde</h1>
      
      <p>Valide sua conta <a href="http://localhost:3000/validate/${req.body.id}">clicando aqui</a></p>
    `;
  
    
    //SMTP usando o Ethereal
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'toy.murazik36@ethereal.email',
            pass: 'euQBKHdfg8PsH6QMGJ'
        }
    });
  
    //Outros dados do E-mail
    let mailOptions = {
        from: '"Coworking App" <noreply@incodde.com>', 
        to: req.body.email, 
        subject: 'Bem vindo ao Coworking da Incodde', 
        text: 'Olhe o HTML', 
        html: output 
    };
  

    //Manda email e confirma no console do servidor
    //Front-end recebe o link do E-mail simulado
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.json(nodemailer.getTestMessageUrl(info))
  
    });


});

module.exports = router;