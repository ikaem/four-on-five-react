// src\pages\home.page.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

import DateWeather from "../components/shared/date-weather.component";
import SectionHeader from "../components/UI/section-header.component";

import { ReactComponent as CaretIcon } from "../assets/images/icons/caret.svg";
import { ReactComponent as CalendarIcon } from "../assets/images/icons/calendar.svg";
import { ReactComponent as SunnyIcon } from "../assets/images/weather-icons/sunny.svg";
import { ReactComponent as TimeIcon } from "../assets/images/icons/time.svg";
import { ReactComponent as LocationIcon } from "../assets/images/icons/location.svg";
import { ReactComponent as PersonIcon } from "../assets/images/icons/person.svg";
import { ReactComponent as ConfirmedIcon } from "../assets/images/icons/confirmed.svg";

import { COLORS } from "../styles/global.style";

const Home: React.FC = () => {
  return (
    <MainStyled COLORS={COLORS} className="main-content">
      <section className="main-content_matches-section">
        {/* <SectionHeader /> */}

        {/* just temporary here, so can style it */}
        <header className="matches-section_header">
          <h2>My Matches</h2>
          <span>(6 upcoming)</span>
          <CaretIcon />
        </header>

        <div className="matches-section_dates-container">
          <button className="dates-container_now-day active">Today</button>
          <button className="dates-container_now-day">Tomorrow</button>

          <div className="dates-container_upcoming-dates-container">
            <button className="upcoming-dates-container_date-move-button prev">
              &lt;
            </button>
            <ul className="upcoming-dates-container_upcoming-dates-list">
              <li className="upcoming-dates_date">
                <button>
                  16 <br /> Dec
                </button>
              </li>
              <li className="upcoming-dates_date">
                <button>
                  16 <br /> Dec
                </button>
              </li>
              <li className="upcoming-dates_date">
                <button>
                  17 <br /> Dec
                </button>
              </li>
              <li className="upcoming-dates_date">
                <button>
                  18 <br /> Dec
                </button>
              </li>
            </ul>
            <button className="upcoming-dates-container_date-move-button next">
              &gt;
            </button>
          </div>
          <div className="dates-container_calendar-picker">
            <span className="calendar-picker_label">Pick date</span>
            <CalendarIcon className="calendar-picker_icon" />
          </div>
        </div>
        {/* Date weather component below */}
        {/* this hardcoded only for styling purposes  */}
        <div className="matches-section_selected-date-info">
          <div className="selected-date-info_full-date">
            <CalendarIcon />
            <span>Friday, 16 Dec 2020</span>
          </div>
          <div className="selected-date-info_weather-info">
            {/* <span className={`weather-info_weather-icon sun`}></span> */}
            <SunnyIcon />
            <span className="weather-info_weather-brief">16 °C, Cloudy</span>
          </div>
        </div>
        {/* end of hardcoded date weather thing... */}
        {/* <DateWeather /> */}
        <ul className="matches-section_matches-list">
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <TimeIcon />
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <LocationIcon />
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <PersonIcon />
                <span>3 free spots</span>
              </p>
            </div>
            {/* this should probably be a button component */}
            <button className="match-brief_action-button">
              <ConfirmedIcon />
              <span>Joined</span>
            </button>
          </li>
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <span>&gt;&gt;</span>
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>3 free spots</span>
              </p>
            </div>
            <button className="match-brief_action-button">
              <span>&gt;&gt;</span>
              <span>Joined</span>
            </button>
          </li>
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <span>&gt;&gt;</span>
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>3 free spots</span>
              </p>
            </div>
            <button className="match-brief_action-button">
              <span>&gt;&gt;</span>
              <span>Joined</span>
            </button>
          </li>
        </ul>
      </section>
      <section className="main-content_matches-section">
        <header className="matches-section_header">
          <h2>All Matches</h2>
          <span>(116 upcoming)</span>
          <span>&gt;</span>
        </header>

        <div className="matches-section_dates-container">
          <button className="dates-container_now-date active">Today</button>
          <button className="dates-container_now-date">Tomorrow</button>
          <ul className="dates-container_upcoming-dates">
            <li className="upcoming-dates_date">
              <button>16 Dec</button>
            </li>
            <li className="upcoming-dates_date">
              <button>16 Dec</button>
            </li>
            <li className="upcoming-dates_date">
              <button>17 Dec</button>
            </li>
            <li className="upcoming-dates_date">
              <button>18 Dec</button>
            </li>
            <li className="upcoming-dates_date">
              <button>19 Dec</button>
            </li>
          </ul>
          <div className="dates-container_calendar-picker">
            <span className="calendar-picker_label">Pick date placeholder</span>
            <button className="calendar-picker">&gt;&gt;</button>
          </div>
        </div>
        <div className="matches-section_selected-date-info">
          <div className="selected-date-info_weather-info">
            <span className="weather-info_weather-visual">&gt;&gt;</span>
            <p className="weather-info_weather-brief">16 °C, Cloudy</p>
          </div>
          <div className="selected-date-info_full-date">
            Friday, 16 December 2020
          </div>
        </div>
        <ul className="matches-section_matches-list">
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <span>&gt;&gt;</span>
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>3 free spots</span>
              </p>
            </div>
            <button className="match-brief_action-button">
              <span>&gt;&gt;</span>
              <span>Joined</span>
            </button>
          </li>
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <span>&gt;&gt;</span>
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>3 free spots</span>
              </p>
            </div>
            <button className="match-brief_action-button">
              <span>&gt;&gt;</span>
              <span>Joined</span>
            </button>
          </li>
          <li className="matches-list_match-brief">
            <div className="match-brief_info">
              <h3>Match organized at some place at some time</h3>
              <p>
                <span>&gt;&gt;</span>
                <span>15:30 - 17:00</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>Good Ole Pitch</span>
              </p>
              <p>
                <span>&gt;&gt;</span>
                <span>3 free spots</span>
              </p>
            </div>
            <button className="match-brief_action-button">
              <span>&gt;&gt;</span>
              <span>Joined</span>
            </button>
          </li>
        </ul>
      </section>
    </MainStyled>
  );
};

