import { useNavigate } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import '../styles/paintings.css';

function Painting() {
  const navigate = useNavigate();
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
                {console.log(painting)}
                <h1>{painting.name}</h1>
                {/* <p>{painting.description}</p> */}
                <img
                  className="painting--list-img"
                  alt="test"
                  src={require(`../assets/mini/${painting.cover}`)}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Painting;
