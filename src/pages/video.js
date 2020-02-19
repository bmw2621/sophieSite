import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoContent from "../components/videoContent"

const VideoPage = () => {

  let data = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            title
            videoId
            thumbnail {
              url
            }
            description
            publishedAt(formatString: "DD MMMM YY")
          }
        }
      }
    }
    `
  )

  data = data.allYoutubeVideo.edges;

  console.log(data)

  return (
  <Layout>
    <SEO title="Videos" />
    <span className="pageTitle">Videos</span>

    <VideoContent articles={data} />

  </Layout>
)}

export default VideoPage
