import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Style from "./WorkLinks.module.css"
import {Link} from "gatsby"

export default ({ data }) => {
  const gitHubLink = data.frontmatter.gitHubLink
  return (
    <div className={Style.workLinks}>
        <a href={gitHubLink}><FontAwesomeIcon icon={faGithub} className={Style.icon}/></a> <Link to={data.fields.slug} ><p>Read More</p> </Link>
    </div>
  )
}