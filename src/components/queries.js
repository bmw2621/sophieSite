import { graphql } from "gatsby"

export const query = graphql`
query MyQuery {
  allYoutubeVideo {
    edges {
      node {
        title
        videoId
        thumbnail {
          url
        }
        description
      }
    }
  }
allNodeArticle {
  nodes {
    created(formatString: "DD MMMM YY")
    title
    body {
      processed
    }
    field_image {
      alt
      height
      title
      width
    }
    relationships {
      field_image {
        filename
        localFile {
          childImageSharp {
            fluid(maxWidth: 500){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
}
`
