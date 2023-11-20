import React from "react"
import ReactDOM from "react-dom"
//component file
import IMEContainer from "./components/IMEContainer"
import Plomo from "./components/Plomo"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

//scripts
import "./lib/iberice.js"

//stylesheet
import "./App.css"

ReactDOM.render(
    <React.StrictMode>
        <IMEContainer />
        <Plomo />
        <FAQ />
        <Footer />
    </React.StrictMode>,
 document.getElementById("root")
)