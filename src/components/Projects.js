export default function Projects(props) {
  const { img, link, linkText, title, text } = props;
  return (
    <div className="project__container text-left">
      <a className="project__link" target="_blank" href={link}>
        <div>
          <img
            className="project__img rounded-lg max-w-full w-24 h-20 lg:w-56 lg:h-40"
            src={img}
            alt="photo de l'espace"
          />
          <div className="project__text text-lg lg:text-2xl">{linkText}</div>
        </div>
      </a>
      <h3 className="project__title text-2xl lg:text-6xl my-4">{title}</h3>
      <p className="project__text text-sm lg:text-2xl mb-8">
        <strong>{text}</strong>
        <br />
      </p>
    </div>
  );
}
