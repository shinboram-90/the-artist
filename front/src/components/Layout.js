import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import Footer from '../components/Footer';

function Layout() {
  const [isActive, setActive] = useState(false);

  const toggleCLass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <div>
            <li>
              <Link to="/" onClick={() => setActive(false)}>
                <h1>JADE ROUGERIE</h1>
                <div className="li--underline li--underline-1">
                  <span>
                    <img
                      className="img--underline-1"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span>
                </div>
              </Link>
            </li>
          </div>
          <div
            className={`navbar--items ${isActive ? 'hide--nav' : 'show--nav'}`}
          >
            <li>
              <Link to="about" onClick={() => setActive(false)}>
                <strong>À propos</strong>
                <div className="li--underline li--underline-2">
                  <span>
                    <img
                      className="img--underline-2"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="paintings" onClick={() => setActive(false)}>
                <strong>Tableaux</strong>
                <div className="li--underline li--underline-3">
                  <span>
                    <img
                      className="img--underline-3"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={() => setActive(false)}>
                <strong>Contact</strong>
                <div className="li--underline li--underline-4">
                  <span>
                    <img
                      className="img--underline-4"
                      alt="red paint line"
                      src={require('../assets/red-paint-brush-stroke.png')}
                    />
                  </span>
                </div>
              </Link>
            </li>
          </div>
        </ul>
        <img
          className={`img--splash-nav ${
            isActive ? 'rotate--img' : 'rotate--img-2'
          }`}
          onClick={toggleCLass}
          alt="white paint splash"
          src={require('../assets/white.png')}
        />
      </nav>
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
