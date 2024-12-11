const apis = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

async function fetchData(urls){
    for await (url of urls){
        try {
            const responde = await fetch(url);
            const data = await responde.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }      
    }
}

fetchData(apis)

