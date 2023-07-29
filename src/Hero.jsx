import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non minus
            cum adipisci molestiae fugit, quisquam atque nulla? Similique vitae
            aspernatur maiores ipsum eligendi quaerat in veniam, laboriosam
            commodi corrupti, tenetur voluptatum ullam minima dolorem autem
            animi. Quas deserunt tempora omnis.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" alt="woman and browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
