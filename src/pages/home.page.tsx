// src\pages\home.page.tsx

import React from "react";
import styled from "styled-components";
import { gql, useLazyQuery } from "@apollo/client";

import { COLORS } from "../styles/global.style";
import MatchesContainer from "../components/home/matches-container.component";

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
  const [getMyMatches, { loading, error, data }] = useLazyQuery(
    GET_MY_MATCHES,
    {
      variables: {
        myId: "1",
      },
    }
  );

  console.log("data here", data);
  console.log("loading here", loading);
  console.log("error here", error);

  React.useEffect(() => {
    getMyMatches();

      // TODO: dependency array will hold date value so that it refetches when date changes
      // TODO: which means we have to send the date as an argument as well
  }, []);

  return (
    <MainStyled COLORS={COLORS} className="main-content">
      <MatchesContainer myMatches />
      <MatchesContainer />
    </MainStyled>
  );
};

export default Home;

const MainStyled = styled.main<{ COLORS: typeof COLORS }>``;
