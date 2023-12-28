
import { Link } from 'react-router-dom';

const epilinks = [
    { path: 'GI.15.04', text: 'Plomo de Ullastret' },
    { path: 'V.06.008', text: 'Vaso de los letreros' },
];

const EpiList = () => {
    const headerStyle = {
        padding: "20px 0", 
        lineHeight: "1.5em",
    }
    return (
        <nav className="navbar">
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
            </ul>
        </nav>
    )
}

export default EpiList