// src\components\header.component.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoHorizontal } from "../../assets/images/logo/logo-horizontal.svg";
import { COLORS } from "../../styles/global.style";

const Header: React.FC = () => {
  return (
    <HeaderStyled COLORS={COLORS} className="main-header">
      <div>
        <div className="main-header_logo-container">
          <LogoHorizontal className="test" fill="red" />
        </div>
        <nav className="main-header_header-nav">
          <ul className="header-nav_options">
            <li className="header-nav__option">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav__option">
              <Link to="/match">Match</Link>
            </li>
            <li className="header-nav__option">
              <Link to="edit-match">Edit match</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header<{ COLORS: typeof COLORS }>`
  > div {
    padding: 1rem ;

    display: flex;
    flex-direction: column;

    width: 100%;

    max-width: 1160px;
    margin: 0 auto;

    .header-nav_options {
      display: flex;

      > li {
        margin-right: 2rem;

        &:first-child {
          margin-right: auto;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @media (min-width: 40rem) {
    > div {
      padding: 2rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .header-nav_options {
        > li {
          &:first-child {
            margin-right: 2rem;
          }
        }
      }
    }
  }
`;
