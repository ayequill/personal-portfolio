import moviewWatch from "../assets/projects/movie-desktop-home.webp";
import movieMob from "../assets/projects/movie-screen-home.webp";
import memeMobile from "../assets/projects/meme-mobile.webp";
import memeDesktop from "../assets/projects/meme-desktop.webp";
import cardMobile from "../assets/projects/card-game-mobile.webp";
import cardDesktop from "../assets/projects/card-game-desktop.webp";
import colorGenDesktop from "../assets/projects/color-gen-desktop.webp";
import colorGenMobile from "../assets/projects/color-gen-mobile.webp";
import rpgGameMobile from "../assets/projects/rpg-game-mobile.webp"
import rpgGameDesktop from "../assets/projects/rpg-game-desktop.webp"


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
                alt="movie collection site"
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={movieMob}
                alt="movie collection site"
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
                  href="https://movie-watchlist-beta.vercel.app/"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="https://github.com/ayequill/meme-generator"
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
                alt="meme generator"
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={memeMobile}
                alt="meme generator"
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">Meme Generator</h3>
              <p className="portfolio__description">
               A meme generator web app that allows users to add text to randomly generated meme images.
              </p>
              <div className="portfolio__buttons">
                <a
                  href="https://meme-generator-ayequill.vercel.app/"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="https://github.com/ayequill/meme-generator"
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
                alt="war of cards game"
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={cardMobile}
                alt="war of cards game"
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
                  href="http://war-of-cards.vercel.app/"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="https://github.com/ayequill/war-of-cards"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  GitHub
                  <i className="uil uil-github button__icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio 4 */}
            <div className="portfolio__content grid">
            <div className="portfolio__images ">
              <img
                src={rpgGameDesktop}
                alt="an rpg project"
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={rpgGameMobile}
                alt="an rpg project"
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">RPG Game</h3>
              <p className="portfolio__description">
                A RPG developed using HTML, CSS3 and Vanilla JS
              </p>
              <div className="portfolio__buttons">
                <a
                  href="https://rpg-game-lyart.vercel.app/"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="https://github.com/ayequill/rpg-game"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  GitHub
                  <i className="uil uil-github button__icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio 5 */}

          <div className="portfolio__content grid">
            <div className="portfolio__images ">
              <img
                src={colorGenDesktop}
                alt="a color generating app"
                className="portfolio__img portfolio__desktop"
              />
              <img
                src={colorGenMobile}
                alt="a color generating app"
                className="portfolio__img portfolio__mobile"
              />
            </div>
            <div className="portfolio__data">
              <h3 className="portfolio__title">Color Scheme Generator</h3>
              <p className="portfolio__description">
                A RPG developed using HTML, CSS3 and Vanilla JS
              </p>
              <div className="portfolio__buttons">
                <a
                  href="https://ayequill-color-gen.vercel.app/"
                  rel="noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
                <a
                  href="https://github.com/ayequill/color-generator"
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
