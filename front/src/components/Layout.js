import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav className="navbar">
        <Link to="about">A propos</Link>
        <Link to="paintings"> Tableaux </Link>
        <Link to="contact">Contact</Link>
        {/* <Link to="login"> Login </Link> */}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
