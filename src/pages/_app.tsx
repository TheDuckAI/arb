import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Cormorant_Garamond } from "@next/font/google";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Ubuntu",
    body: "Cormorant Garamond"
  },
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: "500",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme = {theme}>
      <main className={cormorantGaramond.className}>
        <Component {...pageProps}/>
      </main>
    </ChakraProvider>
  );
}