export default Home;

const MainStyled = styled.main<{ COLORS: typeof COLORS }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .main-content_matches-section {
    background-color: ${({ COLORS }) => COLORS.lightBackground};
    padding: 1rem;

    /* separate component for section header below */
    .matches-section_header {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;

      font-size: 0.75rem;
      color: ${({ COLORS }) => COLORS.touchedText};

      /* margin-bottom: 0.5rem; */

      h2 {
        text-transform: uppercase;
        margin-right: 1rem;
      }

      svg {
        margin-left: auto;

        cursor: pointer;

        &:hover {
          color: ${({ COLORS }) => COLORS.darkText};
        }
      }

      @media (min-width: 40rem) {
        font-size: 1rem;
        /* margin-bottom: 1rem; */
      }
    }
    /* separate component for section header above */
    /* separate component for dates container below*/
    .matches-section_dates-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      color: ${({ COLORS }) => COLORS.ashText};

      padding: 0.5rem 0;

      .dates-container_now-day {
        cursor: pointer;

        &.active {
          color: ${({ COLORS }) => COLORS.redBib};
          font-weight: 700;
        }

        &:hover {
          color: ${({ COLORS }) => COLORS.greenBib};
        }

        &:last-of-type {
          margin-right: auto;
          margin-left: 1rem;
        }
      }

      // upcoming dates components below
      .dates-container_upcoming-dates-container {
        max-width: 22rem;
        min-width: 17rem;

        /* display: flex; */
        display: none;
        align-items: center;
        justify-content: space-between;

        /* display: none; */

        .upcoming-dates-container_date-move-button {
          flex: 1;
        }

        .upcoming-dates-container_upcoming-dates-list {
          display: flex;
          align-items: center;
          justify-content: space-between;

          flex: 5;
        }
        // media for sliding dates
        @media (min-width: 40rem) {
          display: flex;
        }
      }
      /* upcoming dates component above */

      /* seaprate component for calendar picker */

      .dates-container_calendar-picker {
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;

        margin-left: 1rem;

        span {
          margin-right: 0.5rem;
        }

        &:hover {
          color: ${({ COLORS }) => COLORS.greenBib};
        }
      }

      @media (min-width: 40rem) {
        padding: 1rem 0;
      }
    }
    /* separate component for dates container above*/

    /* media for entire matches section */
    @media (min-width: 40rem) {
      padding: 1rem 2rem 2rem;
    }
  }
  /* date weather component below*/
  .matches-section_selected-date-info {
    display: flex;
    align-items: center;

    font-size: 0.75rem;

    > div {
      display: flex;
      align-items: center;
    }

    .selected-date-info_full-date {
      color: ${({ COLORS }) => COLORS.redBib};
      /* font-weight: 700; */

      margin-right: 2rem;

      svg {
        height: 0.75rem;
        width: auto;

        margin-right: 0.5rem;
      }
    }

    .selected-date-info_weather-info {
      color: ${({ COLORS }) => COLORS.ashText};

      svg {
        width: 1rem;
        height: 1rem;

        margin-right: 0.5rem;
      }
    }
  }
  /* date weather component above*/
  /* here is the match list component */

  .matches-section_matches-list {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    /* match brief component */

    .matches-list_match-brief {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;

      .match-brief_info {
        padding: 1rem;
        background-color: ${({ COLORS }) => COLORS.darkBackground};
        color: white;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.25rem 3rem;

        h3 {
          /* color: ${({ COLORS }) => COLORS.lightText}; */
          font-size: 1.25rem;
          grid-column: span 3;
          padding-bottom: 0.75rem;
        }

        p {
          grid-column: span 3;

          display: flex;
          align-items: center;

          span {
            color: ${({ COLORS }) => COLORS.touchedText};
          }

          svg {
            margin-right: 0.5rem;
            height: 1rem;
            width: 1rem;
          }
        }
      }
      // this will probably be a button component
      .match-brief_action-button {
        background-color: ${({ COLORS }) => COLORS.greenBib};
        padding: 1rem;
        color: ${({ COLORS }) => COLORS.paleYellow};
        font-size: 1.25rem;
        font-weight: 700;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-right: 0.5rem;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
