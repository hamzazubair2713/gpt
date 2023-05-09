import React, { useEffect } from "react";

import { Button, CTASec, CTAText } from "./CTA.styles";
import Aos from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <CTASec>
      <CTAText>
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </CTAText>
      <Button>Get Started</Button>
    </CTASec>
  );
};

export default CTA;
