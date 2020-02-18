import React from 'react';
import VideoCard from "./videoCard"

const VideoContent = (props) => {

  const articles = props.articles;

  return (
    <>
      {
        articles.map((article)=>{
          {console.log(article)}

          return (
              <VideoCard
                title={article.node.title}
                created={article.node.publishedAt}
                image={article.node.thumbnail.url}
                text={article.node.description} />
          )
        })
      }
    </>
  )
}

export default VideoContent;
