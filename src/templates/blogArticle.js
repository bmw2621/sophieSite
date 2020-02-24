import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({data}) => {

  const post = data.nodeArticle

  // Create stateful variale to keep track if the entire article is displayed or not
  let title = post.title
  let created = post.created
  let text = post.body.processed
  let id = post.id
  let image = post.relationships.field_image && post.relationships.field_image.localFile.childImageSharp.fluid

  return (
    <Layout>
    <SEO title={title} />
      <div className="blogCard"  id={`${id}`}>
      {
        image &&
        <Img
          fluid={image}
          style={{"width":"200px"}}
          imgStyle={{"objectFit":"cover","width":"200px", "filter":"brightness(150%) grayscale(100%)"}}
          />
      }
        <div className="blogCardData">
          <h1 className="cardTitle">{title}</h1>
          <h3 className="cardDate">{created}</h3>
          <div dangerouslySetInnerHTML={{ __html: text}}></div>
          <Link to="/blog" className="App-Link">Back</Link>
        </div>
      </div>
      </ Layout>
  )
}

export const query = graphql`
  query($id: String!) {
  nodeArticle(id: {eq: $id}) {
    body {
      processed
    }
    title
    id
    created(formatString: "DD MMMM YY")
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
`
