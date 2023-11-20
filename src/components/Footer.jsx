const Footer = props => {

    return (
        <ul id="creditos" className="info wrap">
            <li style={{listStyle: "none"}}>Agradecimientos:</li>
            <li>No hubiera sido posible sin la <a href="https://www.unicode.org/L2/L2020/20047-north-palaeohispanic.pdf" target="_blank">Propuesta para codificar la escritura Palehispánica Norte</a> hecha
                por Joan Ferrer i Jané, Noemí Moncunill, Javier Velaza (Universitat de Barcelona) y Deborah Anderson, (UC Berkeley). Unicode L2020-20047</li>
            <li><a href="https://www.academia.edu/37179345/L_origen_i_el_desenvolupament_de_les_escriptures_paleohispàniques" target="_blank">L’origen i el desenvolupament
                de les escriptures paleohispàniques</a>, Joan Ferrer i Jané, 2018 </li>
            <li><a href="https://ifc.dpz.es/publicaciones/ebooks/id/3649" target="_blank">Acta Palehispanica XII. Revista sobre lenguas y culturas de la Hispania Antigua, 2017</a> </li>
            <li>Tú, por visitar este sitio :D</li>
            <li style={{listStyle: "none", textAlign: "center"}}>
            <hr />
            Desarrollado por <a href="https://surgever.com" target="_blank">Sergio&nbsp;Oliver</a>.
            Contacto:&nbsp;<a href="mailto:sergio.oliver@surgever.com">hi@surgever.com</a></li>
        </ul>
    )
}

export default Footer