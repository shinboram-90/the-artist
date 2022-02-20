import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul>
        <Link to="#">
          <li className="social--media">Facebook</li>
        </Link>
        <Link to="#">
          <li className="social--media">Instagram</li>
        </Link>
        <Link to="#">
          <li className="social--media">Twitter</li>
        </Link>
      </ul>
      <p className="copyright">
        <small>&copy; {new Date().getFullYear()} Jade Rougerie</small>
      </p>
    </footer>
  );
}

export default Footer;
