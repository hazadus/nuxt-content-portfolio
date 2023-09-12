const queryAllRepos = gql`
  {
    viewer {
      repositories(first: 50, privacy: PUBLIC, orderBy: { field: PUSHED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          updatedAt
          pushedAt
          description
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 100) {
            nodes {
              topic {
                name
              }
            }
          }
          url
          homepageUrl
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const queryLatestOpenIssues = gql`
  query {
    viewer {
      issues(first: 50, states: OPEN, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          isPinned
          title
          repository {
            name
            url
          }
          url
          updatedAt
        }
      }
    }
  }
`;

/**
 * Fetch all my repositories from GitHub API.
 * @returns
 */
export async function fetchAllRepositoriesInfo() {
  return useAsyncQuery(queryAllRepos);
}

/**
 *  Fetch my 50 latest issues from GitHub API.
 * @returns
 */
export async function fetchLatestOpenIssuesInfo() {
  return useAsyncQuery(queryLatestOpenIssues);
}
