export type PinnedResponse = {
  data: {
    user: {
      pinnedItems: {
        edges: Array<{
          node: {
            description?: string;
            name: string;
            stargazerCount: number;
            url: string;
          };
        }>;
      };
    };
  };
};
export async function getPinnedProject() {
  const query = `
  {
    user(login: "sakurawen") {
      pinnedItems(first: 10, types: [REPOSITORY]) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
              stargazerCount
            }
          }
        }
      }
    }
  }
  `;
  const res = await fetch('https://api.github.com/graphql?', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
    cache: 'no-cache',
  });
  return res.json() as Promise<PinnedResponse>;
}
