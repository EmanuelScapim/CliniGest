import validator from "validator";
export const validaNome = (nome) => {
  return nome && nome.length > 0 && nome.length <= 70;
};

export const validaEmail = (email) => {
  return email && validator.isEmail(email);
};

export const validaPhone = (phone) => {
  return phone && validator.isMobilePhone(phone, "pt-BR");
};

export const validaCPF = (cpf) => {
  if (typeof cpf !== "string") return false;

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const cpfDigitos = cpf.split("").map((el) => +el);

  const validaDigito = (count) => {
    return (
      ((cpfDigitos
        .slice(0, count - 1)
        .reduce((soma, el, i) => soma + el * (count - i), 0) *
        10) %
        11) %
      10
    );
  };
  return (
    validaDigito(10) === cpfDigitos[9] && validaDigito(11) === cpfDigitos[10]
  );
};

export const validaData = (nascimento) => {
  return (
    nascimento &&
    validator.isDate(nascimento, { format: "DD/MM/YYYY", delimiters: ["/"] })
  );
};
