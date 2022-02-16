import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className="painting">
        <Link to="paintings/search"> Search </Link>
        {/* <Link to=":id"> List </Link> */}
        <Link to="paintings/add"> Add </Link>
        <hr />
        <Outlet />
      </nav>
    </div>
  );
}

export default Home;
