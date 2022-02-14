import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './../styles/App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Missing from './Missing';

import Paintings from './Paintings';
// import Search from '../paintings/Search';
import PaintingDisplay from './PaintingDisplay';
import ListPaintings from './ListPaintings';
// import Navbar from '../components/Navbar';
// import Login from './Login';
// import AddPainting from './paintings/AddPainting';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/"> Menu </Link>
        <Link to="paintings/list"> Tableaux </Link>
        <Link to="about">A propos</Link>
        <Link to="contact">Contact</Link>
        {/* <Link to="login"> Login </Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="paintings" element={<Paintings />}>
          <Route path="list" element={<ListPaintings />} />
          <Route path=":id" element={<PaintingDisplay />} />
          {/* <Route path="search" element={<Search />} /> */}
          {/* <Route path="add" element={<AddPainting />} /> */}
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
