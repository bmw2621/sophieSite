import React from 'react';

const VideoCard = (props) => {

  const title = props.title
  const created = props.created
  const text = props.text
  const url = `https://www.youtube.com/watch?v=${props.videoId}`

  let image
  props.image ? image = props.image : image = null

  return (
    <div className="blogCard">
    {
      image &&
        <a href={url}>
          <img
            src={image}
            className="videoImage"
            alt="Youtube Video Thumbnail"
            />
        </a>
    }
      <div className="blogCardData">
        <a href={url} className="cardTitle">{title}</a>
        <h3 className="cardDate">{created}</h3>
        <div dangerouslySetInnerHTML={{ __html: text.split(' ').splice(0, 50).join(' ') + '...' }}></div>
      </div>
    </div>
  )
}

export default VideoCard
