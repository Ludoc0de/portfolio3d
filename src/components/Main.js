export default function Main() {
  return (
    <div className="main">
      <section
        style={{
          position: "absolute",
          top: "45vh",
          marginLeft: "1em",
        }}
      >
        <h1>Ludo code !</h1>
        <p>Software developpeur</p>
      </section>
      <section
        className="coneRef"
        style={{
          position: "absolute",
          top: "140vh",
          transform: "translateX(100%)",
          margin: 0,
          marginLeft: "1em",
        }}
      >
        <h1>My Portfolio</h1>
      </section>
      <section
        style={{
          position: "absolute",
          top: "250vh",
          margin: 0,
          marginLeft: "1em",
        }}
      >
        <h1>Contact me</h1>
      </section>
    </div>
  );
}
