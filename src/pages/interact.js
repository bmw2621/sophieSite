import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const meetingId = "2247458727"

const InteractPage = () => {

  return (
  <Layout>
    <SEO title="Interact" />
    <span className="pageTitle">Interact</span>

    <div className="iframe-container" style={{"overflow": "hidden"}}>
      	<iframe title="Zoom Call" allow="microphone; camera" style={{"border": "0", "height": "100%", "left": "0", "position": "absolute", "top": "0", "width": "100%"}} src={"https://success.zoom.us/wc/join/"+meetingId} frameborder="0"></iframe>
  	</div>

  </Layout>
)}

export default InteractPage
