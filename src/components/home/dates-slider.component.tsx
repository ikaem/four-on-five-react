// src\components\home\dates-slider.component.tsx

import styled from "styled-components";

import { COLORS } from "../../styles/global.style";

const DatesSlider: React.FC = () => {
  return (
    <DatesSliderStyled
      COLORS={COLORS}
      className="dates-container_upcoming-dates-container"
    >
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
    </DatesSliderStyled>
  );
};

export default DatesSlider;

const DatesSliderStyled = styled.div<{ COLORS: typeof COLORS }>`
  max-width: 22rem;
  min-width: 17rem;

  display: none;
  align-items: center;
  justify-content: space-between;

  .upcoming-dates-container_date-move-button {
    flex: 1;
  }

  .upcoming-dates-container_upcoming-dates-list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 5;
  }

  @media (min-width: 40rem) {
    display: flex;
  }
`;
