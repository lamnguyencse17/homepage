import { Box, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import AnimatedPage from "../../components/root/animatedPage";
import { getFollowers, getFollowings, getUserInfo } from "../../libs/github";

export const getStaticProps: GetStaticProps = async (context) => {
  const [{ data: user }, { data: followers }, { data: followings }] =
    await Promise.all([getUserInfo(), getFollowers(), getFollowings()]);
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
      followers: {
        count: followers.length,
        value: followers,
      },
      followings: {
        count: followings.length,
        value: followings,
      },
    },
  };
};

type GithubPageProps = {
  followers: {
    count: number;
    value: Awaited<ReturnType<typeof getFollowers>>["data"];
  };
  followings: {
    count: number;
    value: Awaited<ReturnType<typeof getFollowings>>["data"];
  };
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
};

const GithubPage: NextPage<GithubPageProps> = ({
  user: { avatar, name, bio, username },
  followers: { count: followerCount },
  followings: { count: followingCount },
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
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={[4, 4, 1]}>
              <Flex direction={["row", "row", "column"]}>
                <Box rounded="full" overflow="hidden">
                  <Image src={avatar} width="400" height="400" />
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
                    {followerCount} followers
                  </Link>
                </Text>
                <Text fontSize="md">
                  <Link href={`https://github.com/${username}?tab=following`}>
                    {followingCount} following
                  </Link>
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={3}></GridItem>
          </Grid>
        </Flex>
      </AnimatedPage>
    </>
  );
};

export default GithubPage;
