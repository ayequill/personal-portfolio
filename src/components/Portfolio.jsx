import { portfolio } from "../portfolioData";

const portfolioElements = portfolio.map((element, index) => {
  return (
    <div key={index} className="portfolio__content grid">
      <div data-aos='fade-up' data-aos-mirror='true'  className="portfolio__images">
        <img
          src={element.desktopImgSrc}
          alt="movie collection site"
          className="portfolio__img portfolio__desktop"
        />
        <img
          src={element.mobileImgSrc}
          alt="movie collection site"
          className="portfolio__img portfolio__mobile"
        />
      </div>
      <div data-aos='slide-up' data-aos-mirror='true'  className="portfolio__data">
        <h3 className="portfolio__title">{element.title}</h3>
        <p className="portfolio__description">{element.desc}</p>
        <div className="portfolio__tags-container">
          {element.tags.map((tag, index) => (
            <p key={index} className="portfolio__tags">
              {tag}
            </p>
          ))}
        </div>
        <div className="portfolio__buttons">
          <a
            href={element.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--flex button--small portfolio__button"
          >
            Demo
            <i className="uil uil-arrow-right button__icon"></i>
          </a>
          <a
            href={element.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--flex button--small portfolio__button"
          >
            GitHub
            <i className="uil uil-github button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
});

export default function Portfolio() {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 data-aos='slide-up' data-aos-mirror='true' data-aos-duration='1000' className="section__title">Portfolio</h2>
        <span data-aos='slide-up' data-aos-mirror='true' data-aos-duration='1000' className="section__subtitle">Most Recent works</span>

        <div className="portfolio__container container grid">
          {portfolioElements}
        </div>
      </section>
    </>
  );
}
