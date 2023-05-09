import React, { useEffect } from "react";
import { HeaderSec, HeaderText, InputSec, Visit } from "./Header.styles";
import people from "../../assets/people.png";
import Ai from "../../assets/ai.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <HeaderSec id="#">
      <HeaderText>
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <InputSec>
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </InputSec>
        <Visit>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </Visit>
      </HeaderText>
      <img src={Ai} alt="Ai" />
    </HeaderSec>
  );
};

export default Header;
