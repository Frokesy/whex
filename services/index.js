import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async() => {
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

    const data = await request(graphqlAPI, query)

    return data
}