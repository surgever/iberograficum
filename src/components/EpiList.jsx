
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const epilinks = [
    { path: 'GI.15.04', text: 'Plomo de Ullastret' },
    { path: 'V.06.008', text: 'Vaso de los letreros' },
    { path: 'V.13.03', text: 'Pico de los Ajos' },
    { path: 'CS.14.01', text: 'Plomo de Pujol' },
    { path: 'V.01.01', text: 'Estela de Sinarcas' },
];

const EpiList = props => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const epiDB = props.epiDB;
    
    const handleSearchText = newText => {
        setSearchText(newText.toLowerCase())
        // Search epiDB if 4 chars or more are filled in
        if(newText.length > 3) {
            // Search {newText} in readings of epiDB.epis[key, reading] 
            // and find all epigraphy items that match it
            let searchArray = [];
            for(let key in epiDB.epis) {
                if(epiDB.epis[key].indexOf(newText.toLowerCase())!=-1) {
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
        <nav className={"navbar search " + (searchOpen ? 'on' : 'off')}>
            <ul className="featured">
                { !searchOpen && epilinks.map((link) => {
                return (
                    <li key={link.text}>
                        <NavLink to={link.path} >
                            {link.text}
                        </NavLink>
                    </li>
                );
                })}
                <li className='search-li'>
                    <input type='text'
                        placeholder={ searchOpen ? 'Search epigraphy content' : 'Search...'}
                        onFocus={ () => setSearchOpen( true ) }
                        onBlur={ () => searchResults.length == 0 && setSearchOpen( false ) }
                        onChange={e => handleSearchText(e.target.value)}
                        value={searchText}
                    />
                </li>
                { searchText && 
                <li className='clear-li'>
                    <button onClick={handleCloseSearch}>✕</button>
                </li>
                }
            </ul>
            <ul className="results">
                {searchResults.map((epi) => {
                    return (
                        <li key={epi.key}>
                            <NavLink to={epi.key} >
                                <span>{epi.key}</span> {epi.text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default EpiList