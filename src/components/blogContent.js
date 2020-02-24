import React from 'react';
import BlogCard from "./blogCard"

const BlogContent = (props) => {

  const articles = props.articles;



  return (
    <>
      {
        articles.map((article)=>{

          return (
              <BlogCard
                title={article.title}
                created={article.created}
                image={article.relationships.field_image && article.relationships.field_image.localFile.childImageSharp.fluid}
                text={article.body.processed}
                key={article.id}
                id={article.id}
                full={false} />
          )
        })
      }
    </>
  )
}

export default BlogContent;
