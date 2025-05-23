import { NavLink } from "react-router-dom";
const links = [
    { path: '/', text: 'Write' },
    { path: 'epi', text: 'Read' },
    { path: 'about', text: 'About' }
];
  

const Header = () => {
    const headerStyle = {
        padding: "20px 0", 
        lineHeight: "1.5em",
        width: '100%',
        overflow: 'hidden'
    }
    return (
        <header style={headerStyle}>
            <h1
                style={{
                    fontSize: "6rem", fontWeight: "600", marginBottom: "1.5rem", lineHeight: "1em",
                    color: "#333", textTransform: "lowercase", textAlign: "center", fontStyle: "italic", 
                }}
            >
                Iberograficum
            </h1>
            <nav className="navbar">
                <ul>
                    {links.map((link) => {
                    return (
                        <li key={link.text}>
                            <NavLink to={link.path} >
                                {link.text}
                            </NavLink>
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header