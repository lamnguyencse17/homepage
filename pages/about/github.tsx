import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
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
import dayjs from "dayjs";
import GithubOverview from "../../components/about/github/overview";
import GithubRepositories from "../../components/about/github/repositories";
import GithubProfile from "../../components/about/github/profile";

export type SanitizedRepo = {
  name: string;
  description: string | null;
  language: string | null;
  forks: number | null;
  stars: number | null;
  url: string;
  updatedAt: string | null;
};

const santizeRepos = (
  repos: Awaited<ReturnType<typeof getAllRepositories>>["data"]
) =>
  repos
    .map((repo) => ({
      name: repo.name,
      description: repo.description || null,
      language: repo.language || null,
      forks: repo.forks || null,
      stars: repo.stargazers_count || null,
      url: repo.html_url,
      updatedAt: repo.pushed_at || null,
    }))
    .sort((repoA, repoB) =>
      dayjs(repoB.updatedAt).diff(dayjs(repoA.updatedAt))
    );

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
  const sanitizedRepos = santizeRepos(repos);

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
    value: SanitizedRepo[];
  };
};

const GithubPage: NextPage<GithubPageProps> = ({
  user,
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
              <GithubProfile
                user={user}
                followersCount={followersCount}
                followingCount={followingCount}
              />
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
                    <GithubOverview repos={repos} />
                  </TabPanel>
                  <TabPanel>
                    <GithubRepositories repos={repos} />
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
