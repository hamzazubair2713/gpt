import React from "react";
import Data from "./imports"
import { Brands } from "./brand.styles";
const Brand = () => {
  return (
    <Brands>
    {
      Data.map((elem ,ind)=>(
        <img src={elem} key={ind} />
      ))
    }
    </Brands>
  );
};

export default Brand;
