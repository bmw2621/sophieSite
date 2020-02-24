import React from 'react';
import Img from "gatsby-image"
import { Link } from 'gatsby';

const BlogCard = (props) => {

  // Create stateful variale to keep track if the entire article is displayed or not
  let title = props.title
  let created = props.created
  let text = props.text.split(' ').splice(0, 50).join(' ') + '...'
  let id = props.id
  let image = props.image

  return (
      <Link className="blogCardLink" to={`/${title.split(" ").join("_") + "_" + created.split(" ").join("-")}`}>
        <div className="blogCard"  id={`${id}`}>
        {
          image &&
          <Img
            fluid={image}
            className="imageWrapper"
            imgStyle={{"objectFit":"cover", "minHeight":"200px", "filter":"brightness(155%) grayscale(88%) invert(15%)" }}
            />
        }
          <div className="blogCardData">
            <h1 className="cardTitle">{title}</h1>
            <h3 className="cardDate">{created}</h3>
            <div className="blogContent" dangerouslySetInnerHTML={{ __html: text}}></div>
          </div>
        </div>
      </Link>
  )
}

export default BlogCard
