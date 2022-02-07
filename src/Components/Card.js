import React from "react";
import ReactDOM from "react-dom"
import Info from "./Info";
import Buttons from "./Buttons";
import Description from "./Description";
import Icons from "./Icons";
import "./style.css"

export default function Card(){
    return(
        <section className="Card">
            <Info />
            <Buttons />
            <Description />
            <Icons />
        </section>
    );
}