import App from "next/app";
import { ThemeProvider } from "styled-components";

import Footer from "../containers/Footer";
import "prismjs/themes/prism-tomorrow.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
