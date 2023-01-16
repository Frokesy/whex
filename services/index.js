import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async() => {
    const graphQLClient = new GraphQLClient(graphqlAPI)
    const query = gql `
        {
          articles {
              title
              slug
              featured
              content
              coverPhoto {
                height
                width
                url
              }
            }
      }
    `

    const response = await graphQLClient.request(query)

    return response
}