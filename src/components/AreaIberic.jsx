import React from "react"

const AreaIberic = props => {

    const insertSign= e => {
        if (e.target.tagName === "B") {
            const letter = e.target.innerText
            props.handleTextIbericProps(props.valueProps + letter)
        }
    }

    return (
        <div className="area iberic iw phn">
            <div className="panel signary" onClick={insertSign}>
                <table><tbody>
                    <tr><td><b>&#x10200;</b><b>&#x10201;</b></td><td className="ka"><b>&#x10210;</b><b>&#x10211;</b></td><td><b>&#x1020a;</b></td><td><b>&#x1021b;</b><b>&#x1021c;</b></td><td><b>&#x1022f;</b><b>&#x10230;</b><b>&#x10231;</b></td></tr>
                    <tr><td><b>&#x10202;</b><b>&#x10203;</b></td><td><b>&#x10213;</b><b>&#x10214;</b></td><td><b>&#x1020b;</b></td><td><b>&#x1021d;</b><b>&#x1021e;</b></td><td><b>&#x1022d;</b><b>&#x1022e;</b><b>&#x1022c;</b></td></tr>
                    <tr><td><b>&#x10204;</b><b>&#x10205;</b></td><td><b>&#x10215;</b><b>&#x10216;</b></td><td><b>&#x1020c;</b></td><td><b>&#x1021f;</b><b>&#x10220;</b></td><td><b>&#x10228;</b><b>&#x10229;</b><b>&#x10227;</b></td></tr>
                    <tr><td><b>&#x10206;</b><b>&#x10207;</b></td><td><b>&#x10217;</b><b>&#x10218;</b></td><td><b>&#x1020d;</b></td><td><b>&#x10221;</b><b>&#x10222;</b></td><td><b>&#x10226;</b><b>&#x1022b;</b><b>&#x1022a;</b></td></tr>
                    <tr><td><b>&#x10208;</b><b>&#x10209;</b></td><td><b>&#x10219;</b><b>&#x1021a;</b></td><td><b>&#x1020e;</b></td><td><b>&#x10223;</b><b>&#x10224;</b></td><td><b>&#x10225;</b><b>&#x10232;</b><span className="num">+</span></td></tr>
                    <tr className="numerals"><td colSpan="5"><b>&#x1020f;</b><b>&#x10212;</b><b>&#x10233;</b><b>&#x10234;</b><b>&#x10235;</b> <b>&#x10237;</b><b>&#x10236;</b> <b>·</b><b>&#x205a;</b><b>&#x205d;</b><b>&#x205e;</b></td></tr>
                </tbody></table>
            </div>
            <textarea id="i" placeholder="..."
                value={props.valueProps}
                onChange={e => props.handleTextIbericProps(e.target.value)}
                onKeyDown={e => props.handleIbericKeyProps(e)}
                // readOnly={props.dir === 'lat2ibe'}
            ></textarea>
        </div>
    )
}

export default AreaIberic