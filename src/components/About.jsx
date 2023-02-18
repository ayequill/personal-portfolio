import avatar from "../assets/me.jpeg";
import cv from "../assets/docs/cv.pdf";

export default function About() {
  return (
    <section
      // data-aos-offset="200"
      // // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-cubic"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
      className="about section "
      id="about"
    >
      <h2 data-aos="slide-up" data-aos-duration="1000"
className="section__title">
        About me
      </h2>
      <span data-aos="slide-up" className="section__subtitle">
        My Introduction
      </span>

      <div className="about__container container grid">
        <img data-aos-mirror='true' data-aos-duration='1000' data-aos="zoom-in-up" src={avatar} alt="" className="about__img" />

        <div className="about_data">
          <p data-aos-mirror='true' data-aos-duration='1200' data-aos="zoom-in-up" className="about__description">
            Hello my name is Siaw Nicholas, A Web developer with extensive
            knowledge and years of experience, working in web technologies and
            Ui / Ux design, delivering quality work.
          </p>
          <div data-aos-mirror='true' data-aos-duration='1200' data-aos="zoom-in" className="about__info">
            <div>
              <span className="about__info-title">1</span>
              <span className="about__info-name">
                Year <br />
                experience
              </span>
            </div>

            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">
                Completed <br />
                project
              </span>
            </div>

            <div>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>

            <div className="about__buttons">
              <a download="Siaw's CV" href={cv} className="button button--flex">
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
