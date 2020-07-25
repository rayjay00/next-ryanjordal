import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  transition: box-shadow 0.35s ease;
  box-shadow: 0 5px 10px rgba(100, 110, 140, 0.1), 0 5px 10px lightgrey;
  &:hover {
    box-shadow: 0 10px 25px rgba(100, 110, 140, 0.1), 0 8px 15px lightgrey;
  }
  &:active {
    transition: none;
    box-shadow: 0 5px 10px rgba(100, 110, 140, 0.1), 0 5px 10px lightgrey;
  }
  span {
    flex: 0.75;
  }
  svg {
    flex: 0.25;
    margin-left: 0.25rem;
  }
`;

export default function IconLink({ href, passHref, icon: Icon, text }) {
  return (
    <StyledLink href={href} passHref={passHref}>
      <span>{text}</span>
      {Icon && <Icon />}
    </StyledLink>
  );
}

IconLink.defaultProps = {
  passHref: false,
};
