/** 
 * Transforms Latin into Iberic unicode and vice versa
 * */
 function iberice(raw,modality,decrypt) {
    // Character map lists the correspodences the sequence of letter to sign correspondce in a many-letters-to-one-sign fashion
    // Letters should cover all basic latin alphabet. Signs cover from 0x10200 to 0x10237. (Hex 0x10200 = Dec 66048)
    var charMapSyllabs, charMapVowels;
    var charMapVowelsNonDual = new Array(
        ['Ø'], ['a','á'], ['Ø'], ['e','é'], ['Ø'], ['i','í','y'], ['Ø'], ['o','ó'], ['Ø'], ['u','ú']
    );
    var charMapVowelsDual = new Array(
        ['a','á'], ['Ø'], ['e','é'], ['Ø'], ['Ø'], ['i','í','y'], ['Ø'], ['o','ó'], ['Ø'], ['u','ú']
    );
    var charMapVowelsTrial = new Array(
        ['á'], ['a'], ['é'], ['e'], ['í'], ['i','y'], ['ó'], ['o'], ['ú'], ['u']
    );
    var charMapDecodeNonTrialVowels = new Array(
        ['a'], ['a'], ['e'], ['e'], ['i'], ['i'], ['o'], ['o'], ['u'], ['u']
    );
    var charMapSyllabsNonDual = new Array(
        ['ba','va','pa'], ['be','ve','pe'], ['bi','vi','pi'], ['bo','vo','po'], ['bu','vu','pu'],
        ['Ø'], ['Ø'],['ka','ḱa','kha','cha','ca', 'ga','ja'], ['Ø'], ['Ø'], ['ke','ḱe','khe','che','ce','que','ge','gue','je'], 
        ['Ø'], ['ki','ci','qui','ḱi','gi','gui','ji'], ['Ø'], ['ko','co','go','jo'], ['ku','cu','q','gu','gü','ju','w'], ['Ø'],
        ['tá'], ['ta','da'], ['té'], ['te','de'], ['tí'], ['ti','di'], ['tó'], ['to','do'], ['tú'], ['tu','du']
    );
    var charMapSyllabsDual = new Array(
        ['ba','va','pa'], ['be','ve','pe'], ['bi','vi','pi'], ['bo','vo','po'], ['bu','vu','pu'],
        ['ḱa','kha','cha'], ['ka','ca','ká'], ['ga','ja'], ['ḱe','khe','che'], ['ke','ce','que','ké'], ['ge','gue','je'],
        ['ki','ci','qui','ḱi'], ['gi','gui','ji'], ['ko','co'], ['go','jo'], ['ku','cu','q'], ['gu','gü','ju','w'],
        ['ta'], ['da'], ['te'], ['de'], ['ti'], ['di'], ['to'], ['do'], ['tu'], ['du']
    );
    var charMapDecodeNonDualSyllabs = new Array(
        ['ba'], ['be'], ['bi'], ['bo'], ['bu'],
        ['ka'], ['ka'],['ka'], ['ke'], ['ke'], ['ke'], 
        ['ki'], ['ki'], ['ko'], ['ko'], ['ku'], ['ku'],
        ['ta'], ['ta'], ['te'], ['te'], ['ti'], ['ti'], ['to'], ['to'], ['tu'], ['tu']
    );
    var charMapFinal = new Array(
        ['l'], ['â','ĺ','´l'], ['m'], ['ń','´n','ñ'], ['n'], ['ḿ'], ['m̆','m̌','ṁ'], 
        ['r'], ['r̆','ř','´ŕ','´´r'], ['ŕ','´r'], ['ŝ','´ś','sh'], ['s'], ['ś','´s','z','x'],
        ['‡','f'], ['I','1'], ['L','ʟ'], ['Π','π'], ['¼'], ['½','=']
    );

    // Detect accented dual notation (such as ké/ke) and replace it for standard (ke/ge)
    var accentsDualReplacer = function(input) {
        var result = input; 
        result = result.replace(/[kc]([aeiou])/g,'g$1');
        result = result.replace(/t([aeiou])/g,'d$1');
        result = result.replace(/[kcg]á/g,'ka').replace(/[kcg]é/g,'ke').replace(/[kcg]í/g,'ki').replace(/[kcg]ó/g,'ko').replace(/[kcg]ú/g,'ku');
        result = result.replace(/[td]á/g,'ta').replace(/[td]é/g,'te').replace(/[td]í/g,'ti').replace(/[td]ó/g,'to').replace(/[td]ú/g,'tu');
        return result;
    }
    // Loop through all latin options and replace them with its iberic char
    var mapReplacer = function(input, map, unicodeDecimalStart) {
        var mapLength = map.length,
            result = input; 
        for(var i = 0; i < mapLength; i++) {
            var charOptions = map[i].length;
            for(var j = 0; j < charOptions; j++) {
                result = result.replace(new RegExp(map[i][j], 'g'),String.fromCodePoint( unicodeDecimalStart + i )); //outputt.replace(/bu/g,'\u{10202}');
            }
        }
        return result;
    }
    // Loop through all iberic unicode codepoints and replace them with its first latin correspondence
    var mapDecrypter = function(input, map, unicodeDecimalStart) {
        var mapLength = map.length,
            result = input; 
        for(var i = 0; i < mapLength; i++) {
            result = result.replace(new RegExp(String.fromCodePoint( unicodeDecimalStart + i ), 'g'), map[i][0]);
        }
        return result;
    }

    // Select charmaps based on mode
    if(modality=='nondual') {
        charMapSyllabs = charMapSyllabsNonDual;
        charMapVowels = charMapVowelsNonDual;
    } else {
        charMapSyllabs = charMapSyllabsDual;
        if(modality=='dual') {
            charMapVowels = charMapVowelsDual;
            // the only change for dual finals-charmap is that 's' is represented by complex sigma  (10:ŝ)
            charMapFinal[10] = ['s','ŝ','´ś','sh']; 
        } else if(modality=='trial') {
            charMapVowels = charMapVowelsTrial;
        }
    }
    
    if(decrypt === undefined) {
        // Begin processing the latin text: notation systemization
        var output = raw;
        output = output.replace(/R/g,'ŕ').replace(/S/g,'ś').replace(/I/g,'1').replace(/L/g,'ʟ').replace(/P/g,'Π').replace(/V/g,'Ⅴ').replace(/X/g,'Ⅹ');
        output = output.replace(/ [:·] /g,':');
        output = output.toLowerCase();
        output = output.replace(/´l/g,'ĺ').replace(/[`'´]r/g,'ŕ').replace(/[`'´]s/g,'ś').replace(/[`'´]m/g,'ḿ').replace(/[`'´]k/g,'ḱ').replace(/([`'´][`'´]m|m̌)/g,'ṁ');
        output = output.replace(/rr/g,'ŕ').replace(/ch([ae])/g,'ḱ$1').replace(/ch/g,'ś').replace(/gü/g,'guh');
    
        // Replace syllabogram clusters (such as tri) and expand them (tiri)
        output = output.replace(/([bpvkḱcgjtd])([lĺrŕsśz])([aeiouáéíóú])/g,'$1$3$2$3');
        // Detect accented dual notation (such as ké/ke) and replace it for standard notation (ke/ge), only if there is no standard notation (gd)
        if(!output.match(/[gd]/g) && output.match(/[kcgtd][áéíóú]/g)) output = accentsDualReplacer(output);
        // Fill unnaccompanied sylabograms with an extra letter (k. -> ki)
        output = output.replace(/([bpvkḱcgjtd](?![aeiou]))/g,'$1e');
    
        // Use the character maps to replace letters for unicode iberic signs
        output = mapReplacer(output,charMapSyllabs,66058);
        output = mapReplacer(output,charMapVowels,66048);
        output = mapReplacer(output,charMapFinal,66085);
        output = output.replace(/h/g,'').toUpperCase();
        
        // Give the formatted text back
        return  '\u{10239}' + output + '\u{1023f}';
    } else {
        // Begin decrypting the iberic text
        var output = raw;
        // Pad separation dots 
        output = output.replace(/[:·]/g,' : ');

        // Remove provisional unicode marks
        output = output.replace(new RegExp(String.fromCodePoint( 66105 ), 'g'),'');
        output = output.replace(new RegExp(String.fromCodePoint( 66111 ), 'g'),'');

        // Use the character maps to replace unicode signs for latin correspondence
        if(modality!='trial') {
            charMapVowels = charMapDecodeNonTrialVowels;
            if(modality=='nondual') charMapSyllabs = charMapDecodeNonDualSyllabs;
        }
        output = mapDecrypter(output,charMapSyllabs,66058);
        output = mapDecrypter(output,charMapVowels,66048);
        output = mapDecrypter(output,charMapFinal,66085);

        return output;

    }
}

export default iberice