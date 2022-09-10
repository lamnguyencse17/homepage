import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

type GithubProfileProps = {
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
};

const GithubProfile = ({
  user: { avatar, name, bio, username },
  followersCount,
  followingCount,
}: GithubProfileProps) => {
  return (
    <>
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
      <Flex direction="row" gap={2} justifyContent="center" marginTop="2rem">
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
    </>
  );
};

export default GithubProfile;
