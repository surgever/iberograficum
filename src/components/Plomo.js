import React from "react"
import PlomoPrat from "../img/C.2.3 Ullastret - O.Prat.png"
import $ from "jquery"

const Plomo = () => {
    
    // Document animation needs to be global
    var $plom, h, ventW;
    var desplazarPerspectiva = function (event) {
        //console.log(arguments);
        var posX = event.clientX / ventW; // (0 = izq / 1 = der)
        var posY = event.clientY / h; // (0 = top / 1 = btm)
        $plom.css(
            'transform', 'translateY(+20px) translateZ(+160px) rotateX(' + (posY * 50 - 25) + 'deg) rotateY(' + ((posX * -40) + 20) + 'deg) translateX(' + ((posX * -200) + 100) + 'px)' //translateX(px)
        );
        //console.log('translateZ(-120px) rotateX('+(posY*30-20)+'deg) rotateY('+ ((posX*-50)+25) +'deg) ');
    };

    // Movement
    if (/Android.+mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
        $plom = $('#plom img');
        console.log('asdasdasdasd');
        $('#plom').hover(function (event) { //in
            ventW = $(window).width();
            h = $(window).height();
            desplazarPerspectiva(event);
            setTimeout(function () {
                $plom.removeClass('transition');
                $('#plom').unbind('mousemove').mousemove(desplazarPerspectiva);
            }, 200);

        }, function () { // out 
            $('#plom').unbind('mousemove');
            $plom.addClass('transition');
            //$plom[0].offsetHeight;
            $plom.attr('style', '');
        })
    }

    return (
        
        <div className="example">
            <figure id="plom"><a href="https://i.postimg.cc/fTLVTL44/C-2-3-Ullastret-Foto.png" target="_blank">
                <img className="transition" src="https://i.postimg.cc/fTLVTL44/C-2-3-Ullastret-Foto.png" />
            </a></figure>
            <div className="wrap">
                <table><tbody>
                    <tr><th colSpan="2"><img src={PlomoPrat} /></th></tr>
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