// src\pages\home.page.tsx

import React from "react";
import styled from "styled-components";
import { gql, useLazyQuery } from "@apollo/client";

import dayjs from "dayjs";

import { COLORS } from "../styles/global.style";
import MatchesContainer from "../components/home/matches-container.component";

interface MatchBriefI {
  id: string;
}

export interface MatchesDataI {
  getMyMatches: MatchBriefI[];
}

export const GET_MY_MATCHES = gql`
  query GetMyMatches($myId: String!) {
    getMyMatches(myId: $myId) {
      id
      # title
      # timeStart
      # timeEnd
      # location {
      #   lat
      #   lon
      # }
      # confirmedPlayers
      # maxPlayers
      # organizer {
      #   userId
      #   username
      #   teamId
      #   teamName
      # }
    }
  }
`;

const Home: React.FC = () => {
  const today = dayjs().toISOString();
  console.log("todaaaay", today);

  const tomorrow = dayjs().add(1, "day").toISOString();
  console.log("tomorrow", tomorrow);

  // const current;

  // const [getMyMatches, { loading, error, data }] = useLazyQuery<MatchesDataI>(
  //   GET_MY_MATCHES,
  //   {
  //     variables: {
  //       myId: "1",
  //     },
  //   }
  // );

  // console.log("data here", data);

  // React.useEffect(() => {
  //   getMyMatches();

  //   // TODO: dependency array will hold date value so that it refetches when date changes
  //   // TODO: which means we have to send the date as an argument as well
  // }, []);

  return (
    <MainStyled COLORS={COLORS} className="main-content">
      <MatchesContainer isMyMatches />
      {/* <MatchesContainer /> */}
    </MainStyled>
  );
};

export default Home;

const MainStyled = styled.main<{ COLORS: typeof COLORS }>``;
