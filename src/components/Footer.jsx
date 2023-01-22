export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Siaw</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://facebook.com/ayequill"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://instagram.com/ayequill"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="http://twitter.com/ayequill"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Siaw. All rights reserved.</p>
      </div>
    </footer>
  );
}
