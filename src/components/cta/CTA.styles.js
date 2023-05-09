import styled from "styled-components";
export const CTASec = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;

  @media screen and (max-width: 1026px) {
    flex-direction: column;
    justify-content: center;
    
  }
  
`;
export const CTAText = styled.div`
  padding: 1rem 2rem;
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    color: #0e0e0e;
  }
  h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 45px;
    color: #000000;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
  p {
    font-size: 10px;
    line-height: 20px;
  }
  h1 {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Button =styled.div`
padding: 0.8rem 1.3rem;
background: #000000;
border-radius: 40px;
color: white;
cursor: pointer;
@media screen and (max-width: 1000px) {
    padding: 0.5rem 1rem;
}

`
