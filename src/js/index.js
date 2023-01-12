/*
    Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
 */
let printText = document.getElementById('console')

const encrypt = () => {
    let getText = document.getElementById('text').value

    if(getText === ''){
        isEmpty()
    } else {

        getText = getText.toLowerCase() // volvemos a minusculas el texto

        let array = getText.split('') // convertimos el string en una array

        for( let i = 0; i < array.length; i++)
        {
            if(array[i] === 'a'){
                array[i] = 'ai'
            } else if (array[i] ===  'e') {
                array[i] = 'enter'
            } else if (array[i] ===  'i') {
                array[i] = 'imes'
            } else if (array[i] ===  'o') {
                array[i] = 'ober'
            } else if (array[i] ===  'u') {
                array[i] = 'ufat'
            }
        }

        printResult(array)
        clearInput()

    }

}

const desdesencrypt = () => {
    let getText = document.getElementById('text').value

    if( getText === ''){
        isEmpty()
    }else{
        getText = getText.toLowerCase() // volvemos a minusculas el texto

        let array = getText.split('') // convertimos el string en una array

        for( let i = 0; i < array.length; i++)
        {
            if(array[i]=== 'o'){
                if(array[i+1] === 'b'){ // for O
                    spliceArray(array, i, 4, 'o')
                    /* array.splice(i, 4, 'o') */
                }
            }else if(array[i] === 'a'){ // for A
                if(array[i+1] === 'i'){
                    spliceArray(array, i, 2, 'a')
                    /* array.splice(i, 2, 'a') */
                }
            }else if (array[i] === 'e'){ // for E
                if(array[i+1] === 'n'){
                    spliceArray(array, i, 5, 'e')
                    /* array.splice(i,5, 'e') */
                }
            }else if(array[i] === 'i'){ // for I
                if(array[i+1] === 'm'){
                    spliceArray(array, i, 4, 'i')
                    /* array.splice(i, 4, 'i') */
                }
            }else if(array[i] === 'u'){ // for U
                if(array[i+1] === 'f'){
                    spliceArray(array, i, 4, 'u')
                    /* array.splice(i, 4, 'u') */
                }
            }
        }

        printResult(array)
        clearInput()
    }
}

const copy = () => {
    alert('Texto copiado')
}

const isEmpty = () => {
    console.log('entre')
        printText.innerHTML = `
            <p class="vacio">Favor de ingrear un texto</p>
        `
}

const printResult = (array) => {
    let newText = array.join('') // Convetimos el array en un string de nuevo
    printText.innerHTML=`
        <div id="result-container">
            <textarea disable class="result-text test" cols="20" rows="22">${newText}</textarea>
        </div>
        <div id="copy">
            <button class="btn btn-copy" onclick="copy()">Copiar</button>
        </div>
    `
}

const clearInput = () => {
    document.getElementById("text").value = ""
}

const spliceArray = (text ,position, numberDelete, vowel) => {
    text.splice(position, numberDelete, vowel)
    return text
}
