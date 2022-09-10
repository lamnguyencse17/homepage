import { Box, Divider, Flex, Link, Tag, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { languageColor } from "../../../libs/utils/color";
import { SanitizedRepo } from "../../../pages/about/github";

const renderUpdatedDate = (date: string) => {
  const parsedDate = dayjs(date);
  const now = dayjs();
  let diff = now.diff(parsedDate, "hour");
  if (diff < 24) {
    return `Updated ${diff} hours ago`;
  }
  diff = now.diff(parsedDate, "day");
  if (diff < 30) {
    return `Updated ${diff} days ago`;
  }
  return `Updated on ${parsedDate.format("MMM DD, YYYY")}`;
};

type GithubRepositoriesProps = {
  repos: SanitizedRepo[];
};

const GithubRepositories = ({ repos }: GithubRepositoriesProps) => {
  return (
    <>
      {repos.map((repo) => {
        return (
          <Box key={repo.name}>
            <Flex direction="column" gap={3}>
              <Link href={repo.url}>
                <Text fontWeight="bold" fontSize="xl" color="pink.400">
                  {repo.name}
                </Text>
              </Link>
              {repo.description && (
                <Text fontSize="sm">{repo.description}</Text>
              )}
              <Flex direction="row" gap={5} alignItems="center">
                {repo.language && (
                  <Tag
                    backgroundColor={
                      languageColor[repo.language as keyof typeof languageColor]
                    }
                    textAlign="center"
                    fontSize="xs"
                  >
                    {repo.language}
                  </Tag>
                )}
                {repo.updatedAt && (
                  <Text fontSize="xs">{renderUpdatedDate(repo.updatedAt)}</Text>
                )}
              </Flex>
            </Flex>
            <Divider marginY="1rem" />
          </Box>
        );
      })}
    </>
  );
};

export default GithubRepositories;
