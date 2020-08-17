const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    aniv: { type: Date, required: true },
    cpf: { type: String, required: true },
    ende: { type: String, required: true },
    bio: { type: String },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    statusAdm: { type: Boolean, required: true, default: false },
    emailConfirmado: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", userSchema);

module.exports = Usuario;
