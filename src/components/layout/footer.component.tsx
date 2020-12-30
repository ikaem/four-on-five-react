// src\components\footer.component.tsx

import { Link } from "react-router-dom";

import { ReactComponent as LogoBoxed } from "../../assets/images/logo/logo-boxed.svg";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer_logo-container">
        <LogoBoxed />
      </div>
      <nav className="main-footer_footer-nav">
        <ul className="footer-nav_options">
          <li className="footer-nav__option">
            <Link to="#">Facebook</Link>
          </li>
          <li className="footer-nav__option">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
