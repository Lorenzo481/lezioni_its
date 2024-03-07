let contenitore = document.getElementById('univoco')

let somma = 0
const id = setInterval (() => {
    somma = somma + 1
    contenitore.innerHTML = '<h1>' + somma + '</h1>'
    console.log(contenitore)
}, 1000 * 1)

setTimeout (() => {
    clearInterval(id)
},5000)
