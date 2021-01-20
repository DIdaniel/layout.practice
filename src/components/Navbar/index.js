import React from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Patrick's Fund</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="service">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="sign-up">Sign Up</NavLink>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;