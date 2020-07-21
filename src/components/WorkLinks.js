import React from "react"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Style from "./WorkLinks.module.css"

export default ({ frontmatter }) => {

  return (
    <div className={Style.workLinks}>
        <a href={frontmatter.gitHubLink}><FontAwesomeIcon icon={faGithub} className={Style.icon}/></a> <a href={frontmatter.link}><p>Try it out</p></a>
    </div>
  )
}