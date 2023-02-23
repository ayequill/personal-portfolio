import project from "../assets/14.png";

export default function ProjectInMind() {

  return (
    <>
      <section data-aos='zoom-in-up' data-aos-duration='1000' className="project">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <p className="project__title"> Got a new project in mind?</p>
              <p className="project__description">
                Connect me now and get a 30% discount on your new project.
              </p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me
                <i className="uil uil-message project__icon button__icon"></i>
              </a>
            </div>
            <div className="project__img-container">
              <img src={project} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
