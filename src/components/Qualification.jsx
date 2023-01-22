import { useState } from "react";
import { expData } from "../expData";

export default function Qualification() {
  const [showQualification, setShowQualification] = useState(true);
  const isActive = false;

  function handleClick(event) {
    setShowQualification(!showQualification);
    // eslint-disable-next-line no-unused-expressions
    !isActive;
  }

  const eduElements = expData.education.map((element) => (
    <div key={element.id} className="qualification__content">
      <div className="qualification__data">
        {element.shift && <div></div>}

        {element.shift && (
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        )}
        <div>
          <h3 className="qualification__title">{element.title}</h3>
          <span className="qualification__subtitle">{element.institute}</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i>
            {element.duration}
          </div>
        </div>

        {!element.shift && (
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        )}
      </div>
    </div>
  ));

  const workElements = expData.work.map((element) => (
    <div key={element.id} className="qualification__content">
      <div className="qualification__data">
        {element.shift && <div></div>}

        {element.shift && (
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        )}
        <div>
          <h3 className="qualification__title">{element.title}</h3>
          <span className="qualification__subtitle">{element.institute}</span>
          <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i>
            {element.duration}
          </div>
        </div>

        {!element.shift && (
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            id="edu"
            onClick={handleClick}
            className={`qualification__button button--flex ${
              showQualification ? "qualification__active" : ""
            }`}
          >
            <i className="uil uil-graduation-cap qualification__icon "></i>
            Education
          </div>

          <div
            id="work"
            onClick={handleClick}
            className={`qualification__button button--flex ${
              !showQualification ? "qualification__active" : ""
            }`}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>
        <div className="qualification__sections">
          {/* <!-- qualification content 1 --> */}

          {showQualification && eduElements}
          {!showQualification && workElements}
        </div>
      </div>
    </section>
  );
}
