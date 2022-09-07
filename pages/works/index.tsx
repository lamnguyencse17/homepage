import { Flex, Grid, Heading, Link as ChakraLink } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedPage from "../../components/root/animatedPage";
import WorkCard from "../../components/works/card";
import DvrImage from "../../public/works/dvr/home.jpg";

const works = [
  {
    image: DvrImage,
    url: "/works/dvr",
    title: "Youtube DVR",
    description:
      "This repo is the source code for the software with the same name allowing you to record youtube livestream or just youtube video",
  },
];

const Works: NextPage = () => {
  return (
    <AnimatedPage>
      <Flex
        height="100%"
        width="100%"
        direction="column"
        gap={2}
        overflowY="auto"
        marginTop="10rem"
        alignItems="center"
      >
        <Heading>Works</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap="10rem" paddingTop="10">
          {works.map((work, index) => (
            <WorkCard {...work} key={index} />
          ))}
        </Grid>
      </Flex>
    </AnimatedPage>
  );
};

export default Works;
