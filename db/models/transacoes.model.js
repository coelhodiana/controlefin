const mongoose = require("mongoose");

const TransacoesSchema = new mongoose.Schema({
  valor: { 
    type: String, 
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
  dataInclusao: {
    type: String,
    required: true
  }
});

const Transacoes = mongoose.model("Transacoes", TransacoesSchema);

module.exports = { Transacoes };
