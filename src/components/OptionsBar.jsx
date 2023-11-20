import React from "react"

const OptionsBar = props => {

    return (
        <div className="modes">
            <i className="mode"> 
                <b className="b1" onClick={() => props.handleModeProps('nondual')}>−</b>
                <b className="b2" onClick={() => props.handleModeProps('dual')}>+</b>
                <b className="b3" onClick={() => props.handleModeProps('trial')}>++</b>
            </i>
            <i className="direction">
                <b onClick={() => props.handleDirProps()}>
                    <span>Abc</span><figure></figure><em>→</em>
                </b>
            </i>
    </div>
    )
}

export default OptionsBar