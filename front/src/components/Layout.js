import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import Footer from '../components/Footer';

function Layout() {
  const [isActive, setActive] = useState(false);

  const toggleCLass = () => {
    setActive(!isActive);
  };

  if (isActive) {
    console.log('i am active');
  }

  return (
    <div>
      <nav className="navbar">
        <ul>
          <div>
            <li>
              <Link to="/" onClick={() => setActive(false)}>
                <h1>JADE ROUGERIE</h1>
              </Link>
            </li>
          </div>
          <div
            className={`navbar--items ${isActive ? 'hide--nav' : 'show--nav'}`}
          >
            <li>
              <Link to="about" onClick={() => setActive(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="paintings" onClick={() => setActive(false)}>
                {' '}
                Tableaux{' '}
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={() => setActive(false)}>
                Contact
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
