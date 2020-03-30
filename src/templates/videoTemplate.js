import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {

  const video = data.s3Object

  let title = video.Key.split(".")[0].split("_").join(" ")
  let filePath = `https://sophiesiteassets.s3.us-east-2.amazonaws.com/${video.Key}`

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
    s3Object(id: {eq: $id}) {
      Key
    }
  }`
