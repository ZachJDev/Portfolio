import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from "./collection.module.css"


export default ({ sectionTitle, children, to }) => {

  return (
    <div className={style.outside}>
         <h2>{sectionTitle}</h2>
    <div className={style.chunk}>
      {children}
    </div>
    </div>
  )
}
