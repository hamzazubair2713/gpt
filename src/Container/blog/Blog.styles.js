import styled from "styled-components";
export const BlogSec = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BlogText = styled.div`
  width: 70%;
  margin: 1rem 0;

  

  h1 {
    font-weight: 800;
    font-size: 50px;
    line-height: 75px;
    letter-spacing: -0.04em;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    h1{
        font-size: 30px;
    line-height: 45px;
    }
  }
 
`;
export const BlogCardMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 2.5rem;
  
`;
export const BlogCard = styled.div`
  img {
    width: 250px;
    height: 130px;
  }
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-10px);
  }
  
`;
export const CardText = styled.div`
width: 250px;
padding: 0.5rem;
background: #042C54;
p {
    font-weight: 800;
    font-size: 15px;
    line-height: 30px;
    color: #ffffff;
  }
  a {
    font-weight: 700;
    font-size: 11.649px;
    line-height: 35px;
    color: #ffffff;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    &:hover{
        opacity: 1;
    }
  }
`

