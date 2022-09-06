import { GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const owner = "lamnguyencse17";

const publicOctokit = new Octokit();
const getOctokit = () => {
  if (!process.env.GH_TOKEN) {
    throw new Error("GH_TOKEN is not set");
  }

  return new Octokit({ auth: process.env.GH_TOKEN });
};

export const getAllRepositories = async () => {
  const octokit = getOctokit();
  return octokit.rest.repos.listPublic();
};

export const getRepoInfo = async (repo: string) => {
  const octokit = getOctokit();
  return octokit.rest.repos.listLanguages({
    owner,
    repo,
  });
};

export const getUserInfo = async () => {
  const octokit = getOctokit();
  return octokit.rest.users.getAuthenticated();
};

// Very very dark magic
type commitActivityResponse = Extract<
  GetResponseTypeFromEndpointMethod<
    typeof publicOctokit.rest.repos.getCommitActivityStats
  >,
  { status: 200 }
>;

export const getCommitActivity = async (repo: string) =>
  new Promise<commitActivityResponse>(async (resolve, reject) => {
    const octokit = getOctokit();
    const initialResponse = await octokit.rest.repos.getCommitActivityStats({
      owner,
      repo,
    });
    if (initialResponse.status === 200) {
      resolve(initialResponse);
    }
    let retryCount = 0;
    const interval = setInterval(async () => {
      if (retryCount === 3) {
        reject();
      }
      const response = await octokit.rest.repos.getCommitActivityStats({
        owner,
        repo,
      });
      if (response.status === 200) {
        resolve(response);
        clearInterval(interval);
      }
      retryCount += 1;
    }, 5000);
  });

export type GithubAsset = GetResponseTypeFromEndpointMethod<
  typeof publicOctokit.rest.repos.getLatestRelease
>["data"]["assets"][0];

export const getLatestRelease = async (repo: string) => {
  const octokit = getOctokit();
  return octokit.rest.repos.getLatestRelease({
    owner,
    repo,
  });
};
