const queryAllRepos = gql`
  {
    viewer {
      repositories(
        first: 50
        privacy: PUBLIC
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
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
      issues(
        first: 50
        states: OPEN
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
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

export async function getAllRepositoriesInfo() {
  return useAsyncQuery(queryAllRepos);
}

export async function getLatestOpenIssuesInfo() {
  return useAsyncQuery(queryLatestOpenIssues);
}
