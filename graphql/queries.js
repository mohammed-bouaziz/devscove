import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
query {
    blogPosts {
      data {
        attributes{
          urlSlug
        }
      }
    }
  }
`

const GET_ALL_POSTS = gql`
query {
    blogPosts {
      data {
        attributes{
          title
          description
          urlSlug
          content
        }
      }
    }
  }
`

const GET_ALL_SINGLE_POST = gql`
query($slugUrl:String!) {
    blogPosts(filters: {urlSlug: {eq: $slugUrl}}) {
      data {
        attributes{
          title
          description
          urlSlug
          content
        }
      }
    }
  }
`

export { GET_ALL_POSTS, GET_ALL_SINGLE_POST, GET_ALL_SLUGS };
