import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({data}) => {

  const video = data.file

  let title = video.name.split("_").join(" ")
  let filePath = video.publicURL

  return (
    <Layout>
    <SEO title={title} />
      <div className="blogCard">
        <div className="blogCardData">
          <h1 className="pageTitle">{title}</h1>
          <video className="videoEmbed" controls>
            <source src={filePath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link to="/" className="App-Link">Home</Link>
        </div>
      </div>
      </ Layout>
  )
}

export const query = graphql`
  query($id: String!) {
  file(id: {eq: $id}) {
    sourceInstanceName
    name
    ext
    relativePath
    publicURL
  }
}`
