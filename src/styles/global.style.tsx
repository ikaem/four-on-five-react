// src\styles\global.style.tsx

import { createGlobalStyle } from "styled-components";

export const COLORS = {
  darkBackground: "#3D3D49",
  lessDarkBackground: "#474A4B",
  barelyVisibleBackground: "#EEEEEE",
  lightBackground: "#F8F8F8",
  lightText: "#CFCFCF",
  touchedText: "#C4C4C4",
  ashText: "#6C7074",
  darkText: "#43474A",
  redBib: "#F5502A",
  greenBib: "#5AC19B",
  paleYellow: "#FFECBB",
};

const GlobalStyle = createGlobalStyle<{ COLORS: typeof COLORS }>`

@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-300-n.woff2")}) format("woff2");
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-400-n.woff2")}) format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-700-n.woff2")}) format("woff2");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-900-n.woff2")}) format("woff2");
  font-weight: 900;
  font-display: swap;
}


/* reset */
*, *:after, *:before {
    box-sizing: border-box
}

html,
body,
#root {
  height: 100%;
}

body {
  overflow-x: hidden;
  background-color: ${({ COLORS }) => COLORS.darkBackground};

}

body,
h1,
h2,
h3, 
h4, 
ul,
a,
p {
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: none;
  list-style-type: none
}

input,
textarea,
select,
option,
button {
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

input:focus,
textarea:focus,
select:focus,
option:focus,
button:focus {
  outline: none;

}

img {
  display: block;
}

a {
  color: ${({ COLORS }) => COLORS.lightText};

  &:hover {
    color: ${({ COLORS }) => COLORS.paleYellow};
  }
}
  
/* fonts */
html {
  font-family: Lato, Verdana, Tahoma, sans-serif;
  font-size: 100%;
  /* font-weight: 700; */
}

h1, h2, h3, h4, h5 {
  font-size: 100%;
}

`;

export default GlobalStyle;

/* 
// import Lato300 from "../assets/fonts/lato/lato-300-n.woff2";
// import Lato400 from "../assets/fonts/lato/lato-400-n.woff2";
// import Lato700 from "../assets/fonts/lato/lato-700-n.woff2";
// import Lato900 from "../assets/fonts/lato/lato-900-n.woff2";

*/

/* @font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-400-n.woff2")}) format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-700-n.woff2")}) format("woff2");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-900-n.woff2")}) format("woff2");
  font-weight: 900;
  font-display: swap;
} */
