import React from "react"
import { Link } from "gatsby"
import style from "./index.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Collection from "../components/collection"
import Card from "../components/card"

const IndexPage = ({data}) =>
 { console.log(data)
   return (
  <>
  <canvas className={style.canvas}></canvas>
  <Layout>
  <div className={style.main} >
    <SEO title="Home" />
    <div className="box">
    <h1>Hi people</h1>
    <Collection sectionTitle="Work">
    {data.works.edges.map(({node}) => (
      <Card className={style.testDiv} data={node}></Card>
    ))}
      <Link className={style.showMore} to="/work/"><span class="hide">See</span><span>More</span><span>Work...</span></Link>
    </Collection>
    <Collection sectionTitle="Blog">
    {data.blogs.edges.map(({node}) => (
      <Card className={style.testDiv} data={node}></Card>
    ))}
      <Link className={style.showMore}  to="/blog/"><span>See</span><span>More</span><span>Posts...</span></Link>
    </Collection>
    </div>
    <div></div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/my-files/">Go to page 2</Link>
    </div>
  </Layout>
  </>
)}

export const query = graphql`
query query {
  works: allMarkdownRemark(limit: 3, filter:{frontmatter:{type: {eq: "work"}}}) {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           type
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
   blogs: allMarkdownRemark(limit: 3, filter:{frontmatter:{type: {eq: "blog"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          type
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
 }
 
`

export default IndexPage
