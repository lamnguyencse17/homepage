import {
  Flex,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>Nguyen Quang Lam - Works</title>
      </Head>
      <AnimatedPage>
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={2}
          overflowY="auto"
          padding="5"
          paddingTop="10rem"
          alignItems="center"
        >
          <Heading>Works</Heading>
          <Text textAlign="justify">
            Learning from side projects is one of the best way to learn new
            stuff in the industry. I believe that with ones mentioned below,
            everyone can have a better understanding of my craftmanship
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap="10rem" paddingTop="10">
            {works.map((work, index) => (
              <WorkCard {...work} key={index} />
            ))}
          </Grid>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default Works;
