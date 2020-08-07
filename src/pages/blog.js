import React from "react"
import Style from "./index.module.css"

import Layout from "../components/layout"
import Collection from "../components/collection"
import Card from "../components/card"
import {Helmet} from "react-helmet"

const Blog = ({data}) =>
{
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
          <title>Blog | Zach Johnson, Developer</title>
        </Helmet>
        <Layout title="Blog">
        <Collection sectionTitle="Blog Posts:">
    {data.blogs.edges.map(({node}) => (
      <Card className={Style.testDiv} data={node}></Card>
    ))}
    </Collection>
        </Layout>
        </>
    )
}
export const query = graphql`
query  {
   blogs: allMarkdownRemark( filter:{frontmatter:{type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          type
          date
          thumbnail {
           childImageSharp {
             fluid(maxWidth: 300, maxHeight: 200, fit: CONTAIN, background: "rgba(255,255,255,1)") {
               ...GatsbyImageSharpFluid
             }
           }
          }
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
 }
 
`
export default Blog