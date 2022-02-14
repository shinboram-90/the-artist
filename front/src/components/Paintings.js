import { Link, Outlet } from 'react-router-dom';

function Painting() {
  return (
    <div className="painting">
      <Link to="/paintings/search"> Search </Link>
      <Link to="/paintings/list"> List </Link>
      <Link to="/paintings/add"> Add </Link>

      <Outlet />
    </div>
  );
}

export default Painting;
