import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

import Style from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.thumbnail.childImageSharp.fluid
  return (
    <Layout>
      <div className={Style.content}>
      <Image className={Style.image} fluid={image}></Image>
        <h1>{post.frontmatter.title}</h1>
        <div className={Style.markdown} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
           }
      }
    }
  }
`

