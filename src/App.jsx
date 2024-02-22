/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

function App() {
  const skillRef = useRef();
  const projetRef = useRef();
  const contactRef = useRef();

  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjet = () => {
    projetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <main className="main">
        <Navbar
          onSkillClick={scrollToSkill}
          onProjetsClick={scrollToProjet}
          onContactClick={scrollToContact}
        />
        <section>
          <div className="presentation">
            <p>
              Bonjour, je m'appelle Hipticem MAAMIR, développeur web junior et
              créatrice de site internet.
            </p>
            <p>Je me suis formée à la Wild Code School.</p>
            <p>
              Passionnée par le web, j’ai à cœur d’accompagner des entreprises
              ou des indépendants dans le développement de leurs projets
              numériques et de les aider à accroître leur visibilité sur
              internet.
            </p>
          </div>
        </section>
        <section ref={projetRef}>
          <Projets />
        </section>
        <section ref={skillRef}>
          <Skill />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
