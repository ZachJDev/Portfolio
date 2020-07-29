/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Style from './layout.module.css'


import Header from "./header"

const Layout = ({ children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={Style.background}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
          position: "relative",
          // backgroundColor: `rgb(124,42,75)`,
          
        }}
      >
        <main>{children}</main>
      </div>
      </div>
        <div style= {{
          height: `45px`,
          overflow: `hidden`,
        }}>
        <footer style ={{
          backgroundColor: `rgba(0, 0, 0, .2)`,
          position: `relative`,
          width: `100%`,
          height: `100%`,
          overflow: `hidden`,
          
        }}><span  style={{
            // paddingLeft: `300px`,
          }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
           </span>
        </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
