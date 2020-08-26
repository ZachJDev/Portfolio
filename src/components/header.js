import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"
import "typeface-cooper-hewitt"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={style.siteTitle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={style.links}>
    <ul>
      <li><Link to="/about">About Me & Resume</Link></li>
      <li><Link to="/work/">Work</Link></li>
      <li><Link to="/blog/">Blog</Link></li>
      <li><a href="https://github.com/ZachJDev"><FontAwesomeIcon icon={faGithub} className={style.icon}/></a></li>
      <li><a href="https://www.linkedin.com/in/zachary-j-a658a11b0/"> <FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a></li>
      <li><a href="mailto:ZachJDev2121@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className={style.icon}/></a></li>

    </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
