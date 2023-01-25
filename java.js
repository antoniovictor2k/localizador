

async function localizarSeuLocal() {
    
    const uri = ("https://api.hgbrasil.com/geoip?format=json-cors&key=475ae311&address=remote&precision=falses");
    const encodedURI = encodeURI(uri);
    const resposta = await fetch (encodedURI);
    const json = await resposta.json();
    console.log(json);


console.log("Tudo ok")



document.getElementById("cidade").innerHTML = json.results.city;
document.getElementById("enderecoIp").innerHTML = json.results.address;
document.getElementById("regiao").innerHTML = json.results.region;
document.getElementById("pais").innerHTML = json.results.country_name;


}
 localizarSeuLocal()