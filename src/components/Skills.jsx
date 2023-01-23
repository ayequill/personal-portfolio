import { useState } from "react";
import { skillsData } from "../skillData";

export default function Skills() {
  // const [skill, setSkill] = useState(skillsData);

  // function expandSkill(id) {
  //   setSkill((prevState) => {
  //     return prevState.map((skill) => {
  //       return skill.id === id
  //         ? { ...skill, isOpened: !skill.isOpened }
  //         : skill;
  //     });
  //   });
  // }

  // const elements = skill.map((skill) => (
  //   <div key={skill.id} className="skills__content">
  //     <div className="skills__header" onClick={() => expandSkill(skill.id)}>
  //       <i className="uil uil-brackets-curly skills__icon"></i>

  //       <div>
  //         <h1 className="skills__title">{skill.title}</h1>
  //         <span className="skills__subtitle">{skill.exp}</span>
  //       </div>
  //       <i
  //         className={`uil uil-angle-down skills__arrow ${
  //           skill.isOpened ? "skills__open" : ""
  //         }`}
  //       ></i>
  //     </div>

  //     {skill.isOpened && (
  //       <div className="skills__list grid">
  //         <div className="skills__data">
  //           <div className="skills__titles">
  //             <h3 className="skills__name">{skill.skills[0].skillName}</h3>
  //             <span className="skills__number">{skill.skills[0].exp}</span>
  //           </div>
  //           <div className="skills__bar">
  //             <span className="skills__percentage skills__html"> </span>
  //           </div>

  //           <div className="skills__data">
  //             <div className="skills__titles">
  //               <h3 className="skills__name">{skill.skills[1].skillName}</h3>
  //               <span className="skills__number">{skill.skills[1].exp}</span>
  //             </div>
  //             <div className="skills__bar">
  //               <span className="skills__percentage skills__css"> </span>
  //             </div>
  //           </div>
  //           <div className="skills__data">
  //             <div className="skills__titles">
  //               <h3 className="skills__name">{skill.skills[2].skillName}</h3>
  //               <span className="skills__number">{skill.skills[2].exp}</span>
  //             </div>
  //             <div className="skills__bar">
  //               <span className="skills__percentage skills__js"> </span>
  //             </div>
  //           </div>

  //           <div className="skills__data">
  //             <div className="skills__titles">
  //               <h3 className="skills__name">{skill.skills[3].skillName}</h3>
  //               <span className="skills__number">{skill.skills[3].exp}</span>
  //             </div>
  //             <div className="skills__bar">
  //               <span className="skills__percentage skills__react"> </span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // ));

  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tech Stack</span>

      <div className="skills__container container grid">
        {/* Skill elements go here */}
        {/* {elements} */}
        <ul className="skill__stacks-list">
          <li className="stack">
            <i class="devicon-html5-plain colored"></i>
            <p className="skill__name">HTML 5</p>
          </li>
          <li className="stack">
            <i class="devicon-css3-plain colored"></i>
            <p className="skill__name">CSS3</p>

          </li>
          <li className="stack">
            <i class="devicon-javascript-plain colored"></i>
            <p className="skill__name">JavaScript</p>

          </li>
          <li className="stack">
            <i class="devicon-sass-original colored"></i>
            <p className="skill__name">SASS</p>

          </li>
          <li className="stack">
            <i class="devicon-react-original colored"></i>
            <p className="skill__name">React</p>

          </li>
          <li className="stack">
            <i class="devicon-tailwindcss-original-wordmark colored"></i>
            <p className="skill__name">Tailwind CSS</p>

          </li>
          <li className="stack">
            <i class="devicon-gulp-plain colored"></i>
            <p className="skill__name">GULP</p>


          </li>
          <li className="stack">

          <i class="devicon-git-plain-wordmark colored"></i>
          <p className="skill__name">git</p>

          
          </li>
          <li className="stack">

          <i class="devicon-github-original colored"></i>
          <p className="skill__name">GitHub</p>
          
          </li>
          <li className="stack">

          <i class="devicon-npm-original-wordmark colored"></i>
          <p className="skill__name">npm</p>
          
          </li>
        </ul>
      </div>
    </section>
  );
}
