import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const InteractPage = () => {

  const meetingId = "2247458727"

  return (
  <Layout>
    <SEO title="Interact" />
    <span className="pageTitle">Interact</span>

    <div class="iframe-container" style={{"overflow": "hidden", "padding-top": "56.25%", "position": "relative"}}>
      	<iframe title="Zoom Call" allow="microphone; camera" style={{"border": "0", "height": "100%", "left": "0", "position": "absolute", "top": "0", "width": "100%"}} src={"https://success.zoom.us/wc/join/"+meetingId} frameborder="0"></iframe>
  	</div>

  </Layout>
)}

export default InteractPage
