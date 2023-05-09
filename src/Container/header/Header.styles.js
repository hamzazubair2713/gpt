import styled from "styled-components";
import "../../index.css";

export const HeaderSec = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  padding: 0 4rem;
  img{
    max-width: 50%;
    background-position: center;
    background-size: contain;
  }
    @media (max-width: 1100px) {
    flex-direction: column;
    img{
        max-width: 100%;
    }
  } 
  @media (max-width: 500px) {
    img{
        display: none;
    }
  } 
 
`;
export const HeaderText = styled.div`
  text-align: left;
  /* max-width: 50%; */
  /* @media (max-width: 950px) {
    max-width: 90%;
  } */
  h1 {
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
    margin: 4rem 0 3rem 0;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #81afdd;
    margin: 3rem 0;
    max-width: 80%;
  }
  @media (max-width: 600px) {
    h1{
        font-size: 50px;
    line-height: 50px;
    }
    p{
        font-size: 16px;
    line-height: 27px;
    }
    
  } 
  @media (max-width: 400px) {
    h1{
      width: 100%;
        font-size: 40px;
    line-height: 40px;
    }
    p{
        font-size: 16px;
    line-height: 27px;
    max-width: 80%;

    }
    
  } 
  input {
    width: 70%;
    padding: 1rem;
    background: #052d56;
    border-radius: 5px 0px 0px 5px;
    border: none;
    outline: none;
    color: White;

    ::placeholder {
      color: white;
    }
  }
  button {
    padding: 0.8rem 1.5rem;
    border: none;
    background: #ff4820;
    border-radius: 0px 5px 5px 0px;
    font-weight: 600;
    font-size: 17px;
    line-height: 19px;
    color: #ffffff;
    @media (max-width: 600px) {
        padding: 0.4rem 1.5rem;
    }
  }
`;
export const InputSec = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  /* justify-content: center; */
`;

export const Visit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
  }
`;
