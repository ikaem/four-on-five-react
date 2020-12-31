// src\components\layout\profile-bar.component.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as TeamsIcon } from "../../assets/images/icons/teams.svg";
import { ReactComponent as AddIcon } from "../../assets/images/icons/add.svg";

import { COLORS } from "../../styles/global.style";

const ProfileBar: React.FC = () => {
  return (
    <ProfileBarStyled COLORS={COLORS} className="main-content_profile-bar">
      <div className="profile-bar_avatar-container">
        <img
          src="https://images.unsplash.com/photo-1607710577791-a31393e17748?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=51&ixlib=rb-1.2.1&q=80&w=50"
          alt="Profile"
        />
      </div>
      <div className="profile-bar_user-brief">
        <strong>Karlo</strong> <span>of</span> <strong>The New Team</strong>
      </div>
      <nav className="profile-bar_profile-nav">
        <ul className="profile-nav_nav-options">
          <li className="profile-nav_nav-option">
            <Link to="#">
              <TeamsIcon />
              <span className="nav-option_label">My teams</span>
            </Link>
          </li>
          <li className="profile-nav_nav-option">
            <Link to="#">
              <AddIcon />
              <span className="nav-option_label">Create a match</span>
            </Link>
          </li>
        </ul>
      </nav>
    </ProfileBarStyled>
  );
};

export default ProfileBar;

const ProfileBarStyled = styled.section<{ COLORS: typeof COLORS }>`
  display: flex;
  align-items: center;

  padding: 1rem;
  width: 100%;

  max-width: 1160px;
  margin: 0 auto;

  background-color: ${({ COLORS }) => COLORS.lessDarkBackground};

  a {
    &:hover * {
      color: ${({ COLORS }) => COLORS.paleYellow};
    }
  }

  .profile-bar_avatar-container {
    width: 2.5rem;
    height: 2.5rem;

    margin-right: 1rem;

    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }

  .profile-bar_user-brief {
    font-size: 1rem;
    color: ${({ COLORS }) => COLORS.lightText};

    display: none;

    strong:last-child {
      text-transform: uppercase;
    }
  }

  .profile-bar_profile-nav {
    margin-left: auto;

    .profile-nav_nav-options {
      display: flex;

      .profile-nav_nav-option:first-child {
        margin-right: 2rem;

        a {
          display: flex;
          align-items: center;

          .nav-option_label {
            display: none;
            margin-left: 0.5rem;
          }
        }
      }

      .profile-nav_nav-option:last-child {
        a {
          display: flex;
          align-items: center;

          svg {
            color: ${({ COLORS }) => COLORS.redBib};
          }

          .nav-option_label {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
  @media (min-width: 40rem) {
    padding: 1rem 2rem;

    .profile-bar_user-brief {
      display: block;
    }

    .profile-bar_profile-nav {
      .profile-nav_nav-options {
        .profile-nav_nav-option:first-child {
          a {
            .nav-option_label {
              display: inline-block;
            }
          }
        }
      }
    }
  }
`;
