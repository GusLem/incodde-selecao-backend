const mongoose = require("mongoose");

const workstationAgendamentoSchema = new mongoose.Schema(
  {
    horario: { type: String, required: true },
    criador: { type: String, required: true },
  },
  { timestamps: true }
);

const workstationSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    desc: { type: String, required: true },
    agendamentos: { type: [workstationAgendamentoSchema], required: false },
  },
  { timestamps: true }
);

const Workstation = mongoose.model("Workstation", workstationSchema);

module.exports = Workstation;
