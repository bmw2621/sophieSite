import React from "react"

import { useAuth } from 'react-use-auth'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Piyo032720Page = () => {

  const { isAuthenticated, user } = useAuth()
  const access = require("../Access/access.json")

  if(isAuthenticated() && Object.keys(access).includes(user.email) && access[user.email].includes("YogaClass001")){
    return (
      <Layout>
        <SEO title="PiYo | March 27, 2020" />
        <span className="pageTitle">You have authorization for this site</span>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="PiYo | March 27, 2020" />
        <span className="pageTitle">You do not have authorization for this site</span>
      </Layout>
    ) 
  }


  }

export default Piyo032720Page
