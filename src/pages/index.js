import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () =>  (
  <Layout>
    <SEO title="Home" />
    <div id="indexContent">
      <h1 className="pageTitle">Hi people</h1>

        <p>Aliquam ultrices molestie nibh, non sollicitudin elit faucibus quis. Maecenas tincidunt, urna vel tristique lacinia, velit purus imperdiet turpis, vel ullamcorper dui lacus nec risus. Sed vitae felis sapien. Quisque quis lorem non augue mattis auctor. Donec in faucibus lectus. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris pretium in orci vitae facilisis. Nam sit amet diam venenatis, mattis odio ac, imperdiet risus. Sed mollis posuere nibh, nec sagittis libero rhoncus ut.</p>

        <p>Sed lacus odio, condimentum ut condimentum sit amet, tempor sit amet tellus. Cras vitae nunc ac quam iaculis tempus sit amet sed magna. Aenean ut sem ut ligula ornare blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim purus tristique libero volutpat pulvinar. Fusce vestibulum non tellus vel consectetur. Aliquam enim dolor, bibendum eget diam ac, consequat ultrices leo. Nulla quis lacus et nisi porttitor lacinia eget a urna. Maecenas et sem faucibus, consequat est quis, accumsan leo. Praesent posuere augue congue, lacinia odio et, congue purus.</p>

        <p>Pellentesque vel quam sagittis, rhoncus dolor non, varius metus. Donec pulvinar nisl quis ipsum finibus, quis varius massa ultrices. Nunc tincidunt malesuada vulputate. Sed condimentum, turpis eu imperdiet facilisis, mi nulla vehicula elit, sed tincidunt nunc metus in sapien. Proin porttitor lacus ut ipsum ornare egestas. Pellentesque laoreet volutpat pretium. In hac habitasse platea dictumst. Vivamus justo diam, placerat eu ligula at, pellentesque rhoncus arcu. Pellentesque egestas quam sit amet sagittis eleifend. Mauris tempus luctus mauris, eget volutpat nisi eleifend et. Vivamus aliquet a est dignissim bibendum. Curabitur porta laoreet nunc eget faucibus. Curabitur velit justo, hendrerit vitae mauris at, pretium dapibus massa.</p>
    </div>

  </Layout>
)

export default IndexPage
