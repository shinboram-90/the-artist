import '../styles/activity.css';

function Activity() {
  return (
    <>
      <header className="bg--image">
        <div className="bg--overlay"></div>
        <figure className="quote">
          <img
            className="img--splash-top"
            alt="paint splash"
            src={require('../assets/purple.png')}
          />

          <blockquote>
            <p>
              <strong>L'ART</strong> est comme une prière, une main étendue dans
              l'obscurité qui veut saisir une part de grâce afin de se muer en
              une main... qui donne !
            </p>
            <span className="quote--ending">À bientôt,</span>
            <figcaption className="quote--signature">
              Jade B. Rougerie
            </figcaption>
          </blockquote>
          <img
            className="img--splash-bottom"
            alt="paint splash"
            src={require('../assets/purple-2.png')}
          />
        </figure>
      </header>
      <section className="section--video">
        {/* <h2>Artiste Peintre Impressionniste</h2> */}

        <video controls autoPlay loop muted>
          <source
            src={
              'https://res.cloudinary.com/dblhjhkq0/video/upload/v1645013371/vid%C3%A9o_J._cuvgxd.mov'
            }
            type="video/mp4"
          ></source>
        </video>
      </section>
    </>
  );
}

export default Activity;
