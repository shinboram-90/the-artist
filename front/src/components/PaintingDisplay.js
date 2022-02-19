import { Outlet, useParams } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../styles/painting.css';

function PaintingDisplay() {
  const { id } = useParams();
  const photos = paintingData[id - 1].photo;
  photos.map((photo) => console.log(photo));

  console.log(photos);
  return (
    <div className="listOfPaintings">
      <section className="paintingDisplay">
        <h2>{paintingData[id - 1].name}</h2>{' '}
        <p>{paintingData[id - 1].description}</p>{' '}
        {/* <img
          className="painting--display-img"
          alt={paintingData[id - 1].name}
          src={require(`../assets/mini/${photos}`)}
        /> */}
        <div className="carousel-wrapper">
          <Carousel>
            {photos.map((photo) => {
              return (
                <div key={photo} className="image-wrapper">
                  <img
                    className="painting--one-img"
                    alt={photo}
                    src={require(`../assets/big/${photo}`)}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default PaintingDisplay;
