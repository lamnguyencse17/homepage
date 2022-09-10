import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { m } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AnimatedPage from "../../components/root/animatedPage";
import HtmlIcon from "../../public/skills/html.svg";
import CssIcon from "../../public/skills/css.svg";
import JavascriptIcon from "../../public/skills/javascript.svg";
import TypescriptIcon from "../../public/skills/typescript.svg";
import GoIcon from "../../public/skills/golang.svg";
import ReactIcon from "../../public/skills/react.svg";
import PostgresIcon from "../../public/skills/postgres.svg";
import MongoIcon from "../../public/skills/mongodb.svg";
import GitIcon from "../../public/skills/git.svg";
import DockerIcon from "../../public/skills/docker.svg";
import JenkinsIcon from "../../public/skills/jenkins.svg";
import AwsIcon from "../../public/skills/aws.svg";

const Skills: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Skills</title>
      </Head>
      <AnimatedPage>
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={2}
          alignItems="center"
          padding="5"
          paddingTop="10rem"
        >
          <Heading>Skills</Heading>
          <Text textAlign="justify">
            Throughout my learning journey, <br /> I have adopted many many
            valuable skills in which I believe will help a lot during my
            life-long career.
          </Text>

          <Flex
            as={m.div}
            direction="column"
            gap={5}
            alignItems="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transitionDuration: "1s" }}
          >
            <Text fontSize="xl" marginTop="5rem">
              Languages
            </Text>
            <Flex direction="row" gap={5}>
              <Tooltip label="HTML" textColor="white">
                <Box>
                  <Image src={HtmlIcon} alt="HTML skill" />
                </Box>
              </Tooltip>
              <Tooltip label="CSS" textColor="white">
                <Box>
                  <Image src={CssIcon} alt="CSS skill" />
                </Box>
              </Tooltip>
              <Tooltip label="React" textColor="white">
                <Box>
                  <Image src={ReactIcon} alt="React skill" />
                </Box>
              </Tooltip>
              <Tooltip label="Javascript" textColor="white">
                <Box>
                  <Image src={JavascriptIcon} alt="Javascript skill" />
                </Box>
              </Tooltip>
              <Tooltip label="Typescript" textColor="white">
                <Box>
                  <Image src={TypescriptIcon} alt="Typescript skill" />
                </Box>
              </Tooltip>
              <Tooltip label="Golang" textColor="white">
                <Box>
                  <Image src={GoIcon} alt="Golang skill" />
                </Box>
              </Tooltip>
            </Flex>
            <Flex
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap="5rem"
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="xl">Databases</Text>
                <Flex direction="row" gap={5}>
                  <Tooltip label="Postgres" textColor="white">
                    <Box>
                      <Image src={PostgresIcon} alt="Postgres skill" />
                    </Box>
                  </Tooltip>
                  <Tooltip label="MongoDB" textColor="white">
                    <Box>
                      <Image src={MongoIcon} alt="MongoDB skill" />
                    </Box>
                  </Tooltip>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="xl" textAlign="center">
                  Tools
                </Text>
                <Flex direction="row" gap={5}>
                  <Tooltip label="Golang" textColor="white">
                    <Box>
                      <Image src={GitIcon} alt="Git skill" />
                    </Box>
                  </Tooltip>
                  <Tooltip label="Jenkins" textColor="white">
                    <Box>
                      <Image src={JenkinsIcon} alt="Jenkins skill" />
                    </Box>
                  </Tooltip>
                  <Tooltip label="Docker" textColor="white">
                    <Box>
                      <Image src={DockerIcon} alt="Docker skill" />
                    </Box>
                  </Tooltip>
                  <Tooltip label="AWS" textColor="white">
                    <Box>
                      <Image src={AwsIcon} alt="AWS skill" />
                    </Box>
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default Skills;
