import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Lato } from "@next/font/google";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Ubuntu",
  },
});

export const roboto = Lato({
  subsets: ["latin"],
  weight: "300",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
