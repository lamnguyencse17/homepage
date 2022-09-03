import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AnimatedPage from "../../components/root/animatedPage";
import HtmlIcon from "../../public/html.svg";
import CssIcon from "../../public/css.svg";
import JavascriptIcon from "../../public/javascript.svg";
import TypescriptIcon from "../../public/typescript.svg";
import GoIcon from "../../public/golang.svg";
import ReactIcon from "../../public/react.svg";
import PostgresIcon from "../../public/postgres.svg";
import MongoIcon from "../../public/mongodb.svg";
import GitIcon from "../../public/git.svg";
import DockerIcon from "../../public/docker.svg";
import JenkinsIcon from "../../public/jenkins.svg";
import AwsIcon from "../../public/aws.svg";

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
          justifyContent="center"
        >
          <Heading>Skills</Heading>
          <Text textAlign="justify">
            Along my learning journey, <br /> I have adopted many many valuable
            skills in which I believe will help a lot during my life-long
            career.
          </Text>

          <Flex direction="column" gap={5} alignItems="center">
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
            <Text fontSize="xl">Tools</Text>
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
      </AnimatedPage>
    </>
  );
};

export default Skills;
