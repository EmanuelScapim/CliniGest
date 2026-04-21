import * as v from "/util/validacoes.js";

class Paciente {
  constructor(dados) {
    this.nome_paciente = dados.nome;
    this.numero_paciente = this.limparApenasNumeros(dados.phone);
    this.email_paciente = dados.email;
    this.cpf_pacientes = this.limparApenasNumeros(dados.cpf);
    this.data_nascimento_paciente = dados.nascimento;
  }

  limparApenasNumeros(valor) {
    return valor ? valor.replace(/\D/g, "") : "";
  }

  validar() {
    const erros = [];

    if (!v.validaNome(this.nome_paciente)) {
      erros.push("Nome invalido");
    }
    if (!v.validaCPF(this.cpf_pacientes)) {
      erros.push("CPF invalido");
    }
    if (!v.validaEmail(this.email_paciente)) {
      erros.push("Email invalido");
    }
    if (!v.validaPhone(this.numero_paciente)) {
      erros.push("Telefone invalido");
    }
    if (!v.validaData(this.data_nascimento_paciente)) {
      erros.push("Data de nascimento inválida");
    }
  }
}
