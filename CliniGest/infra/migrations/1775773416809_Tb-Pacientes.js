exports.up = (pgm) => {
  pgm.createTable("Tb_Pacientes", {
    id_paciente: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    nome_paciente: {
      type: "varchar(70)",
      notNull: true,
    },
    telefone_paciente: {
      type: "varchar(11)",
      notNull: true,
    },
    email_paciente: {
      type: "varchar(40)",
      notNull: true,
      unique: true,
    },
    cpf_paciente: {
      type: "varchar(11)",
      notNull: true,
      unique: true,
    },
    data_nascimento_paciente: {
      type: "date",
      notNull: true,
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },
  });
};
