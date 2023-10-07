import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Horizon Voyage</h1>
          <p>Choisissez votre destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projet</h4>
          <a href="/">Journal de modifications</a>
          <a href="/">Statut</a>
          <a href="/">Licence</a>
          <a href="/">Versions</a>
        </div>
        <div>
          <h4>Communauté</h4>
          <a href="/">Github</a>
          <a href="/">Twitter</a>
          <a href="/">Projet</a>
          <a href="/">Problèmes</a>
        </div>
        <div>
          <h4>Aide</h4>
          <a href="/">Support</a>
          <a href="/">Dépannage</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h4>Autres</h4>
          <a href="/">Conditions d'utilisation</a>
          <a href="/">Politiques</a>
          <a href="/">Confidentialité</a>
          <a href="/">Licence</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
