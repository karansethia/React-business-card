import React from "react";
import ReactDOM from "react-dom"
import "./style.css"
import insta from "./insta.png"
import fb from "./fb.png"
import twitter from "./twitter.png"
import github from "./github.png"

export default function Icons(){
    return(
        <div className="icons-container">
            <img src={twitter} />
            <img src={github} />
            <img src={insta} />
            <img src={fb} />
        </div>
    )
}