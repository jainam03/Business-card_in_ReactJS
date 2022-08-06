import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import "./style.css"

function Index() {
    return (
        <div className="main-container">
            <About />
            <Info />
            <Interests />
            <Footer />
        </div>

    )
}

ReactDOM.render(<Index />, document.getElementById("container"))