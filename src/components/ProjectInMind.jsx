import { useEffect } from "react";
import project from "../assets/14.png";
import {projectTextAnimate} from "../hooks/animations";

export default function ProjectInMind() {
  useEffect(() => projectTextAnimate, []);

  const gotWork = (
    <div>
      <h1 className="ml11">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters project__title">
            Got a new project in mind?
          </span>
        </span>
      </h1>
  </div>
  );

  return (
    <>
      <section data-aos='flip-up' data-aos-duration='1000' className="project">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              {gotWork}
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
