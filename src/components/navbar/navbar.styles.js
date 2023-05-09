import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

export const Navbar_Main = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 5px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 2rem 2rem;
  @media (max-width: 770px) {
    padding: 2rem 1rem;
  }
`;
// export const Nav_Links = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 2rem 5rem;
// `
export const Nav_Logo = styled.div`
  max-width: 100%;
  z-index: 10000;
`;
export const Image = styled.img`
  width: 60px;
  height: 16px;
  background-position: center;
  background-size: contain;
`;
export const Nav_Items = styled.li`
  list-style: none;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Item = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  margin: 0 2rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`;
export const Nav_login = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ bg }) => (bg ? "#FFFFFF" : "bg")};
  padding: 0.7rem 2.5rem;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  z-index: 5;
  &:hover {
    background-color: ${({ bg }) => (bg ? bg : "red")};
  }
`;
//Mobile Css

export const MobileNav = styled.div`
  position: relative;
  max-width: 100%;
`;
export const MobileLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  /*position: absolute;
top: 50px;
right: 10px; */
  border-radius: 10px;
  background-color: #002853;
  max-height: 100vh;

  height: 320px;
  position: absolute;
  top: 0px;
  right: 40px;
  z-index: 1000;
  a {
    margin: 1rem 0;
  }
`;
export const HamBurg = styled(AiOutlineMenu)`
  font-size: 27px;
  @media (min-width: 1000px) {
    display: none;
  }
`;
export const Close = styled(AiOutlineClose)`
  font-size: 27px;
`;
