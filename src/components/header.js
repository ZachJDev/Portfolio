import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"
import "typeface-cooper-hewitt"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link className={style.siteTitle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={style.links}>
    <ul>
      <li>about me & resume</li>
      <li>work</li>
      <li>blog</li>
      <li>github</li>
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
