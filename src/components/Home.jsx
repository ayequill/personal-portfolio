import { useEffect } from "react";
import homeImg from "../assets/home.png";
import anime from "animejs";

export default function Home() {
  const hi = (
    <h1 className="ml10">
      <span className="text-wrapper">
        <span className="letters">Hi, Im Nicholas</span>
      </span>
    </h1>
  );

  useEffect(() => {
    // Wrap every letter in a span
    let textWrapper = document.querySelector(".ml10 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml10 .letter",
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml10",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  });

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/nicholas-siaw-8824a6175/"
              rel="noreferrer"
              target="_blank"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://www.twitter.com/ayequill"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a
              href="http://github.com/ayequill"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home__blob-img"
                  x="12"
                  y="18"
                  xlinkHref={homeImg}
                />
              </g>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">{hi}</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
