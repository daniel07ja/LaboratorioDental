import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { user, loading, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="bg-black text-white py-2.5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5">
            <img 
              src={logo} 
              alt="Dental Alfaden Logo" 
              className="h-10 object-contain"
            />
            <span className="text-xl font-semibold text-white">
              Dental Alfaden
            </span>
          </Link>

          {/* Navegación */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-5 py-2.5">
              <li>
                <a 
                  href="protocolo" 
                  className="text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  PROTOCOLO DE TRABAJO
                </a>
              </li>
              <li>
                <a 
                  href="works" 
                  className="text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  WORKS
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  EQUIPO
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                >
                  CONTACTA
                </a>
              </li>
              
              {/* Mostrar condicionalmente según autenticación */}
              {loading ? (
                <li className="text-white font-medium text-sm">...</li>
              ) : user ? (
                <li className="relative group">
                  <button className="text-white hover:text-cyan-400 font-medium transition-colors duration-300">
                    Hola, {user.name || user.email.split('@')[0]}
                  </button>
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-md"
                    >
                      Mi Perfil
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-md"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </li>
              ) : (
                <li>
                  <Link 
                    to="/login" 
                    className="text-white hover:text-cyan-400 font-medium transition-colors duration-300"
                  >
                    REGISTRARSE
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Información de contacto */}
          <div className="hidden lg:flex flex-col items-end text-sm text-white">
            <p>info@dentalalfaden.com</p>
            <p>+51 942633807</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;