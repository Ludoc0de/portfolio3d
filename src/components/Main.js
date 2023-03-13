import heroImage from "../images/template.png";
import Projects from "./Projects";
import Footer from "./Footer";
import Sky from "../images/space.png";
import Library from "../images/read.png";
import DevOps from "../images/dev.png";
import Service from "../images/services.png";
import Beauty from "../images/metiss.png";
import Happy from "../images/sqvt.png";

export default function Main() {
  //"https://formsubmit.co/el/haxume"
  return (
    <div className="main pl-8">
      <section className="presentation">
        <h3 className="text-6xl lg:text-8xl">Ludo code !</h3>
        <h1 className="presentation__title text-3xl lg:text-6xl">
          Votre developpeur logiciels
        </h1>
        <div className="presentation__text grid grid-cols-1 mt-8 lg:mt-60 lg:grid lg:grid-cols-2 items-center justify-items-start lg:justify-items-center">
          <img
            className="presentation__logo w-32 mb-8 lg:w-1/4 rounded-lg"
            src={heroImage}
          />
          <p className="pr-10 text-2xl lg:text-justify">
            Ludo, développeur web passionné, curieux et dynamique. Expérience en
            HTML, CSS et JavaScript. Motivé par le challenge de créer vos
            demandes colorés et personnalisés. Portfolio en ligne disponible.
          </p>
        </div>
      </section>

      <section className="portfolio w-80 lg:text-right lg:w-full">
        <h1 className="text-6xl lg:text-8xl">Mon Portfolio</h1>
        <h3 className="portfolio__title text-3xl lg:text-6xl">
          Mes derniers projets
        </h3>

        <div className="project grid grid-cols-2 gap-12 my-20 lg:my-40">
          <Projects
            img={Sky}
            link={"https://skypictures.netlify.app/"}
            linkText={"cliquer pour visiter"}
            title={"Dans le ciel !"}
            text={"Javascript OOP, API, SASS, GitHub"}
          />
          <Projects
            img={Library}
            link={"https://urlibrary.netlify.app/"}
            linkText={"cliquer pour visiter"}
            title={"My library"}
            text={"REACT, SASS, STORAGE, API"}
          />
          <Projects
            img={DevOps}
            link={"https://ludo-code.com/"}
            linkText={"cliquer pour visiter"}
            title={"Portfolio DevOps"}
            text={"TERRAFORM, AWS S3, GITHUB ACTION, THREE"}
          />
          <Projects
            img={Service}
            link={"https://aod.cyclic.app/"}
            linkText={"cliquer pour visiter"}
            title={"Mes services"}
            text={
              "MONGODB, EXPRESS, REACTJS, NODEJS, TAILWIND, GOOGLE AUTH, CRUD"
            }
          />
        </div>

        <h3 className="client__title">Mes projets clients</h3>

        <div className="project grid grid-cols-2 gap-12 my-20 lg:my-40">
          <Projects
            img={Beauty}
            linkText={"cliquer pour visiter"}
            link={"https://metiissnail.netlify.app/"}
            title={"Beauté"}
            text={"HTML, CSS, JV"}
          />
          <Projects
            img={Happy}
            linkText={"cliquer pour visiter"}
            link={"https://mllehappiness.netlify.app/"}
            title={"Happy"}
            text={"REACT, SASS"}
          />
        </div>
      </section>

      <section className="contact">
        <h1 className="text-6xl lg:text-8xl">Me Contacter</h1>
        <form
          className="contact__form mt-8 lg:mt-16 grid grid-cols-1 text-lg lg:text-2xl gap-2"
          action="https://formsubmit.co/f4c0b661879d47be04a3bb62e4bbe4ac"
          method="POST"
        >
          <label>Name</label>
          <input
            className="bg-transparent border-b-2 mb-4 lg:mb-10 w-2/3 lg:w-4/5 ease-linear duration-300 focus:border-amber-400 outline-none focus:w-4/5 lg:focus:w-full focus:border-b-4"
            type="text"
            name="name"
            required
          />
          <label>Email</label>
          <input
            className="bg-transparent border-b-2 mb-4 lg:mb-10  w-2/3 lg:w-4/5 ease-linear duration-300 focus:border-amber-400 outline-none  focus:w-4/5 lg:focus:w-full focus:border-b-4"
            type="email"
            name="email"
            required
          />
          <label>Message</label>
          <textarea
            required
            className="bg-transparent border-b-2 mb-4 lg:mb-10 w-2/3 lg:w-4/5 ease-linear duration-300 focus:border-amber-400 outline-none  focus:w-4/5 lg:focus:w-full focus:border-b-4"
            name="message"
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/pages/thankyou.html"
          />
          <button
            className="btn text-amber-50 mb-10 w-2/3 lg:w-4/5 ease-linear duration-300 hover:border-amber-400 hover:text-amber-400 hover:border-2"
            type="submit"
          >
            ENVOYER
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
