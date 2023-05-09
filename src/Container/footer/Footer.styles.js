import styled from "styled-components";

export const FooterSec = styled.div`
  background: #031b34;
  margin-top: 2rem;
  padding: 4rem 1rem 8px 1rem;
  text-align: center;

  h1 {
    margin: 1rem 0 2rem 0;
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    text-align: center;
    letter-spacing: -0.04em;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  button {
    border: 1px solid #ffffff;
    background: none;
    font-size: 18px;
    line-height: 21px;
    color: white;
    padding: 0.7rem 1rem;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    background: none;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ff4820;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 50%;
      transform-origin: 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    &:hover::before {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    &:focus::before {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }

    &:active::before {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
  }
  p {
    font-size: 12px;
    line-height: 14px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    margin-top: 2rem;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;
export const FooterItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10rem;
  margin: 3rem 0;
  h4 {
    color: white;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    width: 60%;
    font-size: 12px;
    line-height: 14px;
  }
`;
export const FooterClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const FooterFreelancer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const Footerlinks = styled.p`
  padding: 6px 0;
`;
