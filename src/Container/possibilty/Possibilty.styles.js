import styled from "styled-components";

export const PossibiltySec = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;

  img {
    width: 45%;
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;

    img {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
        
    align-items: center;
    
  }
`;
export const PossibiltyText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
  h2 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
      #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  @media screen and (max-width: 800px) {
    width: 85%;
    h2 {
      font-size: 27px;
      line-height: 45px;
    }
  }
`;
export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: ${({ color }) => (color ? color : "#71E5FF")};
  margin: 1rem 0;
  @media screen and (max-width: 800px) {
    width: 90%;

    font-size: 10px;
    line-height: 20px;
  }
`;
