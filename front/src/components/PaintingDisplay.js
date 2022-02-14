import { useParams } from 'react-router-dom';
import { paintingData } from '../data/paintingData';

function PaintingDisplay() {
  const { id } = useParams();
  return (
    <div className="listOfPaintings">
      <div className="paintingDisplay">
        <h1>{paintingData[id - 1].name}</h1>{' '}
        <p>{paintingData[id - 1].description}</p>{' '}
      </div>
    </div>
  );
}

export default PaintingDisplay;
