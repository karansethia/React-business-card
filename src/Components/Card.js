import React from "react";
import ReactDOM from "react-dom"
import Info from "./Info";
import Buttons from "./Buttons";
import "./style.css"

export default function Card(){
    return(
        <section className="Card">
            <Info />
            <Buttons />
        </section>
    );
}