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
    let occlusive = -1;
    let accent = 0;
    const i = letter => {
        replaceTextIberic(textIberic + letter)
    }
    const enterIbericKey = (event) => {
        let kl = event.key; // pressed key letter 
        console.log('enterIbericKey: ');
        console.log(kl);
        if (kl == "'") { // pressed: accent
            event.preventDefault();
            if (accent < 2 && occlusive == -1) {
                accent++;
            }
        } else if(kl.length == 1 && !event.metaKey) {
            if (accent == 1 && ['a', 'e', 'i', 'o', 'u', 'k', 'l', 'm', 'n', 'r', 's'].indexOf(kl) > -1) { // Pressed lmrs
                event.preventDefault();
                switch (kl) {
                    case 'a': i('𐈀'); break;
                    case 'e': i('𐈂'); break;
                    case 'i': i('𐈄'); break;
                    case 'o': i('𐈆'); break;
                    case 'u': i('𐈈'); break;
                    case 'l': i('𐈦'); break;
                    case 'k': i('𐈏𐈒'); break;
                    case 'm': i('𐈪'); break;
                    case 'n': i('𐈨'); break;
                    case 'r': i('𐈮'); break;
                    case 's': i('𐈱'); break;
                };
                accent = 0;
            } else if (accent == 2 && (kl == 'a' || kl == 'm' || kl == 'r' || kl == 's')) { // Pressed lmrs
                event.preventDefault();
                switch (kl) {
                    case 'a': i('𐈦'); break;
                    case 'm': i('𐈫'); break;
                    case 'r': i('𐈭'); break;
                    case 's': i('𐈯'); break;
                };
                accent = 0;
            } else if (['a','e','i','o','u','y'].indexOf(kl) > -1) { // non accented vowels
                event.preventDefault(); 
                // process simple vowels and occlusive syllabes
                if(occlusive == -1) occlusive = 0;
                if(mode.status == 'nondual' //non dual 1&4 (complex) become 2&5 (simple) except ku
                    && (occlusive==1 && kl!='u' || occlusive == 4)) {
                    occlusive++;
                }
                switch (kl) {
                    case 'a': i(['𐈁','𐈐','𐈑','𐈊','𐈛','𐈜'][occlusive]); break;
                    case 'e': i(['𐈃','𐈓','𐈔','𐈋','𐈝','𐈞'][occlusive]); break;
                    case 'y':
                    case 'i': i(['𐈅','𐈕','𐈖','𐈌','𐈟','𐈠'][occlusive]); break;
                    case 'o': i(['𐈇','𐈗','𐈘','𐈍','𐈡','𐈢'][occlusive]); break;
                    case 'u': i(['𐈉','𐈙','𐈚','𐈎','𐈣','𐈤'][occlusive]); break;
                };
                occlusive = -1;
            } else {
                if (accent > 0) {
                    accent = 0;
                }
                if(occlusive > -1) {
                    // release occlusive because no vowel was pressed
                    i(['','𐈓','𐈔','𐈋','𐈝','𐈞'][occlusive]);
                    occlusive = -1;
                }
                if(['k', 'g', 'b', 't', 'd',  'c', 'j', 'p'].indexOf(kl) > -1) {
                    // store occlusives, values go from 1 to 5 : {0,k,g,b,t,d}
                    event.preventDefault(); 
                    if(kl=='c') occlusive = 1;
                    else if(kl=='j') occlusive = 2;
                    else if(kl=='p') occlusive = 3;
                    else occlusive = [0,'k','g','b','t','d'].indexOf(kl);
                } else if(kl.match(/^[szçxrnmflqvwñh\-=]$/)) {
                    // proccess simple iberic consonants
                    event.preventDefault();
                    switch (kl) {
                        case 's': i('𐈰'); break;
                        case 'x': i('𐈯'); break;
                        case 'z': case 'ç': i('𐈱'); break;
                        case 'r': i('𐈬'); break;
                        case 'n': i('𐈩'); break;
                        case 'ñ': i('𐈨'); break;
                        case 'm': i('𐈧'); break;
                        case 'l': i('𐈥'); break;
                        case 'f': i('𐈲'); break;
                        case 'q': i('𐈙'); break;
                        case 'w': i('𐈚'); break;
                        case 'v': i('𐈉'); break;
                        case 'h': i(''); break;
                        case 'L': i('𐈴'); break;
                        case '-': i('𐈶'); break;
                        case '=': i('𐈷'); break;
                    }
                } else if(kl.match(/[\d]/g)) {
                    // proccess numbers 1->I 5->IIIII
                    event.preventDefault();
                    i('𐈳'.repeat(Number(kl)));
                }
            }
        }
    }

    return (
        <div id="iberograficum" className={direction + ' ' + mode+ ' ' + forceMode}>
            <div className="wrap">
                <OptionsBar handleModeProps={handleMode} handleDirProps={handleDir}/>
                <AreaLatIn 
                    valueProps={textLatin}
                    dir={direction} mode={mode}
                    handleTextLatinProps={replaceTextLatin}
                    handleTextIbericProps={replaceTextIberic}/>
                <AreaIberic
                    valueProps={textIberic}
                    dir={direction} mode={mode}
                    handleTextIbericProps={replaceTextIberic}
                    handleTextLatoutProps={replaceTextLatout}
                    handleIbericKeyProps={enterIbericKey}
                />
                <AreaLatOut
                    valueProps={textLatout}/>
            </div>
        </div>
    )
}

export default IME