import React from "react"
import Accordion from  "./Accordion.js"

const FAQ = props => {
    const faqFontUse = <>
        <p>Obviamente esta escritura es todavía experimental, por lo que para copiar y pegar hay que asegurarse que el medio de destino los mostrará con la fuente correcta.</p>
        <p id="descarga" className="descarga">Para empezar a usarlo en su ordenador, la fuente, que se llama "PHN-Basiarebe",  está disponible para <strong>descargar</strong> aquí:<br />
            <b><a className="btn font" href="?descargar">PHN-Basiarebe.ttf</a></b>
            </p>
        <p>Una vez instale la fuente en su ordenador se podrá usar en otras aplicaciones. </p>
        <ul>
            <li><strong>PDF:</strong> al guardar el pdf, la fuente se incluye en el archivo, por lo que cualquiera podrá leerlo correctamente.</li>
            <li><strong>DOC:</strong> puedes usarla en Word y otros procesadores de texto y ofimática, pero para enviarlo a otras personas tienes que usar alguna función para que incluya la fuente al guardar el documento, si tu programa no permite eso puedes pedir al receptor del documento que descargue e instale la fuente.</li>
            <li><strong>Web:</strong> con la declaración @font-face puedes incluir la fuente para que los lectores visualicen correctamente.</li>
            <li><strong>Email y otros:</strong> para que el destinatario pueda visualizar los caracteres ibéricos debe instalar la fuente en su ordenador.</li>
        </ul>
    </>

    const faqCompatibility =  <>
        <p>Como se dice arriba, el proyecto está en fase beta. La propuesta 20047 (enero 2020) está bastante madura y previsiblemente no cambiaría demasiado, pero si en la codificación final de unicode se efectuaran cambios mayores, sí se rompería la compatiblidad. </p>
        <p>Específicamente eso pasaría si se mueven de posición los caracteres actuales. Por ejemplo, si se añadiera una O con un travesaño extra y se colocara junto a las otras oes, los caracteres que van después, como la U, las consonantes y todo lo que sigue, se verían desplazados en su numeración.</p>
        <p>Sin embargo, si las nuevas adiciones se colocaran al final no rompería la retrocompatibilidad, porque no estaría desplazando ningún carácter. </p>
    </>

    const faqSeparation = <>
        <p>Para los puntos característicos de separación, a falta de una recomendación clara, se recomienda usar el signo de dos puntos (:), que es el que se utiliza en las transcripciones paleohispánicas y es más accesible porque aparece directamente en todos los teclados.</p>
        <p>Nótese que el carácter de dos puntos en la fuente "PHN-Basiarebe" se visualiza con 3 punciones verticales, esto es porque la fuente está basada en el Plomo de Ullastret, pero en otra fuente podrían visualizarse 2, 1 u otra cantidad de puntos según el modelo de referencia. Para mostrar explícitamente una cantidad determinada de puntos pueden usarse los siguientes caracteres (1·  2⁚ 3⁝ 4⁞). </p>
        <p>Para mantenerse fiel a la propuesta 20047, la fuente recoge un carácter en la posición U+10238 que esta menciona. Sin embargo, en adelanto de la respuesta del comité, que es desfavorable a ello, esta app no lo utiliza.</p>
    </>

    const faqComposition= <>
        <p>Lo he desarrollado dividiendolo en tres partes relacionadas:</p>
        <ul>
            <li>1. <strong>PHN-Basiarebe</strong>: Tipografía. Está basada en el Gran Plomo de Ullastret, referencia C.02.03, que contiene un texto dual extenso por lo que es un modelo ideal.</li>
            <li>2. <strong>Iberice</strong>: Transcripción. Función que transcribe latín ↔ ibérico según el modo y dirección que se le indique, a través de ocho mapas de caracteres. </li>
            <li>3. <strong>Iberograficum</strong>: Aplicación. Es una web app que sirve para visualizar la fuente y usar la función de transcripción, además incluye las instrucciones, ejemplos de transcripciones y un IME (método de entrada) para escribir caracteres ibéricos directamente desde el teclado.</li>
        </ul>
    </>

    const faqLicense = <>
        <p>Iberograficum es software libre! </p>
        <p>Puedes reutilizarlo y adaptarlo a otros proyectos con la licencia <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/es/deed.es" target="_blank" rel="nofollow">Creative Commons BY-NC-SA</a>.
            <strong>Texto completo: </strong>
            <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/es/legalcode.es" target="_blank">Español</a> / <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/legalcode" target="_blank">English</a>.</p>
        <p>Por favor, cítese de esta manera:  Iberograficum (https://surgever.com/iberograficum), Sergio Oliver, 2021; ?></p>
    </>
    const faqGente = <p>Hola mi gente</p>

    return (
        <div id="doc">
            <div id="faq" className="wrap">
                <h2>FAQ - Preguntas Frecuentes </h2>
                <Accordion title="Usar la fuente en otros documentos" content={faqFontUse}/>
                <Accordion title="Compatibilidad futura" content={faqCompatibility}/>
                <Accordion title="Separación de palabras" content={faqSeparation}/>
                <Accordion title="Composición del proyecto" content={faqComposition}/>
                <Accordion title="Licencia" content={faqLicense}/>
            </div>
        </div>
    )
}

export default FAQ