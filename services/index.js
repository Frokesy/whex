import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPopularTopics = async() => {
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

export const getArticlesByCategory = async(category) => {
    const graphQLClient = new GraphQLClient(graphqlAPI)
    const query = gql `
      query getArticlesByCategory($category: String!) {
        articles(where: {categories_some: {name: $category}}, orderBy: publishedAt_DESC) {
          title
          slug
          featured
          excerpt
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
    const categoryName = { category }

    const response = await graphQLClient.request(query, categoryName)

    return response
}

export const getFeaturedArticles = async() => {
    const graphQLClient = new GraphQLClient(graphqlAPI)
    const query = gql `
        {
          articles(where: {featured: true}, orderBy: publishedAt_DESC) {
            title
            slug
            featured
            excerpt
            coverPhoto {
              url
            }
            categories {
              id
              name
            }
            publishedAt
            author {
              name
              avatar {
                url
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