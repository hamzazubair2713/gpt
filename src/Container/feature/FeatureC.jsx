import React from "react";
import { FeatureBar, FeatureSec } from "./FeauterC.styles";
const Feature = ({ value }) => {
  return (
    <FeatureSec>
      <h2>{value}</h2>
      <FeatureBar />
    </FeatureSec>
  );
};

export default Feature;
