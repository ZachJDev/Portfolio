import React from "react"
import Style from "./card.module.css"
import Image from "gatsby-image"
import {Link} from "gatsby"

export default ({ data }) => {
    const frontmatter = data.frontmatter
    let thumbnailFluid = frontmatter.thumbnail.childImageSharp.fluid
  return (
    <div className={Style.info}>
      {thumbnailFluid && (
 
          <Image className={Style.image} fluid={thumbnailFluid}></Image>
        
      )}
      <Link className={Style.link} to={data.fields.slug}><h4>{frontmatter.title}</h4></Link>
      <p>{frontmatter.date}</p>
    </div>
  )
}
