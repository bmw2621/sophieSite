import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/blogContent"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    {
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

  )

  console.log(data)

  return (
  <Layout>
    <SEO title="Home" />
    <span className="pageTitle">Blog</span>

    <BlogContent articles={data.allNodeArticle.nodes} />

  </Layout>
)}

export default BlogPage
