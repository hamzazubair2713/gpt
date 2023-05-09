import React, { useEffect } from "react";
import { Paragraph, PossibiltySec, PossibiltyText } from "./Possibilty.styles";
import PossibiltyImg from "../../assets/possibility.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Possibilty = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <PossibiltySec id="possibilities">
      <PossibiltyText>
        <Paragraph>Request Early Access to Get Started</Paragraph>
        <h2>The possibilities are beyond your imagination</h2>
        <Paragraph color="#81AFDD">
          {" "}
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Paragraph>
        <Paragraph color="#FF8A71">
          Request Early Access to Get Started
        </Paragraph>
      </PossibiltyText>
      <img src={PossibiltyImg} alt="Posibilty" data-aos="fade-up-left" />
    </PossibiltySec>
  );
};

export default Possibilty;
