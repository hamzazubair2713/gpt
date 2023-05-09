import styled from "styled-components";

export const GptSection = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  background: var(--color-footer);

/* ff 3.6+ */
background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

/* safari 5.1+,chrome 10+ */
background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

/* opera 11.10+ */
background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

/* ie 10+ */
background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

/* global 92%+ browsers support */
background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const GptText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  p {
    width: 70%;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    p {
      width: 100%;
    }
  }
`;
export const TagLine = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;

  h1 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    width: 60%;
  }
  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8a71;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    h1 {
      margin-top: 0.5rem;
      width: 100%;
      font-size: 24px;
      line-height: 35px;
    }
  }
`;

export const Gpt3CardSec = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.5rem;
  @media screen and (max-width: 690px ) {
    flex-direction: column;
  }
`;
export const CardGpt3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 330px;

  p {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;
  }
`;
