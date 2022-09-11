import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Error404Page = () => {
  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - 404 error</title>
      </Head>
      <Flex
        height="100%"
        width="100%"
        direction="column"
        gap={2}
        padding="5"
        paddingTop="10rem"
        alignItems="center"
        overflowY="auto"
      >
        <Heading>It seems that you are lost...</Heading>
      </Flex>
    </>
  );
};

export default Error404Page;
