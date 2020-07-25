import emoji from "node-emoji";
import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 860px;
  margin: 0 auto;
  * {
    font-family: "Muli", sans-serif;
  }
`;

const stuff = emoji.get("computer");
export default function Layout({ children, description, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,900;1,300;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Muli&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={"rayjay00"} key="twhandle" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/257/laptop_1f4bb.png"
        ></link>
      </Head>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
