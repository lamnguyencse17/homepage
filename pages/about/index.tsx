import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";
import AnimatedPage from "../../components/root/animatedPage";
import SkillsIcon from "../../public/skills.svg";
import ExperienceIcon from "../../public/experience.svg";
import { motion } from "framer-motion";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - About</title>
      </Head>
      <AnimatedPage>
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={2}
          alignItems="center"
          padding="5"
        >
          <Heading marginTop="10rem">About</Heading>
          <Text textAlign="justify">
            An enthusiastic computer science graduate from Ho Chi Minh
            University of Technology with one year of practical web development
            experience, a software engineer that is always self motivated and
            self learning through projects. Eager to challenge himself to
            deliver his best, overcome all the hardship encountered and become
            better
          </Text>
          <Grid
            templateColumns="repeat(6, 1fr)"
            width="100%"
            gap={10}
            paddingX="10"
            marginTop="5rem"
          >
            <GridItem
              width="100%"
              height="200px"
              display="flex"
              flexDirection="column"
              as={motion.div}
              whileHover={{ scale: 1.2 }}
              colStart={2}
            >
              <LinkBox width="100%" height="100%">
                <Link href="/about/experience" passHref>
                  <LinkOverlay>
                    <Flex direction="column" width="100%" height="100%">
                      <Box width="100%" flex="1">
                        <Image
                          src={ExperienceIcon}
                          style={{
                            height: "100%",
                            width: "fit-content",
                            margin: "auto",
                          }}
                          alt="Link to experience page"
                        />
                      </Box>

                      <Text
                        fontSize="xl"
                        fontWeight="semibold"
                        textAlign="center"
                      >
                        Experience
                      </Text>
                    </Flex>
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </GridItem>
            <GridItem
              width="100%"
              height="200px"
              display="flex"
              flexDirection="column"
              as={motion.div}
              whileHover={{ scale: 1.2 }}
              colStart={5}
            >
              <LinkBox width="100%" height="100%">
                <Link href="/about/skills" passHref>
                  <LinkOverlay>
                    <Flex direction="column" width="100%" height="100%">
                      <Box width="100%" flex="1">
                        <Image
                          src={SkillsIcon}
                          style={{
                            height: "100%",
                            width: "fit-content",
                            margin: "auto",
                          }}
                          alt="Link to skill page"
                        />
                      </Box>

                      <Text
                        fontSize="xl"
                        fontWeight="semibold"
                        textAlign="center"
                      >
                        Skills
                      </Text>
                    </Flex>
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </GridItem>
          </Grid>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default About;
