import React from "react"

const AreaLatOut = props => {

    return (
        <div className="area latout">
            <textarea
                id="d" className="latin"
                value={props.valueProps}
                readOnly="readonly"
                placeholder="Aquí se transcribirá lo que escribas encima">
            </textarea>
        </div>
    
    )
}

export default AreaLatOut