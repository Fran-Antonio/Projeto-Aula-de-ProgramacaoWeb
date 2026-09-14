const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.post("/usuarios", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      erro: "Preencha todos os campos",
    });
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  db.run(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senhaCriptografada],
    function (err) {
      if (err) {
        return res.status(400).json({
          erro: "Não foi possível cadastrar o usuário",
        });
      }

      res.status(201).json({
        id: this.lastID,
        nome,
        email,
      });
    },
  );
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      erro: "Informe email e senha",
    });
  }

  // ---------------------//

  db.get(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (err, usuario) => {
      if (err) {
        return res.status(500).json({
          erro: "Erro no servidor",
        });
      }

      if (!usuario) {
        return res.status(401).json({
          erro: "Usuário não encontrado",
        });
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({
          erro: "Senha incorreta",
        });
      }

      res.json({
        mensagem: "Login realizado com sucesso",
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      });
    },
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
