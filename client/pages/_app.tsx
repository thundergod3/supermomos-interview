import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "themes";

import Header from "components/Header";

import "react-datepicker/dist/react-datepicker.css";
import "assets/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
