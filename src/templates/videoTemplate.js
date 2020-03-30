import React from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useAuth } from 'react-use-auth'

export default ({ data }) => {

  const video = data.s3Object
  const { isAuthenticated, user } = useAuth()

  let title = video.Key.split(".")[0].split("_").join(" ")
  let filePath = `https://sophiesiteassets.s3.us-east-2.amazonaws.com/${video.Key}`

  if(isAuthenticated() && Object.keys(access).includes(user.email) && access[user.email].includes("YogaClass001")){
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
  } else {
  return (
    <Layout>
      <SEO title={title} />
      <span className="pageTitle">You do not have authorization for this site</span>
    </Layout>
  ) 
}
}

export const query = graphql`
  query($id: String!) {
    s3Object(id: {eq: $id}) {
      Key
    }
  }`
