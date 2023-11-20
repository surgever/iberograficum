import React from "react"

const AreaLatIn = props => {

    const insertLetter = e => {
        if (e.target.tagName === "B") {
            const letter = e.target.innerText
            props.handleTextLatinProps(props.valueProps + letter)
        }
    }

    return (
        <div className="area latin">
            <div onClick={insertLetter}
                className="panel specials"
                >
                <i><b>ŕ</b><b>ś</b><b>ḱ</b><b>ḿ</b><b>ń</b></i>
                <i><b>m̌</b><b>ř</b><b>ŝ</b><b>â</b></i>
                <i><b>‡</b><b>I</b><b>L</b><b>Π</b><b>¼</b><b>½</b></i>
            </div>
            <textarea
                id="t" className="latin"
                value={props.valueProps}
                onChange={e => props.handleTextLatinProps(e.target.value)}
                autoFocus="autofocus"
                placeholder="Escriba aquí">
            </textarea>
        </div>
    )
}

export default AreaLatIn