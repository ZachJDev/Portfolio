import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"
import "typeface-cooper-hewitt"

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
      <li><Link to="/about">about me & resume</Link></li>
      <li><Link to="/work/">work</Link></li>
      <li><Link to="/blog/">blog</Link></li>
      <li><a href="https://github.com/ZachJDev">github</a></li>

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
