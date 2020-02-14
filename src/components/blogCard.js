import React from 'react';
import Img from "gatsby-image"

const blogCard = (props) => {

  const title = props.title
  const created = props.created
  const text = props.text
  let image
  props.image ? image = props.image : image = null

  return (
    <div className="blogCard">
    {image && <Img fluid={image} className="cardImg"/>}
      <div className="blogCardData">
        <h1>{title}</h1>
        <h3>{created}</h3>
        <div dangerouslySetInnerHTML={{ __html: text.split(' ').splice(0, 50).join(' ') + '...' }}></div>
      </div>
    </div>
  )
}

export default blogCard
