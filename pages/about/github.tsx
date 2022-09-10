import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import AnimatedPage from "../../components/root/animatedPage";
import {
  getAllRepositories,
  getFollowers,
  getFollowings,
  getUserInfo,
} from "../../libs/github";

type SanitizedRepo = {
  name: string;
  description: string | null;
  language: string | null;
  forks: number | null;
  stars: number | null;
  url: string;
};

const pinnedRepos = [
  "youtube-dvr",
  "foodgether-v2",
  "holovn",
  "blogs",
  "Sender",
  "homepage",
];

const languageColor = {
  TypeScript: "pink.400",
  JavaScript: "yellow.400",
  Go: "blue.400",
};

export const getStaticProps: GetStaticProps = async (context) => {
  const [
    { data: user },
    { data: followers },
    { data: followings },
    { data: repos },
  ] = await Promise.all([
    getUserInfo(),
    getFollowers(),
    getFollowings(),
    getAllRepositories(),
  ]);
  const sanitizedRepos = {} as { [key: string]: SanitizedRepo };
  repos.forEach((repo) => {
    sanitizedRepos[repo.name] = {
      name: repo.name,
      description: repo.description || null,
      language: repo.language || null,
      forks: repo.forks || null,
      stars: repo.stargazers_count || null,
      url: repo.html_url,
    };
  });
  return {
    props: {
      user: {
        avatar: user.avatar_url,
        repos: user.public_repos,
        bio: user.bio,
        location: user.location,
        email: user.email,
        name: user.name,
        updatedAt: user.updated_at,
        username: user.login,
      },
      followersCount: followers.length,
      followingCount: followings.length,
      repos: {
        count: repos.length,
        value: sanitizedRepos,
      },
    },
  };
};

type GithubPageProps = {
  followersCount: number;
  followingCount: number;
  user: {
    avatar: string;
    repos: string;
    bio: string;
    location: string;
    email: string;
    name: string;
    updatedAt: string;
    username: string;
  };
  repos: {
    count: number;
    value: { [key: string]: SanitizedRepo };
  };
};

const GithubPage: NextPage<GithubPageProps> = ({
  user: { avatar, name, bio, username },
  followersCount,
  followingCount,
  repos: { count: repoCount, value: repos },
}) => {
  return (
    <>
      <Head>
        <title>Nguyen Quang Lam - Github</title>
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
          <Grid templateColumns="repeat(5, 1fr)" gap={5}>
            <GridItem colSpan={[5, 5, 1]}>
              <Flex direction={["row", "row", "column"]}>
                <Box rounded="full" overflow="hidden">
                  <Image
                    src={avatar}
                    width="400"
                    height="400"
                    alt="Lam Nguyen Github profile picture"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="xl" textAlign="center">
                    {name}
                  </Text>
                  <Text fontSize="md" textAlign="center" color="gray.500">
                    {username}
                  </Text>
                </Box>
              </Flex>
              <Text fontSize="md" textAlign="center" marginTop="1rem">
                {bio}
              </Text>
              <Flex
                direction="row"
                gap={2}
                justifyContent="center"
                marginTop="2rem"
              >
                <Text fontSize="md">
                  <Link href={`https://github.com/${username}?tab=followers`}>
                    {followersCount} followers
                  </Link>
                </Text>
                <Text fontSize="md">
                  <Link href={`https://github.com/${username}?tab=following`}>
                    {followingCount} following
                  </Link>
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={[5, 5, 4]}>
              <Tabs variant="soft-rounded" colorScheme="pink">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>
                    <Flex direction="row" gap={2}>
                      Repositories <Tag>{repoCount}</Tag>
                    </Flex>
                  </Tab>
                </TabList>
                <TabPanels marginTop="2rem">
                  <TabPanel>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                      {pinnedRepos.map((repoName) => {
                        const repo = repos[repoName];
                        if (!repo) {
                          return <></>;
                        }
                        return (
                          <GridItem colSpan={[2, 1, 1]} key={repo.name}>
                            <LinkBox
                              role={"group"}
                              p={4}
                              width="100%"
                              height="160px"
                              rounded={"lg"}
                              pos={"relative"}
                              zIndex={10}
                              border="1px"
                              borderColor="gray.200"
                            >
                              <Flex direction="column" height="100%" gap={2}>
                                <LinkOverlay href={repo.url}>
                                  <Text fontSize="lg">{repo.name}</Text>
                                </LinkOverlay>
                                {repo.description && (
                                  <Text fontSize="sm" noOfLines={2}>
                                    {repo.description}
                                  </Text>
                                )}
                                <Spacer />
                                {repo.language && (
                                  <Tag
                                    backgroundColor={
                                      languageColor[
                                        repo.language as keyof typeof languageColor
                                      ]
                                    }
                                    textAlign="center"
                                  >
                                    {repo.language}
                                  </Tag>
                                )}
                              </Flex>
                            </LinkBox>
                          </GridItem>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel overflowY="auto" maxHeight="600px">
                    {Object.keys(repos).map((repoKey) => {
                      const repo = repos[repoKey];
                      if (!repo) {
                        return <></>;
                      }
                      return (
                        <>
                          <Flex direction="column" gap={3}>
                            <Link href={repo.url}>
                              <Text
                                fontWeight="bold"
                                fontSize="xl"
                                color="pink.400"
                              >
                                {repo.name}
                              </Text>
                            </Link>
                            {repo.description && (
                              <Text fontSize="sm">{repo.description}</Text>
                            )}
                          </Flex>
                          <Divider marginY="1rem" />
                        </>
                      );
                    })}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
          </Grid>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default GithubPage;
