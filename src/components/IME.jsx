import { useState, useEffect } from "react"
import Header from "./Header"
import OptionsBar from "./OptionsBar"
import AreaLatIn from "./AreaLatIn"
import AreaIberic from "./AreaIberic"
import AreaLatOut from "./AreaLatOut"
import iberice from  "../lib/iberice.js"

const IME = () => {
    // Input Methor Editor component
    const [direction,setDirection] = useState(getInitialOptions("direction"))
    const [mode,setMode] = useState(getInitialOptions("mode"))
    const [forceMode,setForceMode] = useState(getInitialOptions("forceMode"))
    const [textLatin,setTextLatin] = useState("")
    const [textIberic,setTextIberic] = useState("")
    const [textLatout,setTextLatout] = useState("")

    function getInitialOptions(item) {
        // getting stored items
        const temp = localStorage.getItem("options")
        const savedOptions = JSON.parse(temp)
        const defaultOptions = {
            direction : "lat2ibe",
            mode : "dual",
            forceMode : ""
        }
        if(savedOptions) {
            return savedOptions[item]
        } else {
            return defaultOptions[item]
        }
    }
    useEffect(() => {
        //storing items
        const temp = JSON.stringify({
            direction : direction,
            mode : mode,
            forceMode : forceMode
        })
        localStorage.setItem("options",temp)
    }, [direction,mode,forceMode])

    const handleMode = (chosenMode) => {
        if(forceMode === "force" && chosenMode === mode) {
            setForceMode("");
            // todo: deduce text mode
        } else {
            // Todo: add security filter
            setForceMode("force");
            setMode(chosenMode);
            if(direction === "lat2ibe") {
                setTextIberic(iberice(textLatin, chosenMode))
            } else {
                setTextLatout(iberice(textIberic, chosenMode, 1))
            }
        }
    }

    const handleDir = () => {
        if(direction === "lat2ibe") {
            setDirection("ibe2lat");
            setTextLatout(iberice(textIberic, mode, 1))
        } else {
            setDirection("lat2ibe");
        }
    }

    const replaceTextLatin = (newText) => {
        setTextLatin(newText)
        setTextIberic(iberice(newText, mode))
    }
    const replaceTextIberic = (newText) => {
        setTextIberic(newText)
        setTextLatout(iberice(newText, mode, 1))
    }
    const replaceTextLatout = (newText) => {
        setTextLatout(newText);
    }

    return (
        <div id="iberograficum" className={direction + ' ' + mode+ ' ' + forceMode}>
            <div className="wrap">
                <OptionsBar handleModeProps={handleMode} handleDirProps={handleDir}/>
                <AreaLatIn 
                    valueProps={textLatin}
                    dir={direction} mode={mode}
                    handleTextLatinProps={replaceTextLatin} handleTextIbericProps={replaceTextIberic}/>
                <AreaIberic
                    valueProps={textIberic}
                    dir={direction} mode={mode}
                    handleTextIbericProps={replaceTextIberic} handleTextLatoutProps={replaceTextLatout}
                />
                <AreaLatOut
                    valueProps={textLatout}/>
            </div>
        </div>
    )
}

export default IME