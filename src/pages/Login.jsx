import { useState } from "react";
import "./StyForm.css";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function fazerLogin(e) {
    e.preventDefault();

    const resposta = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      setMensagem("Login realizado com sucesso");
    } else {
      setMensagem(dados.erro);
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>

      <form onSubmit={fazerLogin}>
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

        <button type="submit">Entrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}

export default Login;
