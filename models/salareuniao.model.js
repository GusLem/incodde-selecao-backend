const mongoose = require("mongoose");

const reuniaoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    desc: { type: String, required: true },
    horario: { type: String, required: true },
    criador: { type: String, required: true },
    participantes: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const salaReuniaoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    desc: { type: String, required: true },
    agendamentos: { type: [reuniaoSchema], required: false },
  },
  { timestamps: true }
);

const SalaReuniao = mongoose.model("SalaReuniao", salaReuniaoSchema);

module.exports = SalaReuniao;
