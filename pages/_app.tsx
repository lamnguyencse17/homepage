import "../styles/globals.css";
import "@fontsource/space-mono";
import { Box, ChakraProvider, Divider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/root/navbar";
import theme from "../libs/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <Flex height="100%" width="100%" direction="row" gap={2}>
          <Navbar />
          <Divider orientation="vertical" />
          <Box flex={1}>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
