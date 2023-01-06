/*
    Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
 */

const encriptar = () => {
    console.log('encriptar')
    let getText = document.getElementById('text').value
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

    // console.log('nuevo arreglo', arreglo)
    getText = arreglo.join('') // Convetimos el array en un string de nuevo
    console.log("🚀 ~ getText", getText)

    
}

const desencriptar = () => {
    console.log('desencriptar')
}
