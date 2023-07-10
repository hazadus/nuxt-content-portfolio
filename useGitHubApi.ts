const query = gql`
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

export async function getAllRepositoriesInfo() {
  return useAsyncQuery(query);
}
