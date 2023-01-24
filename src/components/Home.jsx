import { useEffect } from "react";
import anime from "animejs";

export default function Home() {
  const hi = (
    <h1 className="ml10 home__title">
      <span className="text-wrapper">
        <span className="letters">Siaw A. Nicholas</span>
      </span>
    </h1>
  );

  useEffect(() => {
    anime({
      targets: "#morphing .p",
      d: [
        {
          value:
            "M171.5,-191.9C215.3,-167.6,239.1,-107,234.1,-53.5C229,0.1,195,46.5,157.5,71.5C119.9,96.5,78.8,99.9,37.7,123.4C-3.3,146.9,-44.2,190.4,-72.4,185.9C-100.7,181.3,-116.1,128.7,-133.1,84.2C-150.1,39.7,-168.6,3.3,-177.6,-46.2C-186.7,-95.8,-186.2,-158.6,-155,-185.1C-123.8,-211.6,-61.9,-201.8,1,-202.9C63.9,-204.1,127.7,-216.2,171.5,-191.9Z",
        },
        {
          value:
            "M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z",
        },
      ],
      easing: "easeInOutSine",
      duration: 10000,
      direction: "infinite alternate",
      loop: true,
    });
  });

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

  const styleOffset0 = { stopOpacity: "1", stopColor: "rgb(3, 159, 179)" };
  const styleOffset1 = { stopOpacity: "1", stopColor: "rgb(110, 87, 224)" };

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
              id="morphing"
              width="600"
              height="300"
              viewBox="0 0 450 450"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="grad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  spreadMethod="pad"
                  gradientTransform="matrix(1.364795, 0.140642, -0.117801, 0.993949, 0.052615, -0.024531)"
                >
                  <stop offset="0" style={styleOffset0} />
                  <stop offset="1" style={styleOffset1} />
                </linearGradient>
              </defs>
              <g transform="translate(200,250)">
                <path
                  className="p"
                  d="M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z"
                  fill="url(#grad1)"
                ></path>

                {/* <image
                  className="home__blob-img"
                  x="-120"
                  y="-150"
                  xlinkHref={homeImg}
                /> */}
              </g>
            </svg>
          </div>

          <div className="home__data">
            {hi}
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
