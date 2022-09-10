import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  LinkBox,
  LinkOverlay,
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
          <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            <GridItem colSpan={[4, 4, 1]}>
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
            <GridItem colSpan={[4, 4, 3]}>
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
                        p={6}
                        width="100%"
                        height="150px"
                        rounded={"lg"}
                        pos={"relative"}
                        zIndex={10}
                        border="1px"
                        borderColor="gray.200"
                      >
                        <LinkOverlay href={repo.url}>
                          <Text fontSize="lg">{repo.name}</Text>
                          <Text fontSize="md">
                            {repo.description ? repo.description : " "}
                          </Text>
                          <Text fontSize="md">
                            {repo.language ? repo.language : " "}
                          </Text>
                        </LinkOverlay>
                      </LinkBox>
                    </GridItem>
                  );
                })}
              </Grid>
            </GridItem>
          </Grid>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default GithubPage;
