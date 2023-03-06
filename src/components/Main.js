export default function Main() {
  return (
    <div className="main">
      <section className="presentation">
        <h3>Ludo code !</h3>
        <h1 className="presentation__title">Votre developpeur logiciels</h1>
        <div className="presentation__text">
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
      </section>

      <section
        className="contact"
        style={{
          position: "absolute",
          // top: "250vh",
          top: "230vh",
          margin: 0,
          marginLeft: "1em",
        }}
      >
        <h1>Contact me</h1>
      </section>
    </div>
  );
}
