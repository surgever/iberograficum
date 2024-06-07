import PlomoPrat from "@/img/C.2.3 Ullastret - O.Prat.png"
import iberice from  "@/lib/iberice.js"

const Transcription = props => {
    const {code, epiText, epiImg} = props;
    let mode = epiText.match(/[gd]/gi) ? 'dual' : 'nondual';
    let lines = epiText.split(/\r?\n|\r|\n/g);

    return (
        <div className="transcription wrap">
            <table><tbody>
                {code != 'GI.15.04' ?
                    <>

                        {epiImg[code] && epiImg[code].calco && 
                        <tr><th colSpan="2"><img src={epiImg[code].calco} alt="Calco" /></th></tr>
                        }
                        {lines.map((value) => {
                            return (
                                <tr>
                                    <td className="ibero"><p>{iberice(value, mode)}</p></td>
                                    <td className="latin">{value.replace(':','​:​')}</td>
                                </tr>
                            )
                        })}
                    </>
                    :
                    <>
                        <tr><th colSpan="2"><img src={PlomoPrat} alt="Calco Plomo Ullastret" /></th></tr>
                        <tr>
                            <td className="ibero"><p>𐈀𐈬​:​𐈊𐈯𐈅𐈀𐈭𐈂𐈋</p></td>
                            <td className="latin">ar : basiařebe</td>
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
                    </>
                }
            </tbody></table>
        </div>
    )
}

export default Transcription