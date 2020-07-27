import Link from "next/link";
import styled from "styled-components";
import emoji from "node-emoji";

export const StyledList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  flex: 0 49%;
  margin: 5px 0;
`;

const StyledDate = styled.span`
  margin-top: 0.3rem;
  font-size: 0.8rem;
`;

const StyledPostLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.1rem;
  border-radius: 0.3rem;
  box-shadow: 0 3px 13px rgba(100, 110, 140, 0.1),
    0 2px 4px rgba(100, 110, 140, 0.15);
  transition: box-shadow 0.5s ease;
  text-decoration: none;
  color: black;
  min-height: 8.75rem;
  &:visited {
    color: black;
  }
  &:hover {
    box-shadow: 0 10px 25px rgba(100, 110, 140, 0.1), 0 2px 10px lightgrey;
  }
  h3 {
    margin: 0;
  }
`;

const StyledEmoji = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export default function PostList({ posts, heading }) {
  if (posts === "undefined") return null;

  return (
    <>
      {heading}
      <StyledList>
        {posts &&
          posts.map(({ blurb, icon, slug, title, _id, _createdAt }) => {
            return (
              <StyledListItem key={_id}>
                <StyledPostLink href={`/post/${slug.current}`} passHref>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {icon && <StyledEmoji>{emoji.get(icon)}</StyledEmoji>}
                      <h3>{title}</h3>
                    </div>
                    <StyledDate>
                      {new Date(_createdAt).toLocaleDateString()}
                    </StyledDate>
                  </div>
                  <p>{blurb}</p>
                </StyledPostLink>
              </StyledListItem>
            );
          })}
      </StyledList>
      {heading && (
        <Link href={{ pathname: `/posts/` }}>
          <a style={{ color: "black", float: "right" }}>
            See All Posts &#8594;
          </a>
        </Link>
      )}
    </>
  );
}
