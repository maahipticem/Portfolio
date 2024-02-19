/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({ onSkillClick, onContactClick, onProjetsClick }) {
  return (
    <div className="containerNavbar">
      <a href="#idFormulaire">
        <button className="button" type="button" onClick={onSkillClick}>
          Skills
        </button>
      </a>
      <a href="#idProjets">
        <button className="button" type="button" onClick={onProjetsClick}>
          Projects
        </button>
      </a>

      <a href="#idContact">
        <button className="button" type="button" onClick={onContactClick}>
          Contact
        </button>
      </a>
    </div>
  );
}

export default Navbar;
