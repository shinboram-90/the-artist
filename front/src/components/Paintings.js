import { useNavigate } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import Masonry from 'react-masonry-css';
import '../styles/paintings.css';

function Painting() {
  const navigate = useNavigate();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <section className="section--list">
        <h2>Gallerie</h2>

        <div className="paintings--list">
          {paintingData.map((painting) => {
            return (
              <div
                key={painting.id}
                onClick={() => {
                  navigate(`${painting.id}`);
                }}
              >
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <h1>{painting.name}</h1>
                  <p>{painting.description}</p>
                  <img
                    className="painting--list-img"
                    alt="test"
                    src={require(`../assets/mini/${painting.cover}`)}
                  />
                </Masonry>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Painting;
