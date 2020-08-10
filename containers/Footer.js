import React from "react";
import styled from "styled-components";

import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const StyledFooter = styled.footer`
  max-width: 860px;
  margin: 0 auto;
  margin-top: 1rem;
  * {
    font-family: "Mulish", sans-serif;
  }
`;

const StyledLink = styled.a`
  color: black;
  &:visited,
  &:hover {
    color: black;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink aria-label="Email link" href="mailto:hello@ryanjordal.me">
        <AiOutlineMail size={32} style={{ marginRight: "5px" }} />
      </StyledLink>
      <StyledLink
        aria-label="GitHub link"
        href="https://www.github.com/rayjay00"
      >
        <AiFillGithub size={32} style={{ marginRight: "5px" }} />
      </StyledLink>
      <StyledLink
        aria-label="LinkedIn link"
        href="https://www.linkedin.com/in/ryanjordal"
      >
        <AiFillLinkedin size={32} />
      </StyledLink>
    </StyledFooter>
  );
}
