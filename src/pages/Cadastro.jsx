import { useState } from "react";
import "./StyForm.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function cadastrarUsuario(e) {
    e.preventDefault();

    const resposta = await fetch("/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      setMensagem("Usuário cadastrado com sucesso");
      setNome("");
      setEmail("");
      setSenha("");
    } else {
      setMensagem(dados.erro);
    }
  }

  return (
    <div className="auth">
      <h1>Cadastro</h1>

      <form onSubmit={cadastrarUsuario}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <p>{mensagem}</p>
    </div>
  );
}

export default Cadastro;
