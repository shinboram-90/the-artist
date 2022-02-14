import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"> Menu </Link>
      <Link to="paintings/list"> Tableaux </Link>
      <Link to="about">A propos</Link>
      <Link to="contact">Contact</Link>
      {/* <Link to="login"> Login </Link> */}
    </nav>
  );
}
export default Navbar();
