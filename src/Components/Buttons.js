import React from "react";
import ReactDOM from "react-dom"
import "./style.css"
import emailimg from "./email.png"
import linkedinimg from "./linkedin.png"

export default function Buttons(){
    return(
        <div className="Button-holder">
            <button className="btn email"><img src={emailimg} />Email</button>
            <button className="btn linkedin"><img src={linkedinimg} />LinkedIn</button>
        </div>
    )
}