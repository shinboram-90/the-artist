import { useNavigate } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import '../styles/paintings.css';

function Painting() {
  const navigate = useNavigate();
  return (
    <>
      <section className="listOfProducts">
        <div className="productsList">
          {paintingData.map((painting) => {
            return (
              <div
                key={painting.id}
                className="productDisplay"
                onClick={() => {
                  navigate(`${painting.id}`);
                }}
              >
                {console.log(painting)}
                <h1>{painting.name}</h1>
                <p>{painting.description}</p>
                <img
                  className="paintings--image"
                  alt="test"
                  src={painting.photo}
                />
                {/* src={`../images/${props.painting.img}`} */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Painting;
