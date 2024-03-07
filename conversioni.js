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
    "Cittadinanza" : "Italia"
}

let json_to_string = JSON.stringify(cv)
console.log(json_to_string)

let string_to_json = JSON.parse(json_to_string)
console.log(string_to_json)