import PlomoUllastret from "@/img/C.2.3 Ullastret - Foto.png"
import PlomoPrat from "@/img/C.2.3 Ullastret - O.Prat.png"
import PicoAjos from "@/img/Pico_de_Los_Ajos_I.png"
import PicoAjosCalco from "@/img/Pico_de_Los_Ajos_I_texto.png"
import Pujol from "@/img/Plomo_Pujol.png"
import PujolCalco from "@/img/Plomo_Pujol-Calco.jpg"
import Sinarcas from "@/img/Estela de Sinarcas.png"
import SinarcasCalco from "@/img/Estela de Sinarcas - Calco.gif"
import Letreros from "@/img/vaso-letreros.png"
import LetrerosCalco from "@/img/vaso-letreros-calco.png"

import { useState } from "react"
import { useParams, NavLink } from 'react-router-dom';
import Transcription from '@/components/Transcription';
import Infobox from "@/components/Infobox"

const Plomo = props => {
    let { code } = useParams();

    const epiImg = {
        'GI.15.04' : {
            photo : PlomoUllastret,
            calco : PlomoPrat
        }, 
        'CS.14.01' : {
            photo : Pujol,
            calco : PujolCalco
        }, 
        'V.01.01' : {
            photo : Sinarcas,
            calco : SinarcasCalco
        }, 
        'V.13.03' : {
            photo : PicoAjos,
            calco : PicoAjosCalco
        }, 
        'V.06.008' : {
            photo : Letreros,
            calco : LetrerosCalco
        }
    }
    const epiData = props.epiData;
    const epiDB = props.epiDB;
    if(props.code) code = props.code ; 
    let epiContent = epiData.find((item) => item.code === code);
    { epiContent ? '' : epiContent = epiData.find((item) => item.code === '404') };
    const { title, description } = epiContent;
    let HesperiaURL = 'http://hesperia.ucm.es/consulta_hesperia/inscripciones_localidad_zonas_C_y_D.php?ref=' + code;

    // Search by code
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const handleSearchCode = newText => {
        setSearchText(newText.toUpperCase())
        // Search epiDB if 4 chars or more are filled in
        if(newText.length > 1) {
            // Search {newText} in the keys of epiDB.epis[key, reading] 
            let searchArray = [];
            for(let key in epiDB.epis) {
                if(key.toUpperCase().indexOf(newText.toUpperCase())!=-1) {
                    searchArray.push({key, 'text' : epiDB.epis[key]}  );
                }
            }
            setSearchResults(searchArray);
        } else if(newText.length === 0) {
            setSearchResults([]);
        }
    }
    const handleCloseSearch = e => {
        e.preventDefault()
        setSearchOpen( false )
        setSearchText('')
        setSearchResults([])
    }

    return (
        
        <div className={"example searchcode " + (searchOpen ? 'on' : 'off')}>
            {epiImg[code] && epiImg[code].photo &&
                <figure id="plom"><a href={epiImg[code].photo} target="_blank" rel="nofollow noreferrer">
                    <img className="transition" src={epiImg[code].photo} alt="Plomo "/>
                </a></figure>
            }
            <h2>
                {title != 'No encontrado' && title}
                <input type="text" className="hespCode"
                    placeholder={ searchOpen ? 'Search code' : 'Search...'}
                    onFocus={ () => setSearchOpen( true ) }
                    onBlur={ () => searchResults.length == 0 && setSearchOpen( false ) }
                    onChange={e => handleSearchCode(e.target.value)}
                    value={ searchOpen ? searchText : (epiDB.epis[code] ? code : '404')}
                />
                { searchText && searchResults.length >= 1 &&
                <li className='clear-li'>
                    <button onClick={handleCloseSearch}>✕</button>
                </li>
                }
                <ul className="results">
                    {searchResults.map((epi) => {
                        return (
                            <li key={epi.key}>
                                <NavLink to={'../'+epi.key} >
                                    <span>{epi.key}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </h2>
            <Infobox></Infobox>
            {epiDB.epis[code] &&
                <Transcription
                    epiText={epiDB.epis[code]}
                    epiImg={epiImg}
                    code={code}
                    />
            }
            <div className="links">
                {epiDB.epis[code] &&
                    <a target="_blank" href={HesperiaURL}> BDH </a>
                }
            </div>
        </div>
    )
}

export default Plomo