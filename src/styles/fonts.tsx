import { createGlobalStyle } from "styled-components";

/* import Lato300 from "../assets/fonts/lato/lato-300-n.woff2";
import Lato400 from "../assets/fonts/lato/lato-400-n.woff2";
import Lato700 from "../assets/fonts/lato/lato-700-n.woff2";
import Lato900 from "../assets/fonts/lato/lato-900-n.woff2"; */


const GlobalFonts = createGlobalStyle`
/* @font-face {
  font-family: "Lato";
  src: url(${require("../assets/fonts/lato/lato-300-n.woff2")}) format("woff2");
  font-weight: 300;
  font-display: swap;
} */

`;

export default GlobalFonts;

/* @font-face {
  font-family: "Lato";
  src: url(${Lato400}) format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${Lato700}) format("woff2");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Lato";
  src: url(${Lato900}) format("woff2");
  font-weight: 900;
  font-display: swap;
} */
