import React from "react";
import styled from "styled-components";
import { Blog, FeatureC, Footer, Header, Possibilty, Gpt3 } from "./Container";
import { Artical, Feature, Brand, CTA, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <Main>
      <Background>
        <Navbar />
        <Header />
      </Background>
      <Brand />
      <Gpt3 />
      <Feature />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </Main>
  );
};

export default App;

const Main = styled.div``;
const Background = styled.div`
  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
`;
