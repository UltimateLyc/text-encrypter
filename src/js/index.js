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

    let arreglo = getText.split('') // convertimos el string en una array

    for( let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] === 'a'){
            arreglo[i] = 'ai'
        } else if (arreglo[i] ===  'e') {
            arreglo[i] = 'enter'
        } else if (arreglo[i] ===  'i') {
            arreglo[i] = 'imes'
        } else if (arreglo[i] ===  'o') {
            arreglo[i] = 'ober'
        } else if (arreglo[i] ===  'u') {
            arreglo[i] = 'ufat'
        }
    }

    getText = arreglo.join('') // Convetimos el array en un string de nuevo

    }

    printResult(getText)
    clearInput()
    
}

const desdesencrypt = () => {
    let getText = document.getElementById('text').value

    if( getText === ''){
        isEmpty()
    }else{
        console.log('Im no empty')
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

const printResult = (text) => {
    printText.innerHTML=`
        <div id="result-container">
            <textarea disable class="result-text test" cols="20" rows="22">${text}</textarea>
        </div>
        <div id="copy">
            <button class="btn btn-copy" onclick="copy()">Copiar</button>
        </div>
    `
}

const clearInput = () => {
    document.getElementById("text").value = ""
}
