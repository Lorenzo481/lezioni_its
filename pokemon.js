async function main (){
    let url = "https://pokeapi.co/api/v2/pokemon/ditto"
    let response = await fetch (url)
    let body = await response.json()
    console.log(body)
}

main ()