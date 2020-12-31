// src\components\footer.component.tsx

import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoBoxed } from "../../assets/images/logo/logo-boxed.svg";

import { COLORS } from "../../styles/global.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled COLORS={COLORS} className="main-footer">
      <div>
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
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer<{ COLORS: typeof COLORS }>`
  background-color: ${({ COLORS }) => COLORS.lessDarkBackground};

  > div {
    padding: 1rem;

    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1160px;
    margin: 0 auto;

    .footer-nav_options {
      display: flex;

      > li {
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }

  @media (min-width: 40rem) {
    > div {
      padding: 2rem 0;
    }
  }
`;
