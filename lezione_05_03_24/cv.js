let cv = {
    "Nome" : "Lorenzo",
    "Cognome" : "Natale",
    "Indirizzo" : "Via Roma 21",
    "Tel" : "Null",
    "Mobile" : 3703075532,
    "Email": "lorenzo.natale21@gmail.com",
    "Sito" : "Null",
    "Sesso" : "Maschio",
    "Ddn" : "14/09/2004",
    "Cittadinanza" : "Italia",
}

let contenitoreCv = document.getElementById('cv')
let contenuto = ""
for (let e of Object.entries(cv)){
    contenuto = contenuto + '<div><b>' + e[0] + ':</b> <span>' + e[1] + '</span></div>'
}
contenitoreCv.innerHTML = contenuto
