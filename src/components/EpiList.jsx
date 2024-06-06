
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const epilinks = [
    { path: 'GI.15.04', text: 'Plomo de Ullastret' },
    { path: 'V.06.008', text: 'Vaso de los letreros' },
];

const EpiList = props => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText,setSearchText] = useState("")
    const [searchResults,setSearchResults] = useState([])
    const epiDB = props.epiDB;
    
    const handleSearchText = newText => {
        setSearchText(newText)
        // Search epiDB if 4 chars or more are filled in
        if(newText.length > 3) {
            // Search {newText} in readings of epiDB.epis[key, reading] 
            // and find all epigraphy items that match it
            let searchArray = [];
            for(let key in epiDB.epis) {
                if(epiDB.epis[key].indexOf(newText)!=-1) {
                    searchArray.push({key, 'text' : epiDB.epis[key]}  );
                }
            }
            setSearchResults(searchArray);
        }
    }
    const handleCloseSearch = e => {
        e.preventDefault()
        setSearchOpen( false )
        setSearchText('')
        setSearchResults([])
    }

    return (
        <nav className={"navbar " + (searchOpen ? 'on' : 'off')}>
            <ul className="featured">
                {epilinks.map((link) => {
                return (
                    <li key={link.text}>
                        <Link to={link.path} >
                            {link.text}
                        </Link>
                    </li>
                );
                })}
                <li className='search-li'>
                    <input type='text'
                        placeholder={ searchOpen ? 'Search epigraphy content' : 'Search...'}
                        onFocus={ () => setSearchOpen( true ) }
                        onBlur={ () => setSearchOpen( false ) }
                        onChange={e => handleSearchText(e.target.value)}
                        value={searchText}
                    />
                </li>
                <li className='clear-li'>
                    <button onClick={handleCloseSearch}>✕</button>
                </li>
            </ul>
            <ul className="results">
                {searchResults.map((epi) => {
                    return (
                        <li key={epi.key}>
                            <Link to={epi.key} >
                                {epi.key}: {epi.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default EpiList