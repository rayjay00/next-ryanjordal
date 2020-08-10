import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 860px;
  margin: 0 auto;
  * {
    font-family: "Mulish", sans-serif;
  }

  nav {
    padding: 0;
  }
`;

const StyledHeaderLink = styled.a`
  font-family: "Mulish", sans-serif;
  font-size: 2.5rem;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <StyledHeaderLink href="/" passHref>
          Ryan Jordal
        </StyledHeaderLink>
      </nav>
    </StyledHeader>
  );
}
