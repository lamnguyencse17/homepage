import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedPage from "../../components/root/animatedPage";

const Works: NextPage = () => {
  return (
    <AnimatedPage>
      <Flex height="100%" width="100%" direction="column" gap={2}>
        Works
      </Flex>
    </AnimatedPage>
  );
};

export default Works;
