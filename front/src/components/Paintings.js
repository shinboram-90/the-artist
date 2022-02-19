import { useNavigate } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import Masonry from 'react-masonry-component';
import '../styles/paintings.css';

function Painting() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section--list">
        <h2>Gallerie</h2>

        <Masonry className="paintings--list" elementType={'ul'}>
          {paintingData.map((painting) => {
            return (
              <li
                className="container--img"
                key={painting.id}
                onClick={() => {
                  navigate(`${painting.id}`);
                }}
              >
                {/* <div>{painting.description}</div> */}
                <img
                  className="painting--list-img"
                  alt="test"
                  src={require(`../assets/mini/${painting.cover}`)}
                  loading="lazy"
                />

                <h3>{painting.name}</h3>
              </li>
            );
          })}
        </Masonry>
      </section>
    </>
  );
}

export default Painting;
