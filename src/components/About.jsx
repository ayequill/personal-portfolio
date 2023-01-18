export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src="/assets/img/about.jpg" alt="" className="about__img" />

        <div className="about_data">
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br />
                project
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>

            <div className="about__buttons">
              <a
                download=""
                href="/assets/pdf/Alexa-Cv.pdf"
                className="button button--flex"
              >
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
