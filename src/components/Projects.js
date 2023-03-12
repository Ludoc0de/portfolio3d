export default function Projects(props) {
  const { img, link, linkText, title, text } = props;
  return (
    <div className="project__container text-left">
      <a className="project__link" target="_blank" href={link}>
        <div>
          <img
            className="project__img rounded-lg max-w-full w-56 h-40"
            src={img}
            alt="photo de l'espace"
          />
          <div className="project__text text-2xl">{linkText}</div>
        </div>
      </a>
      <h3 className="project__title text-6xl mt-4">{title}</h3>
      <p className="project__text text-2xl">
        <strong>{text}</strong>
        <br />
      </p>
    </div>
  );
}
