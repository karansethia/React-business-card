import React from "react";
import ReactDOM from "react-dom"
import Image from "./image.jpg"
import "./style.css"

export default function Info(){
   return(
       <>
       <img src={Image} className="image" />
       <h1 className="Name">Karan Sethia</h1>
       <h2 className="Job">Front End Developer</h2>
       <h3 className="Website"><a>karansethia.com</a></h3>
       </>
   )
}