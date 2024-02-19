/* eslint-disable react/no-unescaped-entities */
import "./Projet.css";

function Projets() {
  return (
    <div className="divProjet">
      <h2 className="title">PROJECTS</h2>
      <div className="containerProjet">
        <div className="projet">
          <h2>Time News</h2>
          <p className="projetParagraphe">
            Projet : Journal permettant de consulter en ligne differents
            articles. Un systeme de messagerie est mis en place afin de prendre
            contact.
          </p>
        </div>
        <div className="projet">
          <h2>HQM Immobilier</h2>
          <p className="projetParagraphe">
            projet : Site de vente de maison de luxe. Sur cette application, il
            y a une partie utilisateur qui permet d'avoir accès à l'ensemble des
            biens. Une partie administrateur, avec une connexion et une gestion
            des annonces (ajout, modification, suppresion).
          </p>
        </div>
        <div className="projet">
          <h2>Externatic</h2>
          <p className="projetParagraphe">
            Cabinet de recrutement informatique. L'utisateur à accès aux offres.
            Pour postuler à une offre, il doit créer un identifiant. Il y a une
            partie consultant pour la gestion des offres, une partie
            administrateur pour gérer les entreprises partenaires.
          </p>
          <a
            className="visiter"
            href="https://externatic.remote-fr-3.wilders.dev/"
          >
            Clique ici pour visiter le site
          </a>
        </div>
        <div className="projet">
          <h2>Quizz challenge</h2>
          <p className="projetParagraphe">
            {" "}
            Quizz général. Exemple de quizz. Le nombre de questions depends de
            la demande du client.
          </p>
          <a
            className="visiter"
            href="https://funny-faloodeh-983ace.netlify.app/"
          >
            {" "}
            Clique ici pour visiter le site
          </a>
        </div>
        <div className="projet">
          <h2>Hackawild</h2>
          <p className="projetParagraphe">
            Projet en groupe. L'utilisateur doit remplire un questionnaire. S'il
            a été sage le calendrier de l'avent se débloque. S'il n'a pas été
            sage, il doit jouer et ne pas perdre pour avoir accès au calendrier
            de l'avent.
          </p>
          <a className="visiter" href="https://github.com/valihna/HackaWild">
            Clique ici pour en savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projets;
