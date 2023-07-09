import "../styles/globals.css";
import "@fontsource/space-mono";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/root/navbar";
import theme from "../libs/theme";
import useAnalytics from "../libs/hooks/useAnalytics";
import useSentry from "../libs/hooks/useSentry";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  useSentry();
  return (
    <>
      <Head>
        <meta name="robots" content="all" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider theme={theme}>
          <Flex height="100%" width="100%" direction="row" gap={2}>
            <Navbar />
            <Box flex={1} borderLeft="1px" borderLeftColor="gray.100">
              <Component {...pageProps} />
            </Box>
          </Flex>
        </ChakraProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
