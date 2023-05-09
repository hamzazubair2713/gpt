import React from "react";
import {
  CardGpt3,
  FeatureSec,
  FeatureText,
  FeatureWrap,
  Gpt3CardSec,
} from "./feature.styles";
import { Data } from "./Data";
import { FeatureC } from "../../Container";
import { FeatureBar } from "../../Container/feature/FeauterC.styles";

const Feature = () => {
  return (
    <FeatureSec id="librarys" >
      <FeatureText>
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </FeatureText>
      <FeatureWrap>
        {Data.map((elem, ind) => (
          <Gpt3CardSec>
            <CardGpt3>
              <FeatureC value={elem.title} key={ind} />
              <p>{elem.body}</p>
            </CardGpt3>
          </Gpt3CardSec>
        ))}
      </FeatureWrap>
    </FeatureSec>
  );
};

export default Feature;
