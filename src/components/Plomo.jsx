import PlomoUllastret from "@/img/C.2.3 Ullastret - Foto.png"
import PlomoPrat from "@/img/C.2.3 Ullastret - O.Prat.png"

const Plomo = () => {

    return (
        
        <div className="example">
            <figure id="plom"><a href={PlomoUllastret} target="_blank" rel="nofollow noreferrer">
                <img className="transition" src={PlomoUllastret} alt="Plomo Ullastret"/>
            </a></figure>
            <div className="wrap">
                <table><tbody>
                    <tr><th colSpan="2"><img src={PlomoPrat} alt="Calco Plomo Ullastret" /></th></tr>
                    <tr>
                        <td className="ibero"><p>𐈀𐈬​:​𐈊𐈯𐈅𐈀𐈭𐈂𐈋</p></td>
                        <td className="latin">ar : basiar̆ebe</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈂𐈊𐈮𐈅𐈐𐈧𐈂​:​𐈣𐈅𐈓𐈯𐈅𐈮𐈀​:​𐈍𐈬𐈯𐈝​:​𐈀𐈊𐈮𐈔𐈍𐈬𐈯𐈝​:​𐈝𐈮</td>
                        <td className="latin">ebaŕikame : tuikesiŕa : borste : abaŕgeborste : teŕ</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈠𐈭𐈯​:​𐈊𐈅𐈞𐈯𐈌​:​𐈩𐈂𐈅𐈝𐈔𐈭𐈉​:​𐈛𐈮𐈋𐈥𐈅𐈇𐈭𐈙​:​𐈟𐈧𐈇𐈭</td>
                        <td className="latin">dir̆s : baidesbi : neiteger̆u : taŕbelior̆ku : timor̆</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈕𐈮​:​𐈊𐈬𐈜𐈱𐈗​:​𐈀𐈩𐈋𐈅𐈙​:​𐈊𐈅𐈞𐈯𐈅𐈬​:​𐈯𐈀𐈥𐈤𐈗​:​𐈙𐈥𐈂𐈛𐈋𐈭𐈙+[ &nbsp;</td>
                        <td className="latin">kiŕ : bardaśko : anbeiku : baidesir : salduko : kuletaber̆ku+[</td>
                    </tr>
                    <tr>
                        <td className="ibero">𐈌𐈖𐈥𐈠𐈭𐈯𐈝​:​𐈂𐈮𐈂𐈱𐈉​:​𐈗𐈠𐈊𐈩𐈂𐈩​:​𐈂𐈋𐈬𐈑​:​𐈛𐈱𐈐𐈥𐈅𐈮𐈯</td>
                        <td className="latin">bigildir̆ste : eŕeśu : kodibanen : eberga : taśkaliŕs</td>
                    </tr>
                    <tr>
                        <td className="ibero">&nbsp; 𐈥𐈇𐈭𐈯𐈀​:​𐈊𐈟𐈌​:​𐈌𐈉𐈭𐈛𐈩𐈂𐈱​:​𐈯𐈀𐈥𐈤𐈖𐈥𐈂𐈭𐈙​:​𐈖𐈿</td>
                        <td className="latin">&nbsp; &nbsp; lor̆sa : batibi : biur̆taneś : saldugiler̆ku : gi</td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    )
}

export default Plomo