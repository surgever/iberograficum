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

import { useParams } from 'react-router-dom';
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

    return (
        
        <div className="example">
            {epiImg[code] && epiImg[code].photo &&
                <figure id="plom"><a href={epiImg[code].photo} target="_blank" rel="nofollow noreferrer">
                    <img className="transition" src={epiImg[code].photo} alt="Plomo "/>
                </a></figure>
            }
            <h2>
                {title != 'No encontrado' && title}
                <input className="hespCode" type="text" value={(epiDB.epis[code] ? code : '404')} />
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