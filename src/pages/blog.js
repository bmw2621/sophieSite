import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

  return (
  <Layout>
    <SEO title="Blog" />
    <span className="pageTitle">Blog</span>

    <BlogContent articles={data.allNodeArticle.nodes} />

  </Layout>
)}

export default BlogPage
