import React, { useState } from "react"

const Accordion = props => {
    const [closed,setClosed] = useState("cerrado")

    const toggleClosed = () => {
        if(closed) {
            setClosed("") 
        } else {
            setClosed("cerrado") 
        }
    }

    return (
        <div className={"info " + closed}>
            <b className="cerrar" onClick={toggleClosed}>{props.title}</b>
            {props.content}
        </div>
    )
}

export default Accordion