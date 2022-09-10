import {
  Flex,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { SanitizedRepo } from "../../../pages/about/github";
import { languageColor } from "../../../libs/utils/color";

const pinnedRepos = [
  "youtube-dvr",
  "foodgether-v2",
  "holovn",
  "blogs",
  "Sender",
  "homepage",
];

type OverviewProps = {
  repos: SanitizedRepo[];
};

const GithubOverview = ({ repos }: OverviewProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
      {pinnedRepos.map((repoName) => {
        const repo = repos.find((repo) => repo.name === repoName);
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
                      languageColor[repo.language as keyof typeof languageColor]
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
  );
};

export default GithubOverview;
