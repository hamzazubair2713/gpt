import React, { useState, useEffect } from "react";
import {
  Navbar_Main,
  Nav_Links,
  Nav_Logo,
  Nav_Items,
  Item,
  Nav_login,
  Button,
  MobileNav,
  MobileLink,
  HamBurg,
  Close,
} from "./navbar.styles";

import logo from "../../assets/logo.svg";
const Menu = () => (
  <>
    <Item activeClass="active" smooth spy to="home">
      Home
    </Item>
    <Item activeClass="active" smooth spy to="whatisGpt">
      What is GPT?
    </Item>
    <Item activeClass="active" smooth spy to="librarys">
      Open AI
    </Item>
    <Item activeClass="active" smooth spy to="possibilities">
      Case Studies
    </Item>

    <Item activeClass="active" smooth spy to="blog">
      Librarys
    </Item>
  </>
);

const Navbar = () => {
  const handelMenu = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    console.log("Use Effect run");
  }, []);

  const [toggle, setToggle] = useState(false);
  return (
    <Navbar_Main>
      <Nav_Logo>
        <img src={logo} alt="" />
      </Nav_Logo>
      <Nav_Items>
        <Menu />
      </Nav_Items>
      <Nav_login>
        <Button bg="#FF4820;">Sign in</Button>
        <Button bg="#FF4820;">Sign Up</Button>
      </Nav_login>
      <MobileNav>
        {toggle ? (
          <Close color="white" size={27} onClick={handelMenu} />
        ) : (
          <HamBurg color="white" size={27} onClick={handelMenu} />
        )}
        {toggle && (
          <MobileLink className="scale-up-center">
            <Menu />
          </MobileLink>
        )}
      </MobileNav>
    </Navbar_Main>
  );
};

export default Navbar;
