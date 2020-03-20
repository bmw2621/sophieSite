import React from "react"

import { useAuth } from 'react-use-auth'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Yoga2Page = () => {

  const { isAuthenticated, user } = useAuth()
  const access = require("../Access/access.json")

  if(isAuthenticated() && Object.keys(access).includes(user.email) && access[user.email].includes("YogaClass002")){
    return (
      <Layout>
        <SEO title="Yoga Class 002" />
        <span className="pageTitle">You have authorization for this site</span>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Yoga Class 002" />
        <span className="pageTitle">You do not have authorization for this site</span>
      </Layout>
    ) 
  }


  }

export default Yoga2Page
