import React from 'react';
import Img from "gatsby-image"

const VideoCard = (props) => {

  const title = props.title
  const created = props.created
  const text = props.text
  let image
  props.image ? image = props.image : image = null

  console.log(image)

  return (
    <div className="blogCard">
    {
      image &&
      <img
        src={image}
        style={{"object-fit":"cover","width":"200px","height":"200px", "filter":"opacity(80%)","filter":"grayscale(100%)"}}
        />
    }
      <div className="blogCardData">
        <h1 className="cardTitle">{title}</h1>
        <h3 className="cardDate">{created}</h3>
        <div dangerouslySetInnerHTML={{ __html: text.split(' ').splice(0, 50).join(' ') + '...' }}></div>
      </div>
    </div>
  )
}

export default VideoCard
