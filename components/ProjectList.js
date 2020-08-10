import Link from "next/link";
import styled from "styled-components";
import emoji from "node-emoji";

import IconLink from "./IconLink";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const StyledListItems = styled.div`
  margin: 5px 0;
  padding: 1.1rem;
  border-radius: 0.3rem;
  box-shadow: 0 3px 13px rgba(100, 110, 140, 0.1),
    0 2px 4px rgba(100, 110, 140, 0.15);
  transition: box-shadow 0.5s ease;
  text-decoration: none;
  color: black;
  h3 {
    margin: 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 0;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  a:nth-child(2) {
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 667px) {
    justify-content: flex-end;
  }
`;

const StyledEmoji = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export default function ProjectList({ heading, projects }) {
  if (projects === "undefined") return null;

  return (
    <>
      {heading}
      {!projects && <div>No projects!</div>}
      <StyledList>
        {projects &&
          projects.map(
            ({ blurb, demoLink, gitLink, icon, slug, projectName, _id }) => {
              return (
                <StyledListItems key={_id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon && <StyledEmoji>{emoji.get(icon)}</StyledEmoji>}
                    <h2>{projectName}</h2>
                  </div>
                  <p>{blurb}</p>
                  <StyledLinkWrapper>
                    <IconLink
                      href={gitLink}
                      text="See on GitHub"
                      icon={FaGithub}
                    />
                    <IconLink
                      href={demoLink}
                      text="Go to Site"
                      icon={FiArrowRight}
                      style={{
                        marginLeft: "0.25rem",
                      }}
                    />
                    {slug && (
                      <Link href={{ pathname: `/post/${slug.current}` }}>
                        <a>Read about this project</a>
                      </Link>
                    )}
                  </StyledLinkWrapper>
                </StyledListItems>
              );
            }
          )}
      </StyledList>
      {heading && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href={{ pathname: `/projects` }}>
            <a style={{ color: "black", display: "block" }}>
              See All Projects &#8594;
            </a>
          </Link>
        </div>
      )}
    </>
  );
}
