// src\components\layout\layout.component.tsx

import styled from "styled-components";

import Header from "./header.component";
import ProfileBar from "./profile-bar.component";
import Footer from "./footer.component";
import GlobalStyle from "../../styles/global.style";

import { COLORS } from "../../styles/global.style";

import Lato from "../../assets/fonts/lato/lato-300-n.woff2";

const Lato2 = import("../../assets/fonts/lato/lato-300-n.woff2");

const Layout: React.FC = ({ children }) => {
  // console.log(Lato);
  // Lato2.then(console.log);
  // console.log(require("../../assets/fonts/lato/lato-300-n.woff2"));

  /* 
  /static/media/lato-300-n.dd124df8.woff2

  Module {default: "/static/media/lato-300-n.dd124df8.woff2", __esModule: true, Symbol(Symbol.toStringTag): "Module"}

  Module {default: "/static/media/l
  */
  return (
    <LayoutStyled>
      {/* <GlobalFonts /> */}
      <GlobalStyle COLORS={COLORS} />
      <Header />
      <ProfileBar />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
  width: 100%;

  /* padding: 1rem; */

  main {
    width: 100%;

    max-width: 1160px;
    margin: 0 auto;
  }

  footer {
    margin-top: auto;
  }

  @media (min-width: 40rem) {
    /* padding: 2rem; */
  }
`;
