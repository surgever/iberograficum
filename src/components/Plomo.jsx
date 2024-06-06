import PlomoUllastret from "@/img/C.2.3 Ullastret - Foto.png"
import { useParams } from 'react-router-dom';
import Transcription from '@/components/Transcription';

const Plomo = props => {
    let { code } = useParams();

    const epiData = props.epiData;
    const epiDB = props.epiDB;
    if(props.code) code = props.code ; 
    let epiContent = epiData.find((item) => item.code === code);
    { epiContent ? '' : epiContent = epiData.find((item) => item.code === '404') };
    let epiText = epiDB.epis[code] ? epiDB.epis[code] : 'Not found text';
    const { title, description } = epiContent;

    return (
        
        <div className="example">
            <figure id="plom"><a href={PlomoUllastret} target="_blank" rel="nofollow noreferrer">
                <img className="transition" src={PlomoUllastret} alt="Plomo Ullastret"/>
            </a></figure>
            <h2>{title == 'No encontrado' ? code : title}</h2>
            <Transcription epiText={epiText} code={code} />
        </div>
    )
}

export default Plomo