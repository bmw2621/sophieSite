import React from "react"
import { useAuth } from 'react-use-auth'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { isAuthenticated, login, logout, user } = useAuth();

  const welcome = "Y'all";
  
  if(isAuthenticated()){
    user.given_name ? user.given_name : user.email
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div id="indexContent">
        <h1 className="pageTitle">Hey, {welcome}!</h1>

          <p>&emsp;It has been a ride from being a military spouse as a stay at home mama moving where the army sent us…. teaching fitness classes…. building my own business…. adding another babe to the crew totaling 4 little loves…. to currently linking arms with my man in our businesses at home together or on the road together. I love empowering others to have a clear vision, reach goals, experience joy and find freedom.</p>

          <p>&emsp;I am so glad to have this spot to share with you. I have to share “It all Starts with your Underwear!” with you. This is a concept I wrote down when I was 17. I had torn my meniscus as a competitve cheerleader and my weight started to creep up. Yes, I could watch what I was eating, diet and get back to where I was but for the time being I needed to do something. I went out and bought some new underwear. Novel concept right? But this simple action shaped my perspective early. I could stay where I was or take action. </p>

          <p>&emsp;We can keep wearing the uber tight, skin sectioning, buldge causing underwear or we can go out and put some fabulous underwear on that fits right now. I want to share with you my seasons of stuck, of action, of overcoming and then some. I want to share the real, the vulnerable and the beautiful. I want to share the ins and outs, the highs and lows… in marriage, mamahood, building businesses, staying healthy, sharing fitness, and even sharing my ultra basic kid allergy and mama goal friendly recipes that make life easier . Its a good day when we can all “eat dessert first” right?! </p>

          <p>&emsp;I am so grateful y’all have joined me in this journey. Shoot me a message with where you are in this globe and hopefully one day our paths will cross not just through a screen! Big amazing things ahead, We are better together!</p>

          <p>Light and Love,<br/>Sophie Winchester</p>
      </div>

    </Layout>
  )
}

export default IndexPage
