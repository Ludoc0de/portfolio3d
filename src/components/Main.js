import heroImage from "../images/template.png";
import Projects from "./Projects";
import Sky from "../images/skypictures.png";
import Library from "../images/reader.png";
import DevOps from "../images/devops.svg";
import Recipe from "../images/fraise.png";
import Beauty from "../images/metiss.png";
import Happy from "../images/sqvt.png";

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
            title={"Dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
          <Projects
            img={Library}
            linkText={"cliquer pour visiter"}
            title={"My library"}
            text={"REACT, SASS, STORAGE, API"}
          />
          <Projects
            img={DevOps}
            linkText={"cliquer pour visiter"}
            title={"Portfolio DevOps"}
            text={"TERRAFORM, AWS S3, GITHUB ACTION, DOCKER(Incomming)"}
          />
          <Projects
            img={Recipe}
            linkText={"cliquer pour visiter"}
            title={"Mes recettes"}
            text={"JS, EJS, NODEJS, EXPRESS, MONGODB, GOOGLE OAUTH, MVC"}
          />
        </div>

        <h3 className="client__title">Mes projets clients</h3>

        <div className="project">
          <Projects
            img={Beauty}
            linkText={"cliquer pour visiter"}
            title={"Beauté"}
            text={"HTML, CSS, JV"}
          />
          <Projects
            img={Happy}
            linkText={"cliquer pour visiter"}
            title={"Happy"}
            text={"REACT, SASS"}
          />
        </div>
      </section>

      <section className="contact">
        <h1>Contact me</h1>
      </section>
    </div>
  );
}
