import PlomoPrat from "@/img/C.2.3 Ullastret - O.Prat.png"

const Transcription = props => {
    const epiText = props.epiText;

    return (
        <div className="transcription wrap">
            <table><tbody>
                {props.code != 'GI.15.04' ?
                    <tr><th colSpan="2">
                        <pre>{epiText}</pre>
                    </th></tr>
                    :
                    <>
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
                    </>
                }
            </tbody></table>
        </div>
    )
}

export default Transcription