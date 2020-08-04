import React from "react"
import Style from "./card.module.css"
import Image from "gatsby-image"
import {Link} from "gatsby"
import WorkLinks from "./WorkLinks"

export default ({ data }) => {

    const frontmatter = data.frontmatter
    let thumbnailFluid = frontmatter.thumbnail ? frontmatter.thumbnail.childImageSharp.fluid : null
    const excerptText = (frontmatter.type === "work") ? frontmatter.description : data.excerpt

  return (

    <div className={Style.info}>
      { frontmatter.thumbnail && thumbnailFluid && (
          <div className={Style.imageWrap}>
          <Image className={Style.image} fluid={thumbnailFluid}></Image>
          </div>
      )}
      <div className={Style.infoBody}>
      <div className={Style.nameAndDate}>
      <Link className={Style.link} to={data.fields.slug}><h4 className={Style.title}>{frontmatter.title}</h4>
       {/* <h4 className={Style.date}>{frontmatter.date}</h4> */}
       </Link>
      </div>
      <p className={Style.excerpt}>{excerptText}</p>
      {frontmatter.type === "work"  && (<WorkLinks className={Style.workLinks} data={data}/>)}
      </div>
    </div >
  )
}
