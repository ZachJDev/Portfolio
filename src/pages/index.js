import React from "react"
import { Link } from "gatsby"
import Style from "./index.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import MySketch from "../components/Sketch"
import Collection from "../components/collection"
import Card from "../components/card"
import "typeface-source-sans-pro"

const IndexPage = ({data}) =>
 { 
  const lead = data.aboutMe.siteMetadata.aboutMe
   return (
  <>
 <MySketch className={Style.canvas} />
  <Layout>
  <div className={Style.main} >
    <SEO title="Home" />
    <h2 className={Style.about}>{lead}</h2>
    <div className={Style.box}>
    <Collection sectionTitle="Things I've Made:" to="/work">
    {data.works.edges.map(({node}) => (
      <Card className={Style.testDiv} data={node}></Card>
    ))}
      <Link className={Style.showMore} to="/work/"><span className={Style.seeMore}><p>see more</p> <FontAwesomeIcon icon={faChevronRight} className={Style.icon}/></span> </Link>
    </Collection>
    <Collection sectionTitle="Things I've Written:">
    {data.blogs.edges.map(({node}) => (
      <Card className={Style.testDiv} data={node}></Card>
    ))}
      <Link className={Style.showMore}  to="/blog/"> <span className={Style.seeMore}><p>see more</p> <FontAwesomeIcon icon={faChevronRight} className={Style.icon}/></span></Link>
    </Collection>
    </div>
    </div>
  </Layout>
  </>
)}

export const query = graphql`
query query {
  works: allMarkdownRemark(limit: 3, filter:{frontmatter:{type: {eq: "work"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
   blogs: allMarkdownRemark(limit: 3, filter:{frontmatter:{type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
             fluid {
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
  aboutMe: site {
        siteMetadata {
          aboutMe
        }
      }
 }
 
`

export default IndexPage
