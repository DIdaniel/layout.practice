import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: #fff;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  .active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavBtnLink = styled(LinkR)`
  display; flex;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: #01bf71;
  color: #fff;
  padding: 10px 22px;
  white-space: nowrap;
  border-radius: 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
  }
`