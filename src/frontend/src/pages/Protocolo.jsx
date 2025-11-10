import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import "./Protocolo.css";


export default function Protocolo() {
  return (
    <div className="Protocolo">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Dental Alfaden Logo" className="logo-img" />
            <span>Dental Alfaden</span>
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/protocolo" className="nav-link">PROTOCOLO DE TRABAJO</Link></li>
            <li><a href="#works" className="nav-link">WORKS</a></li>
            <li><a href="#team" className="nav-link">EQUIPO</a></li>
            <li><a href="#contact" className="nav-link">CONTACTA</a></li>
          </ul>
        </nav>

        <div className="contact-info-header">
          <p>info@dentalalfaden.com</p>
          <p>+51 942633807</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <h1>Protocolo de Trabajo</h1>
        <p>Aquí irá el contenido detallado del protocolo...</p>

        <div className="button-container">
          <Link to="/" className="back-button">← Volver a la Página Principal</Link>
        </div>
      </main>
    </div>
  );
}
