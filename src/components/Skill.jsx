import "./Skill.css";

function Skill() {
  return (
    <div className="containerDiv">
      <h2 className="title">SKILLS</h2>
      <div className="containerSkill">
        <div className="oneSkill">
          <ul className="ul">Design</ul>
          <div>
            <li>Figma</li>
          </div>
        </div>
        <div className="oneSkill">
          <ul className="ul">Backend</ul>
          <div>
            <li>SQL</li>
            <li>Node JS</li>
          </div>
        </div>
        <div className="oneSkill">
          <ul className="ul">Frontend</ul>
          <div>
            <li>React</li>
            <li>Java Script</li>
            <li>Html</li>
            <li>Css</li>
          </div>
        </div>
        <div className="oneSkill">
          <ul className="ul">Others</ul>
          <div>
            <li>Github & git</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
