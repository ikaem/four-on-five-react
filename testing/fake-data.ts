// testing\fake-data.ts

import { GET_MY_MATCHES } from "../src/pages/home.page";

export const mocks = [
  {
    request: {
      query: GET_MY_MATCHES,
      variables: {
        myId: "1",
      },
    },
    result: {
      data: {
        getMyMatches: [
          {
            id: "1",
            // title: "Some match 1",
            // timeStart: "2021-10-05T14:48:00.000Z",
            // timeEnd: "2021-10-05T16:48:00.000Z",
            // location: { lat: 41.40338, lon: 2.17403 },
            // confirmedPlayers: 8,
            // maxPlayers: 10,
            // organizer: {
            //   userId: "2",
            //   username: "Jonas",
            //   teamId: "1",
            //   teamName: "The Big Team",
            // },
          },
          {
            id: "2",
            // title: "Some match 2",
            // timeStart: "2021-10-05T14:48:00.000Z",
            // timeEnd: "2021-10-05T16:48:00.000Z",
            // location: { lat: 41.40338, lon: 2.17403 },
            // confirmedPlayers: 8,
            // maxPlayers: 10,
            // organizer: {
            //   userId: "2",
            //   username: "Jonas",
            //   teamId: "1",
            //   teamName: "The Big Team",
            // },
          },
          {
            id: "3",
            // title: "Some match 3",
            // timeStart: "2021-10-05T14:48:00.000Z",
            // timeEnd: "2021-10-05T16:48:00.000Z",
            // location: { lat: 41.40338, lon: 2.17403 },
            // confirmedPlayers: 8,
            // maxPlayers: 10,
            // organizer: {
            //   userId: "2",
            //   username: "Jonas",
            //   teamId: "1",
            //   teamName: "The Big Team",
            // },
          },
          {
            id: "4",
            //   title: "Some match 4",
            //   timeStart: "2021-10-05T14:48:00.000Z",
            //   timeEnd: "2021-10-05T16:48:00.000Z",
            //   location: { lat: 41.40338, lon: 2.17403 },
            //   confirmedPlayers: 8,
            //   maxPlayers: 10,
            //   organizer: {
            //     userId: "2",
            //     username: "Jonas",
            //     teamId: "1",
            //     teamName: "The Big Team",
            //   },
          },
        ],
      },
    },
  },
];
