import React, { useEffect } from "react";

import { FeatureC } from "..";
import {
  CardGpt3,
  Gpt3CardSec,
  GptSection,
  GptText,
  TagLine,
} from "./Gpt3.styles";
import Data from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";

const Gpt3 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <GptSection id="whatisGpt">
      <GptText>
        <FeatureC value={"What is GPT-3"} />

        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </GptText>
      <TagLine>
        <h6>Explore The Library</h6>
        <h1>The possibilities are beyond your imagination</h1>
      </TagLine>
      <Gpt3CardSec>
        {Data.map((elem, ind) => (
          <CardGpt3 key={ind}>
            <FeatureC value={elem.titel} />
            <p>{elem.body}</p>
          </CardGpt3>
        ))}
      </Gpt3CardSec>
    </GptSection>
  );
};

export default Gpt3;
