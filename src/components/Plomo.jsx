import PlomoUllastret from "@/img/C.2.3 Ullastret - Foto.png"
import PlomoPrat from "@/img/C.2.3 Ullastret - O.Prat.png"
import { useParams } from 'react-router-dom';

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
            <pre>{epiText}</pre>
            <div className="wrap">
                <table><tbody>
                    <tr><th colSpan="2"><img src={PlomoPrat} alt="Calco Plomo Ullastret" /></th></tr>
                    <tr>
                        <td className="ibero"><p>𐈀𐈬​:​𐈊𐈯𐈅𐈀𐈭𐈂𐈋</p></td>
                        <td className="latin">ar : basiařebe aasdas</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈂𐈊𐈮𐈅𐈐𐈧𐈂​:​𐈣𐈅𐈓𐈯𐈅𐈮𐈀​:​𐈍𐈬𐈯𐈝​:​𐈀𐈊𐈮𐈔𐈍𐈬𐈯𐈝​:​𐈝𐈮</td>
                        <td className="latin">ebaŕikame : tuikesiŕa : borste : abaŕgeborste : teŕ</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈠𐈭𐈯​:​𐈊𐈅𐈞𐈯𐈌​:​𐈩𐈂𐈅𐈝𐈔𐈭𐈉​:​𐈛𐈮𐈋𐈥𐈅𐈇𐈭𐈙​:​𐈟𐈧𐈇𐈭</td>
                        <td className="latin">diřs : baidesbi : neitegeřu : taŕbeliořku : timoř</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈕𐈮​:​𐈊𐈬𐈜𐈱𐈗​:​𐈀𐈩𐈋𐈅𐈙​:​𐈊𐈅𐈞𐈯𐈅𐈬​:​𐈯𐈀𐈥𐈤𐈗​:​𐈙𐈥𐈂𐈛𐈋𐈭𐈙+[ &nbsp;</td>
                        <td className="latin">kiŕ : bardaśko : anbeiku : baidesir : salduko : kuletabeřku+[</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈌𐈖𐈥𐈠𐈭𐈯𐈝​:​𐈂𐈮𐈂𐈱𐈉​:​𐈗𐈠𐈊𐈩𐈂𐈩​:​𐈂𐈋𐈬𐈑​:​𐈛𐈱𐈐𐈥𐈅𐈮𐈯</td>
                        <td className="latin">bigildiřste : eŕeśu : kodibanen : eberga : taśkaliŕs</td>
                    </tr>
                    <tr>
                        <td className="ibero">&nbsp; 𐈥𐈇𐈭𐈯𐈀​:​𐈊𐈟𐈌​:​𐈌𐈉𐈭𐈛𐈩𐈂𐈱​:​𐈯𐈀𐈥𐈤𐈖𐈥𐈂𐈭𐈙​:​𐈖𐈿</td>
                        <td className="latin">&nbsp; &nbsp; lořsa : batibi : biuřtaneś : saldugileřku : gi</td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    )
}

export default Plomo