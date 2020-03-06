import React from "react"
import Style from "./card.module.css"

export default ({data}) =>{ 
    console.log(data.thumbnail)
    return (
    <div className={Style.info}>
   {data.thumbnail &&
    <div style={{
    backgroundImage: `url("${data.thumbnail}")`,
    backgroundSize: "cover",
    height: "50%",
    width: "100%",
    zIndex: "10"
    }}></div>}
    <h4>{data.title}</h4>
    <p>{data.date}</p>
    </div>
)}