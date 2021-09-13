import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import logo from "../../images/piston_logo.svg";

const Header = tw.header`
  flex justify-center items-center
  max-w-screen-xl mx-auto
`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-64 mr-3`}
  }
`;

const Navbar = () => {
  return (
    <Header className="header-light">
      <LogoLink href="/">
        <img src={logo} alt="logo" />
      </LogoLink>
    </Header>
  );
};

export default Navbar;
