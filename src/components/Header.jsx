import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Seja Bem-vindo</div>

      <nav className="header__menu">
        <Link to="/">Início</Link>
        <a href="#">Carros</a>
        <a href="#">Contato</a>

        <Link to="/login">Entrar</Link>
        <Link to="/cadastro">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default Header;
