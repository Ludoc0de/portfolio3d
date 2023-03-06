import heroImage from "../image/template.png";
export default function Main() {
  return (
    <div className="main">
      <section className="presentation">
        <h3>Ludo code !</h3>
        <h1 className="presentation__title">Votre developpeur logiciels</h1>
        <div className="presentation__text">
          <img className="presentation__logo" src={heroImage} />
          <p style={{ fontSize: "0.5em" }}>
            Ludo, développeur web passionné, curieux et dynamique. Expérience en
            HTML, CSS et JavaScript. Motivé par le challenge de créer vos
            demandes colorés et personnalisés. Portfolio en ligne disponible.
          </p>
        </div>
      </section>

      <section className="portfolio">
        <h1>Mon Portfolio</h1>
        <h3 className="portfolio__title">Mes derniers projets</h3>

        <div>
          <a target="_blank" href="https://skypictures.netlify.app/">
            <div className="container">
              <img
                className="section__img_size"
                src="./images/skypictures.png"
                alt="photo de l'espace"
              />
              <div className="text overlay">cliquer pour visiter</div>
            </div>
          </a>
          <h3>La haut, dans le ciel !</h3>
          <p>
            <strong>Javascript OOP, API, SASS, GitHub</strong>
            <br />
            Site avec l'api de la Nasa. Création d'une page récupérant les
            photos du ciel de la Nasa.
          </p>
        </div>
      </section>

      <section className="contact">
        <h1>Contact me</h1>
      </section>
    </div>
  );
}
