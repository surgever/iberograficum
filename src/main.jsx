import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
//component file
import Iberograficum from "@/components/Iberograficum"
//scripts
import "./lib/iberice.js"
//stylesheet
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Iberograficum />
    </Router>
  </React.StrictMode>
)
 
