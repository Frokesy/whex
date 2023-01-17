import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async() => {
    const graphQLClient = new GraphQLClient(graphqlAPI)
    const query = gql `
        {
          articles(first: 4, orderBy: publishedAt_DESC) {
            title
            slug
            featured
            coverPhoto {
              height
              width
              url
            }
            categories {
              id
              name
            }
          }
      }
    `

    const response = await graphQLClient.request(query)

    return response
}

export const getSingleBlog = async(slug) => {
    const graphQLClient = new GraphQLClient(graphqlAPI)
    const query = gql `
      query getSingleBlog($slug: String!) {
        articles(where: {slug: $slug}) {
          title
          featured
          content {
            html
          }
          coverPhoto {
            height
            width
            url
          }
        }
      }
  `
    const slugName = { slug }

    const response = await graphQLClient.request(query, slugName)

    return response
}


export const getBlogSlugs = async() => {
    const graphQLClient = new GraphQLClient(graphqlAPI);
    const query = gql `
    {
      articles {
        slug
      }
    }
  `;
    const response = await graphQLClient.request(query);
    return response;
};