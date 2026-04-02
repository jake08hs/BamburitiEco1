import { useState } from 'react';
import './Header.css';
import logo from '../assets/img/logo bamburiti.png';
import { FaUser, FaShoppingCart } from 'react-icons/fa';


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">

      <div className="header-container">

        {/* ESQUERDA */}
        <div className="header-left">
          <img src={logo} alt="Logo Bamburiti" className="navbar-logo" />
        </div>

        {/* CENTRO */}
        <nav className="header-center">
          <ul className="header-menu">
            <li><a href="/">Home</a></li>
            <li><a href="#agroecologia">Agroecologia</a></li>
            <li><a href="#workshop">Workshop</a></li>
            <li><a href="#bio">Bio Estruturas</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>

        {/* DIREITA */}
        <div className="header-actions">

          <div className="account-area">
            <FaUser 
              className="header-icon"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="dropdown-menu-custom">
                <button>Entrar</button>
                <button>Registrar-se</button>
              </div>
            )}
          </div>

          <div className="cart-area">
            <FaShoppingCart className="header-icon" />
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;