const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

//Conecta com o MongoDB Atlas
const uri = 'mongodb+srv://incodde:incodde@clustercentral.v1bzz.gcp.mongodb.net/coworking?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Conectado com o DB");
});

//Routers
const reuniaoRouter = require('./routes/reunioes');
const workRouter = require('./routes/workstations');
const usuarioRouter = require('./routes/usuarios');
const loginRouter = require('./routes/login')
const sendRouter = require('./routes/send')
const validateRouter = require('./routes/validate')

//CRUDs
app.use('/reunioes',reuniaoRouter);
app.use('/workstations',workRouter);
app.use('/usuarios', usuarioRouter);

//Autenticação do Login
app.use('/login', loginRouter)

//Enviar link de confirmação do E-mail
app.use('/send', sendRouter)

//Confirmação do E-mail
app.use('/validate',validateRouter)

//Cria Listener
app.listen(port, () => {
    console.log(`Servidor rodando no port: ${port}`);
})