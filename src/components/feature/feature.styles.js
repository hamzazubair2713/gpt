import styled from "styled-components";
export const FeatureSec = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const FeatureText = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  h1 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    width: 80%;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8a71;
  }
  @media screen and (max-width: 650px) {
    h1 {
      width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 24px;
      line-height: 35px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
export const FeatureWrap = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Gpt3CardSec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;
export const CardGpt3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  h2 {
    width: 150px;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  p {
    /* margin-top: 2rem; */
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    h2{
        width: 100%;
    }
  }
`;
