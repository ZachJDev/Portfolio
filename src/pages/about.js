import React from "react"
import {Helmet} from "react-helmet"

import Layout from "../components/layout"

import Style from './about.module.css'

const about = ({data}) =>
{
  const lead = data.aboutMe.siteMetadata.aboutMe
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
          <title>About me | Zach Johnson, Developer</title>
        </Helmet>
        <Layout title="About">
        <div className={Style.aboutMe}>
        <h2 className={Style.bigBlurb}>{lead}</h2>
        <p className={Style.smallBlurb}> My mission is to leverage web technology to create products that are intuitive, consistent, and that leave the user with a positive experience. I'm a self-taught full-stack developer and have focused my education on Javascript, Node.js, CSS, and React. I'd love the opportunity to explore new technologies and would love to connect with anyone interested in working with me. </p>
        </div>
        <div className={Style.resume}>
           <iframe title="resumé" src={"https://drive.google.com/file/d/1-pEt7oJdXkK-xaRiio8lCkr6DhKLe25Q/preview?usp=sharing"} width="100%" height="900px" ></iframe>

            
        </div>
        </Layout>
        </>
    )
}
export const query = graphql`
  {
   aboutMe: site {
        siteMetadata {
          aboutMe
        }
      }
    }
`
export default about