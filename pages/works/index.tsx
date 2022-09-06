import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import AnimatedPage from "../../components/root/animatedPage";

const Works: NextPage = () => {
  return (
    <AnimatedPage>
      <Flex height="100%" width="100%" direction="column" gap={2}>
        <Link href="/works/dvr" passHref>
          <ChakraLink>Youtube-DVR</ChakraLink>
        </Link>
      </Flex>
    </AnimatedPage>
  );
};

export default Works;
