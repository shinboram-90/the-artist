import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

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
              <Link to="/">
                <h1>JADE ROUGERIE</h1>
              </Link>
            </li>
          </div>
          <div
            className={`navbar--items ${isActive ? 'hide--nav' : 'show--nav'}`}
          >
            <li>
              <Link to="about">À propos</Link>
            </li>
            <li>
              <Link to="paintings"> Tableaux </Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
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
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
