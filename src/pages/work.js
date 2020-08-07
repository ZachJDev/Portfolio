import React from "react"
import {Helmet } from "react-helmet"
import Style from "./index.module.css"

import Layout from "../components/layout"

import Collection from "../components/collection"
import Card from "../components/card"

const Work = ({data}) =>
{
    return (
        <>
                <Helmet>
        <meta charSet="utf-8" />
          <title>Work | Zach Johnson, Developer</title>
        </Helmet>
        <Layout>
        <Collection sectionTitle="Work">
    {data.works.edges.map(({node}) => (
      <Card className={Style.testDiv} data={node}></Card>
    ))}
    </Collection>
        </Layout>
        </>
    )
}

export const query = graphql`
query {
  works: allMarkdownRemark(filter:{frontmatter:{type: {eq: "work"}}}, sort: {fields: frontmatter___date, order: DESC}) {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           type
           date
           gitHubLink
           link
           description
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

export default Work