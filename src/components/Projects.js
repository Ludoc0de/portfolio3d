export default function Projects(props) {
  const { img, linkText, title, text } = props;
  return (
    <div className="project__container">
      <a
        className="project__link"
        target="_blank"
        href="https://skypictures.netlify.app/"
      >
        <span>
          <img className="project__img" src={img} alt="photo de l'espace" />
          <div className="project__text">{linkText}</div>
        </span>
      </a>
      <h3 className="project__title">{title}</h3>
      <p className="project__text">
        <strong>{text}</strong>
        <br />
      </p>
    </div>
  );
}
