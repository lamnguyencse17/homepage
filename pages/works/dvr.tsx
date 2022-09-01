import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedPage from "../../components/root/animatedPage";

const Dvr: NextPage = () => {
  return (
    <AnimatedPage>
      <Flex height="100%" width="100%" direction="column" gap={2}>
        Dvr
      </Flex>
    </AnimatedPage>
  );
};

export default Dvr;
