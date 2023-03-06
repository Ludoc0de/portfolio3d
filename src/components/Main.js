import heroImage from "../images/template.png";
import Projects from "./Projects";
import Sky from "../images/skypictures.png";
export default function Main() {
  return (
    <div className="main">
      <section className="presentation">
        <h3>Ludo code !</h3>
        <h1 className="presentation__title">Votre developpeur logiciels</h1>
        <div className="presentation__text">
          <img className="presentation__logo" src={heroImage} />
          <p>
            Ludo, développeur web passionné, curieux et dynamique. Expérience en
            HTML, CSS et JavaScript. Motivé par le challenge de créer vos
            demandes colorés et personnalisés. Portfolio en ligne disponible.
          </p>
        </div>
      </section>

      <section className="portfolio">
        <h1>Mon Portfolio</h1>
        <h3 className="portfolio__title">Mes derniers projets</h3>

        <div className="project">
          <Projects
            img={Sky}
            linkText={"cliquer pour visiter"}
            title={"La haut, dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
          <Projects
            img={Sky}
            linkText={"cliquer pour visiter"}
            title={"La haut, dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
          <Projects
            img={Sky}
            linkText={"cliquer pour visiter"}
            title={"La haut, dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
          <Projects
            img={Sky}
            linkText={"cliquer pour visiter"}
            title={"La haut, dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
        </div>
      </section>

      <section className="contact">
        <h1>Contact me</h1>
      </section>
    </div>
  );
}
