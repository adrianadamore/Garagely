import '../styles/header.css'
import '../styles/global.css'
import logo from '../assets/logo-mark.svg'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo: troque o texto/ícone depois */}
        <a href="#" className="logo">
          <img src={logo} alt="" className="logo-img" />
          <span className="logo-name">Garagely</span>
        </a>

        {/* Menu de navegação */}
        <nav className="nav" aria-label="Menu principal">
          <a href="#">Início</a>
          <a href="#">Garagens</a>
          <a href="#">Como funciona</a>
          <a href="#">Contato</a>
        </nav>

        {/* Botões de conta */}
        <div className="header-actions">
          <button className="btn btn-ghost">Entrar</button>
          <button className="btn btn-primary">Cadastrar</button>
        </div>
      </div>
    </header>
  )
}

export default Header