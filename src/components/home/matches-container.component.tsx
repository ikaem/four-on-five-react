// src\components\home\matches-container.component.tsx

import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import DateWeather from "../shared/date-weather.component";
import SectionHeader from "../UI/section-header.component";
import DatesSelector from "./dates-selector.component";
import MatchBrief from "./match-brief.component";

import { COLORS } from "../../styles/global.style";
import { GET_MY_MATCHES, MatchesDataI } from "../../pages/home.page";
import { useLazyQuery } from "@apollo/client";
import formatDateTime from "../../helpers/format-date-time";

interface MatchesContainerProps {
  isMyMatches?: boolean;
  // matchesData?: MatchesDataI | undefined;
}

interface MatchesTypeDataI {
  label: string;
  colors: {
    backgroundColor: string;
  };
}

const MatchesContainer: React.FC<MatchesContainerProps> = ({
  isMyMatches,
  // matchesData,
}) => {
  const matchesTypeData = React.useCallback(
    (): MatchesTypeDataI =>
      isMyMatches
        ? {
            label: "My matches",
            colors: {
              backgroundColor: COLORS.lightBackground,
            },
          }
        : {
            label: "All matches",
            colors: {
              backgroundColor: COLORS.lessDarkBackground,
            },
          },
    [isMyMatches]
  );

  // date to render and fetch matches on
  const [selectedDate, setSelectedDate] = React.useState(dayjs().toISOString());

  const [getMyMatches, { loading, error, data }] = useLazyQuery<MatchesDataI>(
    GET_MY_MATCHES,
    {
      variables: {
        myId: "1",
      },
    }
  );

  const handleSelectedDate = (dateISOString: string) =>
    setSelectedDate(dateISOString);

  React.useEffect(() => {
    getMyMatches();

    // TODO: dependency array will hold date value so that it refetches when date changes
    // TODO: which means we have to send the date as an argument as well
  }, []);

  return (
    <MatchesContainerStyled
      colors={matchesTypeData().colors}
      className="main-content_matches-section"
    >
      <SectionHeader
        label={matchesTypeData().label}
        matchesNumber={data?.getMyMatches.length || 0}
      />
      <DatesSelector handleSelectedDate={handleSelectedDate} />
      <DateWeather selectedDate={formatDateTime(selectedDate, "date")} />
      <ul className="matches-section_matches-list">
        <MatchBrief />
      </ul>
    </MatchesContainerStyled>
  );
};

export default MatchesContainer;

const MatchesContainerStyled = styled.section<{
  colors: MatchesTypeDataI["colors"];
}>`
  background-color: ${({ colors }) => colors.backgroundColor};
  padding: 1rem;

  .matches-section_matches-list {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  @media (min-width: 40rem) {
    padding: 1rem 2rem 2rem;
  }
`;
