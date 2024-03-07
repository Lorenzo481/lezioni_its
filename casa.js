let casa = {
    "casa": {
        "finestre": 4,
        "colore_pareti": "bianche",
        "porta": 1,
        "materiali": {
            "muri": "marmo",
            "controsoffitti": "cartongesso",
            "pavimento": "legno"
        },
        "elettrodomestici": [
            "forno",
            "lavatrice",
            "lavastoviglie"
        ],
        "console": [
            {
                "play4": {
                    "colore": "rossa",
                    "joistick": 2
                }
            },
            {
                "play5": {
                    "colore": "bianco",
                    "joistick": 1
                }
            },
            "nintendoswitch"
        ]
    }
}

//console.log(casa)
console.log(casa.casa.console[0].play4.colore)