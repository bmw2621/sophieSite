import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blogCard"

export const query = graphql`
query MyQuery {
allNodeArticle {
  nodes {
    created(formatString: "DD MMM YY")
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

const IndexPage = ({ data }) => {

  console.log(data)

  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allNodeArticle.nodes.map((article)=>{
      
      return (
          <BlogCard
            title={article.title}
            created={article.created}
            image={article.relationships.field_image && article.relationships.field_image.localFile.childImageSharp.fluid}
            text={article.body.processed} />
      )
    })}
  </Layout>
)}

export default IndexPage
