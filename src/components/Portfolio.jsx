import moviewWatch from "../assets/projects/movie-desktop-home.png";
import movieMob from "../assets/projects/movie-screen-home.png";
import memeMobile from "../assets/projects/meme-mobile.png";
import memeDesktop from "../assets/projects/meme-desktop.png";
import cardMobile from "../assets/projects/card-game-mobile.png";
import cardDesktop from "../assets/projects/card-game-desktop.png";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most Recent works</span>

        <div className="portfolio__container container grid">
          {/* <!--==================== PORTFOLIO 1 ====================--> */}
          <div className="portfolio__content grid">
            <div className="portfolio__images">
              <img
                src={moviewWatch}
                alt=""
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={movieMob}
                alt=""
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">Movie Watchlist</h3>
              <p className="portfolio__description">
                A movie collection Website adaptable to all devices,developed
                with TheMovieDB API.
              </p>
              <div className="portfolio__buttons">
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  GitHub
                  <i className="uil uil-github button__icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* { <!--==================== PORTFOLIO 2 ====================-->} */}
          <div className="portfolio__content grid">
            <div className="portfolio__images ">
              <img
                src={memeDesktop}
                alt=""
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={memeMobile}
                alt=""
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">Meme Generator</h3>
              <p className="portfolio__description">
                A meme template generator built with React and a meme API.
              </p>
              <div className="portfolio__buttons">
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  GitHub
                  <i className="uil uil-github button__icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!--==================== PORTFOLIO 3 ====================--> */}
          <div className="portfolio__content grid">
            <div className="portfolio__images ">
              <img
                src={cardDesktop}
                alt=""
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={cardMobile}
                alt=""
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">War of Cards</h3>
              <p className="portfolio__description">
                A card game built with Vanilla JS and Card Deck API.
              </p>
              <div className="portfolio__buttons">
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  GitHub
                  <i className="uil uil-github button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
