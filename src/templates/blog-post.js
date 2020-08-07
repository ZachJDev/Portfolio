import React from "react"
import { graphql } from "gatsby"
import moment from 'moment'
import Layout from "../components/layout"
import Image from "gatsby-image"
import {Helmet} from "react-helmet"

import Style from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.thumbnail.childImageSharp.fluid
  const date = moment(post.frontmatter.date).format("MMMM DD, YYYY")
  return ( 
    <>
    <Helmet>
        <meta charSet="utf-8" />
          <title>{post.frontmatter.title} | Zach Johnson, Developer</title>
        </Helmet>
    <Layout>
      <div className={Style.content}>
      <Image className={Style.image} fluid={image}></Image>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.type === "blog" && (<h3>{date}</h3>)}
        {post.frontmatter.type === "work" && (<h3 className={Style.links}><a href={post.frontmatter.link}> Try it Out</a> or <a href={post.frontmatter.gitHubLink}>Look at the Code</a></h3>)}
        <div className={Style.markdown} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        type
        title
        date
        gitHubLink
        link
        thumbnail {
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 800, fit: CONTAIN, background: "rgba(255,255,255,1)") {
                ...GatsbyImageSharpFluid
              }
            }
           }
      }
    }
  }
`

