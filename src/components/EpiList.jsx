
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const epilinks = [
    { path: 'GI.15.04', text: 'Plomo de Ullastret' },
    { path: 'V.06.008', text: 'Vaso de los letreros' },
];

const EpiList = props => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText,setSearchText] = useState("")
    const epiDB = props.epiDB;
    const handleSearchText = newText => {
        console.log('Search text is : ' + newText)
        setSearchText(newText)
        // Search epiDB if 4 chars or more are filled in
        if(newText.length > 3) {

        }
    }

    return (
        <nav className={"navbar " + (searchOpen ? 'on' : 'off')}>
            <ul>
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
            </ul>
        </nav>
    )
}

export default EpiList