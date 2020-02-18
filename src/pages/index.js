import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/blogContent"


const IndexPage = () =>  (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  </Layout>
)

export default IndexPage
