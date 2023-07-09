import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { VictoryBar, VictoryPie } from "victory";
import AnimatedPage from "../../components/root/animatedPage";
import {
  getCommitActivity,
  getLatestRelease,
  getRepoInfo,
  GithubAsset,
} from "../../libs/github";
import GithubLogo from "../../public/github.svg";
import HomeImage from "../../public/works/dvr/home.jpg";
import DependenciesImage from "../../public/works/dvr/dependencies.jpg";
import FunctionsImage from "../../public/works/dvr/functions.jpg";
import { motion } from "framer-motion";
import Carousel from "../../components/works/carousel";

const repo = "youtube-dvr";
const images = [
  { src: HomeImage, title: "Homepage of Youtube DVR" },
  {
    src: DependenciesImage,
    title: "Youtube DVR can self check for dependencies and updates",
  },
  {
    src: FunctionsImage,
    title:
      "Choose video quality, see stats of recording and watch while downloading!",
  },
];

enum IndexDateMapping {
  "Mon",
  "Tue",
  "Wed",
  "Thur",
  "Fri",
  "Sat",
  "Sun",
}

type CommitData = {
  total: number;
  frequencies: number[];
};

export const getStaticProps: GetStaticProps = async (context) => {
  const [commitStats, releaseResponse, repoLanguages] = await Promise.all([
    getCommitActivity(repo),
    getLatestRelease(repo),
    getRepoInfo(repo),
  ]);
  const releaseTarget = releaseResponse.data.assets.find((asset) =>
    asset.name.includes("exe")
  );
  if (!releaseTarget) {
    throw new Error("Release URL is not found");
  }
  const commitData = commitStats.data.reduce(
    (acc, cur) => {
      acc.total += cur.total;
      cur.days.forEach((value, index) => {
        acc.frequencies[index] += value;
      });
      return acc;
    },
    { total: 0, frequencies: [0, 0, 0, 0, 0, 0, 0] } as CommitData
  );
  const languageChart = Object.keys(repoLanguages.data).map((key) => ({
    label: `${key}: ${repoLanguages.data[key]}`,
    value: repoLanguages.data[key],
  }));
  return {
    props: {
      languageChart: languageChart,
      commitData: commitData,
      releaseData: {
        date: releaseResponse.data.published_at,
        assets: releaseResponse.data.assets,
        body: releaseResponse.data.body,
        version: releaseResponse.data.tag_name,
        title: releaseResponse.data.name,
      },
    },
  };
};

type DvrProps = {
  languageChart: {
    label: string;
    value: number;
  }[];
  commitData: CommitData;
  releaseData: {
    assets: GithubAsset[];
    date: string;
    body: string | null | undefined;
    version: string;
    title: string;
  };
};

const Dvr: NextPage<DvrProps> = ({
  languageChart,
  commitData,
  releaseData,
}) => {
  const commitDate = commitData.frequencies.map((value, index) => ({
    x: index + 1,
    y: value,
    label: `${IndexDateMapping[index]}: ${value}`,
  }));

  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Youtube DVR</title>
        <meta name="description" content="Nguyen Quang Lam - Youtube DVR" />
      </Head>
      <AnimatedPage>
        <Flex
          maxHeight="100%"
          width="100%"
          direction="column"
          gap={2}
          alignItems="center"
          padding="5"
          paddingTop="10rem"
          overflowY="auto"
        >
          <Heading>Youtube DVR</Heading>
          <Link
            as={motion.a}
            href="https://github.com/lamnguyencse17/youtube-dvr"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <Image src={GithubLogo} alt="Github Link" />
          </Link>
          <Box>
            <Text>
              This repo is the source code for the software with the same name
              allowing you to record youtube livestream or just youtube video
            </Text>
          </Box>
          <Flex
            direction="column"
            height="fit-content"
            width="100%"
            marginTop="3rem"
            gap="2"
          >
            <Text fontSize="xl" fontWeight="bold" textAlign="justify">
              Gallery
            </Text>
            <Box paddingX="5">
              <Carousel images={images} />
            </Box>
          </Flex>
          <Box width="100%" marginTop="3rem">
            <Text fontSize="xl" fontWeight="bold" textAlign="justify">
              Latest release
            </Text>
            <Box width="100%" paddingX="2rem">
              <Text
                fontSize="md"
                fontWeight="bold"
                textAlign="justify"
                padding="1"
              >
                <Tag variant="solid" marginRight="1" backgroundColor="pink.400">
                  {releaseData.version}
                </Tag>

                {releaseData.title}
              </Text>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Text fontSize="md" fontWeight="medium" textAlign="justify">
                      Release note
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Box width="100%" marginLeft="5">
                      {releaseData.body && (
                        <ReactMarkdown>{releaseData.body}</ReactMarkdown>
                      )}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Text fontSize="md" fontWeight="medium" textAlign="justify">
                      Assets
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <TableContainer>
                      <Table>
                        <Tbody>
                          {releaseData.assets.map((asset) => (
                            <Tr key={asset.id}>
                              <Td>
                                <Link
                                  href={asset.browser_download_url}
                                  color="pink.400"
                                >
                                  {asset.name}
                                </Link>
                              </Td>
                              <Td>{asset.size / 1000}Kb</Td>
                              <Td>{asset.updated_at}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
          <Flex
            direction={["column", "row", "row"]}
            width="100%"
            justifyContent="center"
          >
            <Box
              as={motion.div}
              whileInView={{ opacity: 1, transitionDuration: "1s", x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
            >
              <VictoryPie
                data={languageChart}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                padAngle={3}
                labelPlacement="parallel"
                labelRadius={30}
                radius={150}
                x="label"
                y={(datum) =>
                  datum.value > 1000 ? datum.value / 7 : datum.value
                }
              />
              <Text textAlign="center">Languages used break down by lines</Text>
            </Box>
            <Box
              as={motion.div}
              whileInView={{ opacity: 1, transitionDuration: "1s", x: 0 }}
              initial={{ opacity: 0, x: 10 }}
              viewport={{ once: true }}
            >
              <VictoryBar
                data={commitDate}
                labels={({ datum }) => datum.label}
                padding={{ left: 50, right: 50, top: 0, bottom: 0 }}
              />
              <Text textAlign="center">Commits by date</Text>
            </Box>
          </Flex>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default Dvr;
