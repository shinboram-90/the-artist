import { Link, Outlet } from 'react-router-dom';
import '../styles/navbar.css';

function Layout() {
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
          <div className="navbar--items">
            <li>
              <Link to="about">A propos</Link>
            </li>
            <li>
              <Link to="paintings"> Tableaux </Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </div>
        </ul>
        {/* <Link to="login"> Login </Link> */}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
