import Head from "next/head";
import Header from "./Header";
import Footer from "../containers/Footer";
import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 860px;
  margin: 0 auto;
  * {
    font-family: "Mulish", sans-serif;
  }
`;

export default function Layout({ children, description, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        {/* Twitter - */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={"rayjay00"} key="twhandle" />
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
        />
      </Head>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}
